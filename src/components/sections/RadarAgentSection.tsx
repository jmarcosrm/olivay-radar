import React from 'react';
import { motion } from 'framer-motion';
import { Radar, Zap, Bell } from 'lucide-react';

const features = [
  { icon: Radar, title: 'Monitoramento Contínuo', description: 'Nossos agentes de IA varrem portais e diários oficiais 24/7.' },
  { icon: Zap, title: 'Classificação Inteligente', description: 'As oportunidades são classificadas e organizadas por relevância.' },
  { icon: Bell, title: 'Alertas Imediatos', description: 'Receba notificações sobre novas licitações em tempo real.' },
];

const RadarAgentSection = () => {
  return (
    <section className="py-section-y-mobile md:py-section-y bg-white">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-h2 font-light text-olive-deep-1 tracking-headlines mb-4">Agente Radar (IA)</h2>
            <p className="text-lg text-olive-mid-3 leading-relaxed mb-8">Publicou → detecta → organiza → alerta. A Olivay monitora portais e publicações oficiais, identificando <span className="font-serif font-light">oportunidades relevantes antes que virem urgência.</span></p>
          </div>
          <div className="relative flex items-center justify-center h-96">
            <motion.div
              className="absolute w-64 h-64 bg-olive-mid-1/10 rounded-full shadow-glow-olive"
              animate={{ scale: [1, 1.05, 1], opacity: [0.5, 0.7, 0.5] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.div
              className="absolute w-96 h-96 border-2 border-olive-mid-1/20 rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            />
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="absolute"
                style={{ transform: `rotate(${index * 120}deg) translateX(160px) rotate(-${index * 120}deg)` }}
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay: index * 0.5 }}
              >
                <div className="relative group">
                  <div className="w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center cursor-pointer">
                    <feature.icon className="w-8 h-8 text-olive-deep-1" />
                  </div>
                  <div className="absolute bottom-full mb-4 w-64 bg-white p-4 rounded-xl shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none transform group-hover:-translate-y-2">
                    <h4 className="font-semibold text-olive-deep-2 mb-1">{feature.title}</h4>
                    <p className="text-sm text-olive-mid-3 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RadarAgentSection;
