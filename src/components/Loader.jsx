import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { assets } from "../assets/assets";

const Loader = ({ onComplete }) => {
  const loaderRef = useRef(null);
  const logoRef = useRef(null);
  const imgRef = useRef(null);
  const [step, setStep] = useState("logo");

  useEffect(() => {
    const tl = gsap.timeline();

    // Animação do logo (separado da imagem de fundo)
    tl.fromTo(
      logoRef.current,
      { y: 50, opacity: 0, scale: 0.9 },
      { y: 0, opacity: 1, scale: 1, duration: 1.2, delay: 0.2, ease: "power3.out" }
    );

    // Transição para "welcome"
    tl.to(logoRef.current, {
      opacity: 0,
      duration: 0.6,
      delay: 0.8,
      onComplete: () => setStep("welcome"),
    });

    // Finalização
    tl.to(loaderRef.current, {
      opacity: 0,
      duration: 1,
      delay: 1.2,
      onComplete: () => {
        if (onComplete) onComplete();
      },
    });
  }, [onComplete]);

  return (
    <div
      ref={loaderRef}
      className="fixed inset-0 z-[9999] transition-opacity duration-1000"
    >
      {/* Fundo da tela com imagem cheia */}
      <div className="absolute inset-0">
      <img
  ref={imgRef}
  src={step === "logo" ? assets.logo_C : assets.bv}
  alt="Fundo Loader"
  className="w-full h-full object-cover scale-[0.85] md:scale-100 transition-transform duration-500"
/>
      </div>

      {/* Conteúdo animado centralizado */}
      <div className="relative z-10 w-full h-full flex items-center justify-center">
        {step === "logo" && (
          <div
            ref={logoRef}
            className="text-4xl font-bold text-black text-center"
          >
            {/* Pode adicionar texto ou elementos animados */}
          </div>
        )}

        {step === "welcome" && (
          <div className="text-center animate-fadeIn">
            {/* Pode personalizar ou substituir por imagem */}
            <h1 className="text-white text-2xl md:text-4xl font-semibold drop-shadow-lg">
              Seja bem-vindo!
            </h1>
          </div>
        )}
      </div>

      <style>
        {`
          .animate-fadeIn {
            animation: fadeIn 0.8s ease forwards;
          }

          @keyframes fadeIn {
            from { opacity: 0; transform: scale(0.95); }
            to { opacity: 1; transform: scale(1); }
          }
        `}
      </style>
    </div>
  );
};

export default Loader;
