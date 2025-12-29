import Link from "next/link";
import { Section, SectionHeader, Card, CardTitle } from "@/components/ui";

const services = [
  {
    title: "Hårklipp",
    price: "Fra 450,-",
    href: "/tjenester#harklipp",
  },
  {
    title: "Skjegg",
    price: "Fra 350,-",
    href: "/tjenester#skjegg",
  },
  {
    title: "Hår + Skjegg",
    price: "Fra 650,-",
    href: "/tjenester#pakke",
  },
  {
    title: "Behandlinger",
    price: "Fra 200,-",
    href: "/tjenester#behandlinger",
  },
];

export function ServicesPreview() {
  return (
    <Section background="surface">
      <SectionHeader title="Tjenester" centered />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {services.map((service) => (
          <Link key={service.title} href={service.href}>
            <Card
              hover
              className="h-full text-center border border-gold-dark/20 hover:border-gold/40"
            >
              <CardTitle as="h3" className="text-xl mb-2">
                {service.title}
              </CardTitle>
              <p className="text-gold text-lg">{service.price}</p>
            </Card>
          </Link>
        ))}
      </div>

      <div className="text-center mt-8">
        <Link
          href="/tjenester"
          className="inline-flex items-center gap-2 text-gold hover:text-gold-light transition-colors"
        >
          Se alle tjenester
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
