import Image from "next/image";
import { Button } from "@/components/ui";
import { HeroMedia } from "@/components/ui/HeroMedia";

const BOOKING_URL = "https://timma.no/salong/Rebel";

export function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] max-h-[1000px] flex items-center justify-center">
      {/* Background Media */}
      <HeroMedia
        imageSrc="/hero-placeholder.jpg"
        imageAlt="Rebel Barber - Premium barbersalong i Harstad"
        // videoSrc="/hero-video" // Uncomment when video is ready
        overlayOpacity={65}
        className="absolute inset-0"
      />

      {/* Content */}
      <div className="relative z-10 container text-center">
        {/* Logo */}
        <div className="mb-8">
          <Image
            src="/logo.png"
            alt="Rebel - by Barber Meistad and Friends"
            width={280}
            height={120}
            className="mx-auto h-24 md:h-32 w-auto"
            priority
          />
        </div>

        {/* Tagline */}
        <p className="text-lg md:text-xl text-heading/90 mb-12 max-w-md mx-auto">
          Tradisjonelt håndverk. Moderne presisjon.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <Button href={BOOKING_URL} external size="lg">
            Book time
          </Button>
          <Button href="/kurs" variant="secondary" size="lg">
            Se kurs
          </Button>
        </div>

        {/* Social Proof */}
        <div className="flex items-center justify-center gap-2 text-gold">
          <svg
            className="w-5 h-5 fill-current"
            viewBox="0 0 20 20"
            aria-hidden="true"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          <span className="text-heading text-sm">
            5.0 · 1700+ anmeldelser
          </span>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-heading/50"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
}
