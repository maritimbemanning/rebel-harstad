import Image from "next/image";
import Link from "next/link";
import { Section, SectionHeader } from "@/components/ui";

// Placeholder images - replace with actual Instagram images
const galleryImages = [
  { src: "/gallery/placeholder-1.jpg", alt: "Klassisk fade" },
  { src: "/gallery/placeholder-2.jpg", alt: "Skjeggtrimming" },
  { src: "/gallery/placeholder-3.jpg", alt: "Modern styling" },
  { src: "/gallery/placeholder-4.jpg", alt: "Premium klipp" },
];

export function GalleryPreview() {
  return (
    <Section>
      <SectionHeader title="Vårt arbeid" centered />

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {galleryImages.map((image, index) => (
          <div
            key={index}
            className="relative aspect-square overflow-hidden rounded-[var(--radius-md)] group"
          >
            {/* Placeholder gradient until real images are added */}
            <div className="absolute inset-0 bg-gradient-to-br from-surface to-deep" />

            {/* Uncomment when images are ready:
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 50vw, 25vw"
            />
            */}

            {/* Hover overlay */}
            <div className="absolute inset-0 bg-deep/0 group-hover:bg-deep/40 transition-colors duration-300" />
          </div>
        ))}
      </div>

      <div className="text-center mt-8">
        <Link
          href="/galleri"
          className="inline-flex items-center gap-2 text-gold hover:text-gold-light transition-colors"
        >
          Se hele galleriet
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </Link>
      </div>
    </Section>
  );
}
