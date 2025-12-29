import type { Metadata } from "next";
import { Header, Footer } from "@/components/layout";
import { Section, Button, Card } from "@/components/ui";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Finn oss i Harstad. Åpningstider, adresse og kontaktinformasjon for Rebel Barber.",
};

const BOOKING_URL = "https://timma.no/salong/Rebel";
const INSTAGRAM_URL = "https://www.instagram.com/barber_meistad/";

const openingHours = [
  { day: "Mandag", hours: "09:00 - 18:00" },
  { day: "Tirsdag", hours: "09:00 - 18:00" },
  { day: "Onsdag", hours: "09:00 - 18:00" },
  { day: "Torsdag", hours: "09:00 - 18:00" },
  { day: "Fredag", hours: "09:00 - 18:00" },
  { day: "Lørdag", hours: "10:00 - 16:00" },
  { day: "Søndag", hours: "Stengt" },
];

export default function KontaktPage() {
  return (
    <>
      <Header />

      <main className="pt-20">
        {/* Hero */}
        <Section background="deep" className="py-16 md:py-24">
          <div className="text-center">
            <h1 className="mb-4">Kontakt</h1>
            <p className="text-lg text-body max-w-xl mx-auto">
              Finn oss i hjertet av Harstad. Vi ser frem til å møte deg.
            </p>
          </div>
        </Section>

        {/* Contact Info Grid */}
        <Section>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Address Card */}
            <Card className="text-center">
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gold/10 flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-gold"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <h3 className="text-lg mb-2">Adresse</h3>
              <p className="text-body">
                Harstad
                <br />
                <span className="text-muted text-sm">
                  (Fullstendig adresse kommer)
                </span>
              </p>
            </Card>

            {/* Phone Card */}
            <Card className="text-center">
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gold/10 flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-gold"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
              <h3 className="text-lg mb-2">Telefon</h3>
              <p className="text-body">
                <span className="text-muted text-sm">
                  Book via Timma
                </span>
              </p>
            </Card>

            {/* Social Card */}
            <Card className="text-center md:col-span-2 lg:col-span-1">
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gold/10 flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-gold"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <h3 className="text-lg mb-2">Følg oss</h3>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold hover:text-gold-light transition-colors"
              >
                @barber_meistad
              </a>
            </Card>
          </div>
        </Section>

        {/* Opening Hours */}
        <Section background="surface">
          <div className="max-w-md mx-auto">
            <h2 className="text-center mb-8">Åpningstider</h2>

            <div className="space-y-0 divide-y divide-gold-dark/20">
              {openingHours.map((item) => (
                <div
                  key={item.day}
                  className="py-4 flex justify-between items-center"
                >
                  <span className="text-heading">{item.day}</span>
                  <span
                    className={
                      item.hours === "Stengt" ? "text-muted" : "text-body"
                    }
                  >
                    {item.hours}
                  </span>
                </div>
              ))}
            </div>

            <p className="text-center text-muted text-sm mt-6">
              Åpningstidene kan variere. Sjekk alltid tilgjengelighet ved
              booking.
            </p>
          </div>
        </Section>

        {/* Map Placeholder */}
        <Section container={false} className="p-0">
          <div className="h-80 bg-surface flex items-center justify-center">
            <p className="text-muted">Kart kommer snart</p>
            {/* Replace with actual map embed when address is confirmed */}
          </div>
        </Section>

        {/* CTA */}
        <Section background="deep">
          <div className="text-center">
            <h2 className="mb-4">Klar til å booke?</h2>
            <p className="text-body mb-8 max-w-md mx-auto">
              Book enkelt online via Timma. Velg tid som passer deg.
            </p>
            <Button href={BOOKING_URL} external size="lg">
              Book time
            </Button>
          </div>
        </Section>
      </main>

      <Footer />
    </>
  );
}
