import { Header, Footer } from "@/components/layout";
import {
  Hero,
  ValueProposition,
  GalleryPreview,
  ServicesPreview,
  Authority,
  CourseTeaser,
  FirstTime,
  ContactStrip,
} from "@/components/sections";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <ValueProposition />
        <GalleryPreview />
        <ServicesPreview />
        <Authority />
        <CourseTeaser />
        <FirstTime />
        <ContactStrip />
      </main>

      <Footer />
    </>
  );
}
