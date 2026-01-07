import InfiniteMarquee from "@/components/InfiniteMarquee";

const BenefitsMarquee = () => {
  const benefits = [
    "Antecipação",
    "Previsibilidade",
    "Operação contínua",
    "Conformidade",
    "Rastreabilidade",
    "Supervisão humana",
    "Pipeline vivo",
    "Alertas de timing",
  ];

  return (
    <section className="py-8 bg-white rounded-3xl border border-olive-deep-2/10 shadow-lg">
      <InfiniteMarquee speed="slow" pauseOnHover>
        <div className="flex gap-4 px-2">
          {benefits.map((benefit) => (
            <span
              key={benefit}
              className="px-6 py-3 rounded-full text-sm font-medium bg-olive-deep-1 text-white whitespace-nowrap"
            >
              {benefit}
            </span>
          ))}
        </div>
      </InfiniteMarquee>
    </section>
  );
};

export default BenefitsMarquee;
