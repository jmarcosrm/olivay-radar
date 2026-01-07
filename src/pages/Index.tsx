import { Helmet } from "react-helmet-async";
import Layout from "@/components/Layout";
import HeroSection from "@/components/sections/HeroSection";
import { ScrollablePreviewSection } from "@/components/sections/ScrollablePreviewSection";
import Section from "@/components/Section";
import HowItWorks from "@/components/sections/HowItWorks";
import SolutionsPreview from "@/components/sections/SolutionsPreview";
import CTASection from "@/components/sections/CTASection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Olivay — Publicou. A Olivay já mapeou.</title>
        <meta
          name="description"
          content="Agentes de IA para antecipar oportunidades e manter o ciclo licitatório sob controle: pipeline, prazos, documentos e decisões — com rastreabilidade e supervisão humana."
        />
      </Helmet>
      
      <Layout>
        <div className="space-y-8 pb-8">
          <HeroSection />
          <ScrollablePreviewSection />
                    <Section>
            <HowItWorks />
          </Section>
          <Section>
            <SolutionsPreview />
          </Section>
          <Section>
            <TestimonialsSection />
          </Section>
          <Section>
            <CTASection />
          </Section>
        </div>
      </Layout>
    </>
  );
};

export default Index;
