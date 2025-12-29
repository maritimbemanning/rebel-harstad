import type { Metadata } from "next";
import { Header, Footer } from "@/components/layout";
import { Section, SectionHeader, Button } from "@/components/ui";

export const metadata: Metadata = {
  title: "Tjenester & Priser",
  description:
    "Se våre tjenester og priser. Herreklipp, skjeggtrimming, styling og behandlinger hos Rebel Barber i Harstad.",
};

const BOOKING_URL = "https://timma.no/salong/Rebel";

const serviceCategories = [
  {
    id: "herreklipp",
    title: "Herreklipp",
    services: [
      {
        name: "Herreklipp (30 min)",
        price: "700,-",
        description: "Enkel klipp/stuss av håret",
      },
      {
        name: "Herreklipp (45 min)",
        price: "850,-",
        description: "Ny frisyre/designklipp - eller mer enn bare en vanlig stuss",
      },
      {
        name: "Fade kun på sider og bak",
        price: "600,-",
        description: "Kun fade, ikke klipp oppå. Fordel å stille med nyvasket hår",
      },
    ],
  },
  {
    id: "skjegg",
    title: "Skjegg",
    services: [
      {
        name: "Skjegg (15 min)",
        price: "550,-",
        description: "Stuss av skjegg og forming av linjer med bruk av maskin",
      },
      {
        name: "Skjegg (30 min)",
        price: "700,-",
        description: "Forming av skjegg - kniv brukes på øvre linje",
      },
      {
        name: "Skjegg (45 min)",
        price: "950,-",
        description: "Full skjeggforming med kniv og varme omslag",
      },
    ],
  },
  {
    id: "pakke",
    title: "Pakker",
    services: [
      {
        name: "Herreklipp + Skjegg",
        price: "Fra 1250,-",
        description: "Kombiner herreklipp med skjeggtrimming",
      },
    ],
  },
];

export default function TjenesterPage() {
  return (
    <>
      <Header />

      <main className="pt-20">
        {/* Hero */}
        <Section background="deep" className="py-16 md:py-24">
          <div className="text-center">
            <h1 className="mb-4">Tjenester & Priser</h1>
            <p className="text-lg text-body max-w-xl mx-auto">
              Alt du trenger for et komplett utseende. Tradisjonelt håndverk
              møter moderne teknikk.
            </p>
          </div>
        </Section>

        {/* Service Categories */}
        {serviceCategories.map((category) => (
          <Section
            key={category.id}
            id={category.id}
            background={category.id === "skjegg" ? "surface" : "default"}
          >
            <SectionHeader title={category.title} />

            <div className="space-y-0 divide-y divide-gold-dark/20">
              {category.services.map((service, index) => (
                <div
                  key={index}
                  className="py-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2"
                >
                  <div>
                    <h3 className="text-xl text-heading">{service.name}</h3>
                    <p className="text-muted text-sm">{service.description}</p>
                  </div>
                  <div className="text-gold text-xl font-heading">
                    {service.price}
                  </div>
                </div>
              ))}
            </div>
          </Section>
        ))}

        {/* Sticky CTA */}
        <div className="sticky bottom-0 bg-surface/95 backdrop-blur-sm border-t border-gold-dark/20 py-4 z-40">
          <div className="container flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-heading text-sm">Klar til å booke?</p>
            <Button href={BOOKING_URL} external>
              Book time på Timma
            </Button>
          </div>
        </div>

        {/* Note */}
        <Section background="deep">
          <div className="text-center max-w-xl mx-auto">
            <p className="text-muted text-sm">
              Prisene er veiledende og kan variere. Alle priser inkluderer MVA.
              Ved avbestilling senere enn 24 timer før avtalt tid, faktureres
              50% av behandlingens pris.
            </p>
          </div>
        </Section>
      </main>

      <Footer />
    </>
  );
}
