import React from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { FaInstagram, FaFacebookF } from "react-icons/fa";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <motion.footer
      className="my-10 mt-40 text-sm"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14">
        {/* Seção Principal */}
        <div>
          <img src={assets.logo} className="mb-5 w-32" alt="Logo da Empresa" />
          <p className="w-full md:w-2/3 text-gray-600">
            Marima® — Movimento, estilo e autenticidade em cada detalhe. Viva sua melhor versão com conforto e confiança.
          </p>

          {/* Ícones sociais */}
          <div className="flex gap-4 mt-6 text-gray-500">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="hover:text-black transition-colors duration-200" size={18} />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebookF className="hover:text-black transition-colors duration-200" size={18} />
            </a>
          </div>
        </div>

        {/* Links da Empresa */}
        <div>
          <p className="text-xl font-medium mb-5">Empresa</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <NavLink to="/" className="hover:text-black transition-colors duration-200">Início</NavLink>
            <NavLink to="/sobre" className="hover:text-black transition-colors duration-200">Sobre Nós</NavLink>
            <NavLink to="/entrega" className="hover:text-black transition-colors duration-200">Política de Entrega</NavLink>
            <NavLink to="/privacidade" className="hover:text-black transition-colors duration-200">Política de Privacidade</NavLink>
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
        Copyright 2025 © Marima - Todos Direitos Reservados
      </p>
    </motion.footer>
  );
};

export default Footer;
