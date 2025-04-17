import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className="my-10 mt-40 text-sm">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14">

        {/* Seção Principal */}
        <div>
          <img src={assets.logo} className="mb-5 w-32" alt="Logo da Empresa" />
          <p className="w-full md:w-2/3 text-gray-600">
          Marima® — Movimento, estilo e autenticidade em cada detalhe. Viva sua melhor versão com conforto e confiança.
          </p>
        </div>

        {/* Links da Empresa */}
        <div>
          <p className="text-xl font-medium mb-5">Empresa</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>Início</li>
            <li>Sobre Nós</li>
            <li>Política de Entrega</li>
            <li>Política de Privacidade</li>
          </ul>
        </div>

        {/* Contato */}
        <div>
          <p className="text-xl font-medium mb-5">Entre em Contato</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>(24) 9998-7722</li>
            <li>contato@mariana.com</li>
          </ul>
        </div>
      </div>

      {/* Linha divisória e Direitos Autorais */}
      <hr className="my-10 border-gray-300" />
      <p className="text-sm text-center text-gray-600">
        Copyright 2025 © Synth.com - Todos Direitos Reservados
      </p>
    </div>
  );
};

export default Footer;
