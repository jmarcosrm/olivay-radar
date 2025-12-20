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
    <section className="py-8 md:py-12 bg-bg-white border-y border-olive-deep-2/10 overflow-hidden">
      <InfiniteMarquee speed="slow" pauseOnHover>
        <div className="flex gap-4 px-2">
          {benefits.map((benefit) => (
            <span
              key={benefit}
              className="px-6 py-3 rounded-full text-sm font-medium bg-olive-mid-1/10 text-olive-mid-1 border border-olive-mid-1/20 whitespace-nowrap"
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
