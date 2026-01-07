import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { GitBranch, Calendar, History } from 'lucide-react';

const features = [
  { icon: GitBranch, title: 'Visão Unificada', description: 'Acompanhe todas as suas licitações em um único pipeline.' },
  { icon: Calendar, title: 'Gestão de Prazos', description: 'Nunca mais perca um prazo com nosso sistema de alertas.' },
  { icon: History, title: 'Histórico Completo', description: 'Acesse o histórico de cada oportunidade com um clique.' },
];

const PipelineAgentSection = () => {
  const timelineRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: timelineRef, offset: ["start end", "end start"] });
  const pathLength = useTransform(scrollYProgress, [0, 0.8], [0, 1]);

  return (
    <section className="py-section-y-mobile md:py-section-y">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="lg:order-last">
            <h2 className="text-h2 font-light text-olive-deep-1 tracking-headlines mb-4">Agente de Pipeline</h2>
            <p className="text-lg text-olive-mid-3 leading-relaxed mb-8">Controle contínuo do funil, prazos e responsáveis. <span className="font-serif font-light">Cada oportunidade é acompanhada do início ao fim, com histórico e rastreio completo.</span></p>
          </div>
          <div className="relative" ref={timelineRef}>
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-olive-mid-1/20" />
            <motion.div className="absolute left-8 top-0 bottom-0 w-0.5 bg-olive-deep-1" style={{ scaleY: pathLength, transformOrigin: 'top' }} />
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="flex items-start gap-6 mb-8 last:mb-0"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="flex-shrink-0 w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center z-10">
                  <feature.icon className="w-8 h-8 text-olive-deep-1" />
                </div>
                <div>
                  <h4 className="font-semibold text-olive-deep-2 mb-1">{feature.title}</h4>
                  <p className="text-olive-mid-3 leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PipelineAgentSection;
