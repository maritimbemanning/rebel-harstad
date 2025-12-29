import { Section, Button } from "@/components/ui";

const BOOKING_URL = "https://timma.no/salong/Rebel";

export function FirstTime() {
  return (
    <Section background="deep" narrow>
      <div className="text-center">
        <h3 className="mb-4">Første gang hos Rebel?</h3>

        <p className="text-body mb-6 max-w-lg mx-auto">
          Book enkelt via Timma. Vi starter alltid med en konsultasjon for å
          forstå hva du ønsker. Ingen stress, ingen forventninger.
        </p>

        <Button href={BOOKING_URL} external>
          Book din første time
        </Button>
      </div>
    </Section>
  );
}
