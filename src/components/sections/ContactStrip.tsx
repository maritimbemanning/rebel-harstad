import { Button } from "@/components/ui";

const BOOKING_URL = "https://timma.no/salong/Rebel";

export function ContactStrip() {
  return (
    <section className="bg-surface py-12">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          {/* Contact Info */}
          <div className="flex flex-wrap justify-center md:justify-start gap-x-6 gap-y-2 text-sm">
            <span className="flex items-center gap-2">
              <svg
                className="w-4 h-4 text-gold"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              Harstad
            </span>

            <span className="text-muted hidden md:inline">|</span>

            <span>Man-Fre: 09-18</span>
            <span className="text-muted hidden sm:inline">|</span>
            <span>Lør: 10-16</span>
            <span className="text-muted hidden sm:inline">|</span>
            <span>Søn: Stengt</span>
          </div>

          {/* CTA */}
          <Button href={BOOKING_URL} external>
            Book din time
          </Button>
        </div>
      </div>
    </section>
  );
}
