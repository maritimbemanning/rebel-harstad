import type { Metadata } from "next";
import Image from "next/image";
import { Header, Footer } from "@/components/layout";
import { Section, Button } from "@/components/ui";

export const metadata: Metadata = {
  title: "Galleri",
  description:
    "Se vårt arbeid. Fade, klassiske klipp, skjeggstyling og mer fra Rebel Barber i Harstad.",
};

const BOOKING_URL = "https://timma.no/salong/Rebel";

// Placeholder gallery - replace with actual images from Instagram
const galleryImages = [
  { id: 1, alt: "Klassisk fade", category: "fade" },
  { id: 2, alt: "Skjeggtrimming", category: "skjegg" },
  { id: 3, alt: "Teksturert klipp", category: "klassisk" },
  { id: 4, alt: "Skin fade", category: "fade" },
  { id: 5, alt: "Skjegg styling", category: "skjegg" },
  { id: 6, alt: "Moderne styling", category: "klassisk" },
  { id: 7, alt: "Low fade", category: "fade" },
  { id: 8, alt: "Full skjegg", category: "skjegg" },
  { id: 9, alt: "Slick back", category: "klassisk" },
  { id: 10, alt: "Mid fade", category: "fade" },
  { id: 11, alt: "Trimmet skjegg", category: "skjegg" },
  { id: 12, alt: "Pompadour", category: "klassisk" },
];

export default function GalleriPage() {
  return (
    <>
      <Header />

      <main className="pt-20">
        {/* Hero */}
        <Section background="deep" className="py-16 md:py-24">
          <div className="text-center">
            <h1 className="mb-4">Vårt arbeid</h1>
            <p className="text-lg text-body max-w-xl mx-auto">
              La resultatene snakke for seg selv. Her er et utvalg av arbeidet
              vårt.
            </p>
          </div>
        </Section>

        {/* Gallery Grid */}
        <Section>
          {/* Masonry-style grid */}
          <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
            {galleryImages.map((image, index) => (
              <div
                key={image.id}
                className={`
                  relative overflow-hidden rounded-[var(--radius-md)] group
                  break-inside-avoid
                  ${index % 3 === 0 ? "aspect-[3/4]" : index % 3 === 1 ? "aspect-square" : "aspect-[4/3]"}
                `}
              >
                {/* Placeholder gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-surface to-deep" />

                {/* Uncomment when images are ready:
                <Image
                  src={`/gallery/${image.id}.jpg`}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
                */}

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-deep/0 group-hover:bg-deep/40 transition-colors duration-300 flex items-center justify-center">
                  <span className="text-heading text-sm uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {image.alt}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Instagram link */}
          <div className="text-center mt-12">
            <p className="text-muted mb-4">Se mer av vårt arbeid på Instagram</p>
            <a
              href="https://www.instagram.com/barber_meistad/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-gold hover:text-gold-light transition-colors"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                  clipRule="evenodd"
                />
              </svg>
              @barber_meistad
            </a>
          </div>
        </Section>

        {/* CTA */}
        <Section background="surface">
          <div className="text-center">
            <h2 className="mb-4">Klar for din forvandling?</h2>
            <p className="text-body mb-8 max-w-md mx-auto">
              Book din time i dag og la oss skape noe bra sammen.
            </p>
            <Button href={BOOKING_URL} external size="lg">
              Book nå
            </Button>
          </div>
        </Section>
      </main>

      <Footer />
    </>
  );
}
