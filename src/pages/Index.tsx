import { Helmet } from "react-helmet-async";
import Layout from "@/components/Layout";
import HeroSection from "@/components/sections/HeroSection";
import ValueStatement from "@/components/sections/ValueStatement";
import BenefitsMarquee from "@/components/sections/BenefitsMarquee";
import HowItWorks from "@/components/sections/HowItWorks";
import SolutionsPreview from "@/components/sections/SolutionsPreview";
import CTASection from "@/components/sections/CTASection";

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
        <HeroSection />
        <BenefitsMarquee />
        <ValueStatement />
        <HowItWorks />
        <SolutionsPreview />
        <CTASection />
      </Layout>
    </>
  );
};

export default Index;
