import React from "react";
import { assets } from "../assets/assets";
import { motion } from "framer-motion";

export default function LuxuryMonogramGallery() {
  return (
    <div className="text-gray-900 font-serif">
      {/* Seção 1 - Texto + 1 Imagem à direita */}
      <section className="min-h-screen grid grid-cols-1 lg:grid-cols-2 w-full">
        {/* Texto à esquerda */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="flex items-center justify-center p-10 lg:p-20 bg-black w-full"
        >
          <div className="space-y-6 max-w-sm">
            <h1 className="text-4xl lg:text-5xl leading-snug text-white">
              Os<br />
              Melhores<br />
              Produtos<br />
              Lançados
            </h1>
            <p className="text-sm text-gray-400 leading-relaxed">
              Confira Agora<br />
              100% da Coleção<br />
              Outono & Inverno
            </p>
          </div>
        </motion.div>

        {/* Imagem com animação de zoom e fade */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
          className="w-full h-full"
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
