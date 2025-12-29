import type { Metadata } from "next";
import Link from "next/link";
import { Header, Footer } from "@/components/layout";
import { Section, SectionHeader, Card, Button } from "@/components/ui";

export const metadata: Metadata = {
  title: "Barberkurs",
  description:
    "Lær barberfaget fra en av Nordens beste. Barberkurs i Harstad for profesjonelle og entusiaster. Grunnkurs, videregående og spesialkurs.",
};

// Placeholder kurs - vil bli erstattet med Sanity data
const courses = [
  {
    slug: "grunnkurs-barber",
    title: "Grunnkurs Barber",
    duration: "2 dager",
    location: "Harstad",
    description:
      "Lær grunnleggende barberteknikker fra bunn. For deg som vil starte i bransjen eller forbedre dine ferdigheter.",
    date: "Kommer snart",
    spots: null,
    price: "8 500,-",
    status: "upcoming" as const,
  },
  {
    slug: "fade-masterclass",
    title: "Fade Masterclass",
    duration: "1 dag",
    location: "Harstad",
    description:
      "Perfeksjoner fade-teknikken. Fra skin fade til drop fade - lær alle variantene og bli ekspert.",
    date: "Kommer snart",
    spots: null,
    price: "4 500,-",
    status: "upcoming" as const,
  },
  {
    slug: "skjegg-styling",
    title: "Skjegg & Styling",
    duration: "1 dag",
    location: "Harstad",
    description:
      "Alt om skjeggtrimming, forming og tradisjonell barbering med kniv. Inkluderer varmt håndkle-behandling.",
    date: "Kommer snart",
    spots: null,
    price: "4 500,-",
    status: "upcoming" as const,
  },
];

function CourseStatusBadge({ status }: { status: "upcoming" | "open" | "few_left" | "full" }) {
  const styles = {
    upcoming: "bg-gold/20 text-gold",
    open: "bg-success/20 text-success",
    few_left: "bg-gold/20 text-gold",
    full: "bg-error/20 text-error",
  };

  const labels = {
    upcoming: "Kommer snart",
    open: "Ledige plasser",
    few_left: "Få plasser igjen",
    full: "Fullt",
  };

  return (
    <span className={`text-xs uppercase tracking-wider px-2 py-1 rounded ${styles[status]}`}>
      {labels[status]}
    </span>
  );
}

export default function KursPage() {
  return (
    <>
      <Header />

      <main className="pt-20">
        {/* Hero */}
        <Section background="deep" className="py-16 md:py-24">
          <div className="text-center max-w-2xl mx-auto">
            <h1 className="mb-4">Barberkurs</h1>
            <p className="text-lg text-body mb-6">
              Lær fra en av Nordens beste barbere. Praktisk opplæring, teori og
              teknikk i profesjonelle omgivelser.
            </p>
            <div className="flex items-center justify-center gap-2 text-gold">
              <svg
                className="w-5 h-5 fill-current"
                viewBox="0 0 20 20"
                aria-hidden="true"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="text-heading text-sm">
                5.0 fra tidligere deltakere
              </span>
            </div>
          </div>
        </Section>

        {/* Instructor */}
        <Section background="surface">
          <div className="flex flex-col md:flex-row items-center gap-8 max-w-3xl mx-auto">
            {/* Image placeholder */}
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-deep to-surface flex-shrink-0" />

            <div className="text-center md:text-left">
              <h3 className="text-xl mb-1">Tommy Meistad</h3>
              <p className="text-gold text-sm uppercase tracking-wider mb-4">
                Kursinstruktør
              </p>
              <div className="flex flex-wrap justify-center md:justify-start gap-4 text-sm text-muted">
                <span>🏆 Norgesmester 2019</span>
                <span>🏆 Nordisk mester 2020</span>
                <span>🎓 Sertifisert instruktør</span>
              </div>
            </div>
          </div>
        </Section>

        {/* Course List */}
        <Section>
          <SectionHeader
            title="Kommende kurs"
            subtitle="Meld deg på venteliste for å få beskjed når kursene åpner for påmelding."
            centered
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course) => (
              <Card key={course.slug} padding="none" hover className="flex flex-col">
                {/* Image placeholder */}
                <div className="aspect-video bg-gradient-to-br from-surface to-deep" />

                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <h3 className="text-xl">{course.title}</h3>
                    <CourseStatusBadge status={course.status} />
                  </div>

                  <p className="text-sm text-muted mb-2">
                    {course.duration} · {course.location}
                  </p>

                  <p className="text-body text-sm mb-6 flex-grow">
                    {course.description}
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t border-gold-dark/20">
                    <div>
                      <p className="text-muted text-xs">Pris</p>
                      <p className="text-gold text-lg font-heading">
                        {course.price}
                      </p>
                    </div>

                    {course.status === "upcoming" ? (
                      <Button variant="secondary" size="sm" disabled>
                        Kommer snart
                      </Button>
                    ) : (
                      <Link href={`/kurs/${course.slug}`}>
                        <Button size="sm">Se detaljer</Button>
                      </Link>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </Section>

        {/* Waitlist CTA */}
        <Section background="deep">
          <div className="text-center max-w-xl mx-auto">
            <h2 className="mb-4">Vil du vite når kursene åpner?</h2>
            <p className="text-body mb-8">
              Legg igjen e-posten din, så sender vi deg beskjed når det er nye
              kursdatoer tilgjengelig.
            </p>

            {/* Simple email signup - will be connected to backend later */}
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Din e-post"
                className="flex-grow px-4 py-3 bg-surface border border-gold-dark/30 rounded-[var(--radius-sm)] text-heading placeholder:text-muted focus:outline-none focus:border-gold"
              />
              <Button type="submit">Meld interesse</Button>
            </form>
          </div>
        </Section>

        {/* FAQ */}
        <Section>
          <SectionHeader title="Ofte stilte spørsmål" centered />

          <div className="max-w-2xl mx-auto space-y-6">
            <div className="border-b border-gold-dark/20 pb-6">
              <h3 className="text-lg mb-2">Hvem passer kursene for?</h3>
              <p className="text-body">
                Kursene passer for alle fra nybegynnere som vil lære faget fra
                bunnen, til erfarne barbere som vil videreutvikle teknikkene
                sine.
              </p>
            </div>

            <div className="border-b border-gold-dark/20 pb-6">
              <h3 className="text-lg mb-2">Hva er inkludert i prisen?</h3>
              <p className="text-body">
                Alle kurs inkluderer materiell, lunsj og kaffe/te gjennom
                dagen. Du får også sertifikat ved fullført kurs.
              </p>
            </div>

            <div className="border-b border-gold-dark/20 pb-6">
              <h3 className="text-lg mb-2">Kan jeg avbestille?</h3>
              <p className="text-body">
                Ja, du kan avbestille inntil 7 dager før kursstart for full
                refusjon. Ved senere avbestilling refunderes 50%.
              </p>
            </div>

            <div className="pb-6">
              <h3 className="text-lg mb-2">Trenger jeg ta med noe?</h3>
              <p className="text-body">
                Nei, alt utstyr og materiell er inkludert. Ta med deg selv og
                godt humør!
              </p>
            </div>
          </div>
        </Section>
      </main>

      <Footer />
    </>
  );
}
