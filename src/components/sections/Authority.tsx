import Image from "next/image";
import Link from "next/link";
import { Section } from "@/components/ui";

const achievements = [
  { icon: "🏆", text: "Norgesmester Barber 2019" },
  { icon: "🏆", text: "Nordisk mester 2020" },
  { icon: "📍", text: "15+ års erfaring" },
];

export function Authority() {
  return (
    <Section>
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Image */}
        <div className="relative aspect-[4/5] rounded-[var(--radius-lg)] overflow-hidden">
          {/* Placeholder until real image */}
          <div className="absolute inset-0 bg-gradient-to-br from-surface to-deep" />

          {/* Uncomment when image is ready:
          <Image
            src="/team/tommy.jpg"
            alt="Tommy Meistad - Grunnlegger og Master Barber"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          */}
        </div>

        {/* Content */}
        <div>
          <h2 className="mb-4">Tommy Meistad</h2>
          <p className="text-gold uppercase tracking-wider text-sm mb-6">
            Grunnlegger & Master Barber
          </p>

          <blockquote className="text-lg text-heading/90 mb-8 border-l-2 border-gold pl-6">
            "Hver klient fortjener en personlig opplevelse. Hos Rebel handler det ikke
            bare om klippet – det handler om håndverket, stoltheten og respekten for
            tradisjonen."
          </blockquote>

          {/* Achievements */}
          <ul className="space-y-3 mb-8">
            {achievements.map((achievement, index) => (
              <li key={index} className="flex items-center gap-3">
                <span className="text-xl">{achievement.icon}</span>
                <span className="text-body">{achievement.text}</span>
              </li>
            ))}
          </ul>

          <Link
            href="/om"
            className="inline-flex items-center gap-2 text-gold hover:text-gold-light transition-colors"
          >
            Les mer om oss
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
      </div>
    </Section>
  );
}
