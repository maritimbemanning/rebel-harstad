import type { Metadata } from "next";
import Image from "next/image";
import { Header, Footer } from "@/components/layout";
import { Section, SectionHeader, Button, Card } from "@/components/ui";

export const metadata: Metadata = {
  title: "Om Rebel Barber",
  description:
    "Møt Tommy Meistad og teamet bak Rebel Barber. Norgesmester, Nordisk mester, og 15+ års erfaring med tradisjonelt barberhåndverk.",
};

const BOOKING_URL = "https://timma.no/salong/Rebel";

const achievements = [
  { icon: "🏆", title: "Norgesmester Barber", year: "2019" },
  { icon: "🏆", title: "Nordisk mester", year: "2020" },
  { icon: "🎓", title: "Sertifisert instruktør", year: "" },
  { icon: "📍", title: "15+ års erfaring", year: "" },
];

const team = [
  {
    name: "Tommy Meistad",
    role: "Grunnlegger & Master Barber",
    bio: "Tommy startet sin reise som barber for over 15 år siden. Med en lidenskap for tradisjonelt håndverk og moderne teknikk har han bygget Rebel til å bli en av Nord-Norges mest anerkjente barbersalonger.",
    image: "/team/tommy.jpg",
  },
  {
    name: "Stine Thoresen",
    role: "Barber",
    bio: "Stine bringer sin unike kombinasjon av kreativitet og presisjon til teamet. Med øye for detaljer og en avslappet tilnærming skaper hun alltid en god opplevelse.",
    image: "/team/stine.jpg",
  },
];

export default function OmPage() {
  return (
    <>
      <Header />

      <main className="pt-20">
        {/* Hero */}
        <Section background="deep" className="py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image placeholder */}
            <div className="relative aspect-[4/5] rounded-[var(--radius-lg)] overflow-hidden order-2 md:order-1">
              <div className="absolute inset-0 bg-gradient-to-br from-surface to-deep" />
              {/* Uncomment when image ready:
              <Image
                src="/team/tommy.jpg"
                alt="Tommy Meistad"
                fill
                className="object-cover"
                priority
              />
              */}
            </div>

            {/* Content */}
            <div className="order-1 md:order-2">
              <p className="text-gold uppercase tracking-wider text-sm mb-4">
                Grunnlegger & Master Barber
              </p>
              <h1 className="mb-6">Tommy Meistad</h1>
              <blockquote className="text-lg text-heading/90 mb-8 border-l-2 border-gold pl-6">
                "Hver klient fortjener en personlig opplevelse. Hos Rebel
                handler det ikke bare om klippet – det handler om håndverket,
                stoltheten og respekten for tradisjonen."
              </blockquote>
            </div>
          </div>
        </Section>

        {/* Achievements */}
        <Section background="surface">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-2">{achievement.icon}</div>
                <h3 className="text-lg mb-1">{achievement.title}</h3>
                {achievement.year && (
                  <p className="text-muted text-sm">{achievement.year}</p>
                )}
              </div>
            ))}
          </div>
        </Section>

        {/* Story */}
        <Section>
          <div className="max-w-3xl mx-auto">
            <SectionHeader
              title="Historien bak Rebel"
              subtitle="Fra lidenskapelig hobby til prisbelønnet barbersalong"
              centered
            />

            <div className="prose prose-invert prose-gold max-w-none space-y-6 text-body">
              <p>
                Rebel ble født ut av en enkel filosofi: ekte håndverk tar tid,
                og kvalitet kan ikke forhaste. I en verden der alt går fortere,
                ville vi skape et sted der menn kan ta seg tid til å pleie seg
                selv – uten stress, uten hastverk.
              </p>

              <p>
                Navnet "Rebel" handler om å gå mot strømmen. Vi nekter å
                kompromisse på kvalitet. Vi nekter å følge trender som ikke
                tjener våre kunder. Vi holder fast ved tradisjonelle teknikker
                som har fungert i generasjoner, samtidig som vi omfavner moderne
                metoder som faktisk forbedrer resultatet.
              </p>

              <p>
                Fra den første stolen i 2010 til dagens salong i Harstad har
                målet alltid vært det samme: å gi hver eneste kunde en opplevelse
                de husker – og et resultat de er stolte av.
              </p>
            </div>
          </div>
        </Section>

        {/* Team */}
        <Section background="surface">
          <SectionHeader title="Teamet" centered />

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {team.map((member) => (
              <Card key={member.name} padding="none" className="overflow-hidden">
                {/* Image placeholder */}
                <div className="relative aspect-square">
                  <div className="absolute inset-0 bg-gradient-to-br from-deep to-surface" />
                  {/* Uncomment when image ready:
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                  */}
                </div>

                <div className="p-6">
                  <h3 className="text-xl mb-1">{member.name}</h3>
                  <p className="text-gold text-sm uppercase tracking-wider mb-4">
                    {member.role}
                  </p>
                  <p className="text-muted text-sm">{member.bio}</p>
                </div>
              </Card>
            ))}
          </div>
        </Section>

        {/* CTA */}
        <Section background="deep">
          <div className="text-center">
            <h2 className="mb-4">Klar til å oppleve Rebel?</h2>
            <p className="text-body mb-8 max-w-md mx-auto">
              Book din time i dag og opplev forskjellen ekte håndverk gjør.
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
