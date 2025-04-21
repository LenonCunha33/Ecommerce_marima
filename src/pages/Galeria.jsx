import React from "react";
import { assets } from "../assets/assets";
import { motion } from "framer-motion";

export default function LuxuryMonogramGallery() {
  return (
    <div className="text-gray-900 font-serif">
      {/* Seção 1 - Texto + Imagem à direita (responsivo) */}
      <section className="min-h-[80vh] flex flex-col-reverse lg:flex-row w-full">
        {/* Texto */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="flex items-center justify-center p-10 lg:p-20 bg-white lg:w-[700px] w-full z-10"
        >
          <div className="space-y-6 max-w-sm text-center lg:text-left">
            <h1 className="text-4xl lg:text-5xl leading-snug text-black">
              Os<br />
              Melhores<br />
              Produtos<br />
              Lançados
            </h1>
            <p className="text-sm text-gray-900 leading-relaxed">
              Confira Agora<br />
              100% da Coleção<br />
              Outono & Inverno
            </p>
          </div>
        </motion.div>

        {/* Imagem expandida */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
          className="flex-grow lg:-ml-20 overflow-hidden w-full h-[400px] lg:h-auto"
        >
          <motion.img
            src={assets.logo_768}
            alt="Golden logo on black background"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </section>

      {/* Seção 2 - Imagem fullscreen com bordas */}
      <motion.section
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="w-full border-t border-b border-gray-300"
      >
        <motion.div className="h-screen w-full">
          <motion.img
            src={assets.logo_1575}
            alt="Hero"
            className="w-full h-full object-cover"
            initial={{ scale: 1.05, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
          />
        </motion.div>
      </motion.section>

      {/* Seção 3 - Duas imagens lado a lado */}
      <section className="min-h-screen flex flex-col lg:flex-row w-full">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="flex-1 bg-gray-100 flex items-center justify-center p-0"
        >
          <motion.img
            src={assets.logo_769}
            alt="Imagem 1"
            className="w-full h-full object-cover"
            initial={{ scale: 0.97 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="flex-1 bg-gray-200 flex items-center justify-center p-0"
        >
          <motion.img
            src={assets.logo_770}
            alt="Imagem 2"
            className="w-full h-full object-cover"
            initial={{ scale: 0.97 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          />
        </motion.div>
      </section>
    </div>
  );
}
