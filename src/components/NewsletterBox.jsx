import React from "react";
import { motion } from "framer-motion";

const NewsletterBox = () => {

    const onSubmitHandler = (event) => {
        event.preventDefault();
    }

    return (
        <div className="text-center">
            {/* Animação de fade e deslizamento suave para o título */}
            <motion.p
                className="text-2xl font-medium text-gray-800"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                Receba Novas Coleções e até 30% OFF no seu E-mail!
            </motion.p>

            {/* Animação de fade suave para a descrição */}
            <motion.p
                className="text-gray-400 mt-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
            >
                Fique por dentro das últimas tendências e aproveite ofertas especiais enviadas diretamente para você.
            </motion.p>

            {/* Formulário com animação de fade e deslizamento */}
            <motion.form
                onSubmit={onSubmitHandler}
                className="w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.8 }}
            >
                <motion.input
                    className="w-full sm:flex-1 outline-none"
                    type="email"
                    placeholder="Digite Seu Email !"
                    required
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 1 }}
                />
                <motion.button
                    type="submit"
                    className="bg-black text-white text-xs px-10 py-4 cursor-pointer"
                    whileHover={{ scale: 1.1, backgroundColor: "#333" }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                >
                    Inscreva-Se
                </motion.button>
            </motion.form>
        </div>
    )
}

export default NewsletterBox;
