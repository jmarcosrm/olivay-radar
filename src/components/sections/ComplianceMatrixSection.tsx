import React from 'react';
import { motion } from 'framer-motion';
import { CheckSquare, FileText, Users } from 'lucide-react';

const features = [
  { icon: CheckSquare, title: 'Checklists Inteligentes', description: 'Garanta que todos os documentos necessários sejam enviados.' },
  { icon: FileText, title: 'Rastreabilidade Total', description: 'Saiba quem fez o quê e quando em cada etapa do processo.' },
  { icon: Users, title: 'Redução de Erros', description: 'Minimize o risco de desclassificação por falhas humanas.' },
];

const ComplianceMatrixSection = () => {
  return (
    <section className="py-section-y-mobile md:py-section-y bg-white">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-h2 font-light text-olive-deep-1 tracking-headlines mb-4">Matriz de Conformidade</h2>
            <p className="text-lg text-olive-mid-3 leading-relaxed mb-8">Checklist inteligente para <span className="font-serif font-light">reduzir falha e retrabalho.</span> Documentos, declarações, anexos e prazos — <span className="font-serif font-light">tudo verificado e rastreável.</span></p>
          </div>
          <div className="space-y-4">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="flex items-start gap-4 p-4 rounded-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:bg-olive-mid-1/10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="flex-shrink-0 w-12 h-12 bg-white rounded-lg shadow flex items-center justify-center">
                  <feature.icon className="w-6 h-6 text-olive-deep-1" />
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

export default ComplianceMatrixSection;
