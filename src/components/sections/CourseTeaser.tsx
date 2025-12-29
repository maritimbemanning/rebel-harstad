import Link from "next/link";
import { Button } from "@/components/ui";

export function CourseTeaser() {
  return (
    <section className="relative py-24 md:py-32">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-deep via-surface to-deep" />

      {/* Overlay pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23B8A67A' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Content */}
      <div className="relative container text-center">
        <h2 className="mb-4">Lær fra en mester</h2>

        <p className="text-lg text-body max-w-2xl mx-auto mb-8">
          Barberkurs for profesjonelle og entusiaster. Fra grunnleggende teknikk
          til avansert styling.
        </p>

        <p className="text-gold mb-8">
          Neste kurs kommer snart
        </p>

        <Button href="/kurs" variant="secondary" size="lg">
          Se alle kurs
        </Button>
      </div>
    </section>
  );
}
