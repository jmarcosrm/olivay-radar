import React from "react";
import scrollGif from "@/assets/Anime_a_imagem_202601051607.gif";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import Kicker from "@/components/Kicker";

export function ScrollablePreviewSection() {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
                        <h2 className="text-h2 font-semibold text-olive-deep-1 leading-tight tracking-headlines mb-6">
              O mercado reage.<br />
              <span className="font-serif font-light">A Olivay antecipa.</span>
            </h2>
            <p className="text-lg text-olive-mid-3 leading-relaxed mb-10 max-w-2xl mx-auto">
              Enquanto o modelo tradicional espera o edital aparecer, a Olivay usa agentes de IA 
              para monitorar, mapear e organizar oportunidades com antecedência.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {["Antecipação", "Previsibilidade", "Operação contínua"].map((chip, index) => (
                <span
                  key={chip}
                  className="px-5 py-2 rounded-full text-sm font-medium bg-olive-deep-1/10 text-olive-deep-1 border border-olive-deep-1/20 backdrop-blur-sm"
                  style={{
                    animation: "fade-in-up 0.5s ease-out forwards",
                    animationDelay: `${0.1 * (index + 1)}s`,
                    opacity: 0
                  }}
                >
                  {chip}
                </span>
              ))}
            </div>
          </>
        }
      >
        <img
          src={scrollGif}
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full w-full object-center"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
}
