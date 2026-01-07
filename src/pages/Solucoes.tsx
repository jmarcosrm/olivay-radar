import { Helmet } from "react-helmet-async";
import Layout from "@/components/Layout";
import Section from "@/components/Section";
import CTASection from "@/components/sections/CTASection";
import RadarAgentSection from "@/components/sections/RadarAgentSection";
import PipelineAgentSection from "@/components/sections/PipelineAgentSection";
import ComplianceMatrixSection from "@/components/sections/ComplianceMatrixSection";
import PageHero from "@/components/sections/PageHero";

const Solucoes = () => {
  return (
    <>
      <Helmet>
        <title>Soluções — Olivay</title>
        <meta
          name="description"
          content="Um sistema de agentes para executar tarefas do ciclo licitatório com precisão e rastreabilidade, sempre com supervisão humana."
        />
      </Helmet>
      
      <Layout>
        <div className="space-y-8 pb-8">
          <PageHero 
            kicker="SOLUÇÕES"
            title={<>Agentes para um <span className="font-serif font-light">ciclo de vendas contínuo</span></>}
            subtitle="Um sistema de agentes para executar tarefas do ciclo licitatório com precisão e rastreabilidade, sempre com supervisão humana."
          />

          <div className="space-y-16 py-16">
            <RadarAgentSection />
            <PipelineAgentSection />
            <ComplianceMatrixSection />
          </div>

          <Section>
            <CTASection
              headline={<>Menos reação. <span className="font-serif font-light">Mais controle.</span></>}
              subheadline={<>Coloque sua operação em <span className="font-serif font-light">modo contínuo.</span></>}
            />
          </Section>
        </div>
      </Layout>
    </>
  );
};

export default Solucoes;
