import { Helmet } from "react-helmet-async";
import Layout from "@/components/Layout";
import Section from "@/components/Section";
import CTASection from "@/components/sections/CTASection";
import PageHero from "@/components/sections/PageHero";
import ManifestoSection from "@/components/sections/ManifestoSection";
import PrinciplesSection from "@/components/sections/PrinciplesSection";
import { Button } from "@/components/ui/button";

const Sobre = () => {
  return (
    <>
      <Helmet>
        <title>Sobre — Olivay</title>
        <meta
          name="description"
          content="Tecnologia para ciclos longos e decisões críticas. Criamos agentes de IA para operações institucionais com rastreabilidade e supervisão humana."
        />
      </Helmet>
      
      <Layout>
        <div className="space-y-8 pb-8">
          <PageHero 
                        title={<>Tecnologia para <span className="font-serif font-light">ciclos longos</span><br />e <span className="font-serif font-light">decisões críticas.</span></>}
            subtitle="Agentes para relacionamento e execução institucional — com histórico e compliance."
            removeStyling={true}
          >
            <Button variant="olive-solid" size="pill" className="rounded-full">
              Falar com a Olivay
            </Button>
          </PageHero>

          <Section>
            <ManifestoSection removeStyling={true} />
          </Section>
          <Section>
            <PrinciplesSection removeStyling={true} />
          </Section>
          <Section>
            <CTASection
              headline={<>Vamos colocar sua operação em <span className="font-serif font-light">modo contínuo?</span></>}
              subheadline={<>A Olivay organiza o ciclo. <span className="font-serif font-light">Sua equipe foca no que importa.</span></>}
              removeStyling={true}
            />
          </Section>
        </div>
      </Layout>
    </>
  );
};

export default Sobre;
