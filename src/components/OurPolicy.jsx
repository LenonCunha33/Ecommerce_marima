import React from "react";
import { motion } from "framer-motion";
import { assets } from "../assets/assets";

const policies = [
  {
    icon: assets.exchange_icon,
    title: "Política de Troca Fácil",
    description: "Oferecemos uma Política de Troca sem Complicações",
  },
  {
    icon: assets.quality_icon,
    title: "Política de Devolução de 7 dias",
    description: "Nós Fornecemos Política de Devolução Gratuita de 7 Dias",
  },
  {
    icon: assets.support_img,
    title: "Melhor suporte ao cliente",
    description:
      "Nós Fornecemos Suporte ao Cliente 24 horas Por Dia, 7 Dias por Semana",
  },
];

const containerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const OurPolicy = () => {
  return (
    <motion.div
      className="flex flex-col items-center sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      {policies.map((policy, index) => (
        <motion.div
          key={index}
          className="max-w-xs"
          variants={itemVariants}
          whileHover={{ y: -5, scale: 1.03 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <motion.img
            src={policy.icon}
            className="w-12 m-auto mb-5"
            alt=""
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
          />
          <p className="font-semibold">{policy.title}</p>
          <p className="text-gray-400">{policy.description}</p>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default OurPolicy;
