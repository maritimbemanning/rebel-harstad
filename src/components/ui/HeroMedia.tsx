"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

interface HeroMediaProps {
  /** Static image to show immediately (required for good LCP) */
  imageSrc: string;
  imageAlt: string;

  /** Optional video sources - will lazy load after image */
  videoSrc?: string;
  videoPoster?: string;

  /** Overlay opacity (0-100) */
  overlayOpacity?: number;

  /** Additional className */
  className?: string;
}

export function HeroMedia({
  imageSrc,
  imageAlt,
  videoSrc,
  videoPoster,
  overlayOpacity = 60,
  className = "",
}: HeroMediaProps) {
  const [showVideo, setShowVideo] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Don't load video if user prefers reduced motion
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    // Don't load video on slow connections
    const connection = (navigator as Navigator & { connection?: { effectiveType: string } }).connection;
    if (connection?.effectiveType === "slow-2g" || connection?.effectiveType === "2g") {
      return;
    }

    // Only load video if we have a source
    if (!videoSrc) return;

    // Use Intersection Observer to lazy load video
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setShowVideo(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [videoSrc]);

  // Play video when loaded
  useEffect(() => {
    if (showVideo && videoRef.current) {
      videoRef.current.play().catch(() => {
        // Autoplay failed, keep showing image
        setShowVideo(false);
      });
    }
  }, [showVideo, videoLoaded]);

  return (
    <div
      ref={containerRef}
      className={`relative w-full h-full overflow-hidden ${className}`}
    >
      {/* Static image - always rendered for LCP */}
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        priority
        className={`
          object-cover
          transition-opacity duration-1000
          ${showVideo && videoLoaded ? "opacity-0" : "opacity-100"}
        `}
        sizes="100vw"
      />

      {/* Video - lazy loaded, fades in over image */}
      {showVideo && videoSrc && (
        <video
          ref={videoRef}
          className={`
            absolute inset-0 w-full h-full object-cover
            transition-opacity duration-1000
            ${videoLoaded ? "opacity-100" : "opacity-0"}
          `}
          poster={videoPoster}
          muted
          loop
          playsInline
          onLoadedData={() => setVideoLoaded(true)}
        >
          {/* WebM first for better compression */}
          {videoSrc.endsWith(".webm") && (
            <source src={videoSrc} type="video/webm" />
          )}
          {/* MP4 fallback */}
          {videoSrc.endsWith(".mp4") && (
            <source src={videoSrc} type="video/mp4" />
          )}
          {/* If generic path, try both */}
          {!videoSrc.endsWith(".webm") && !videoSrc.endsWith(".mp4") && (
            <>
              <source src={`${videoSrc}.webm`} type="video/webm" />
              <source src={`${videoSrc}.mp4`} type="video/mp4" />
            </>
          )}
        </video>
      )}

      {/* Dark overlay */}
      <div
        className="absolute inset-0 bg-deep"
        style={{ opacity: overlayOpacity / 100 }}
        aria-hidden="true"
      />
    </div>
  );
}
