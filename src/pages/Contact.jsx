import React from 'react'
import { motion } from 'framer-motion'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const Contact = () => {
    return (
        <div>

            {/* Título com animação de fade */}
            <motion.div
                className="text-center text-2xl pt-10 border-t"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                <Title text1={'Entre em'} text2={'Contato'} />
            </motion.div>

            {/* Seção de texto e imagem com animação de deslizamento */}
            <motion.div
                className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
            >
                <motion.img
                    className='w-full md:max-w-[480px]'
                    src={assets.contact_img}
                    alt=""
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                />
                <motion.div
                    className="flex flex-col justify-center items-start gap-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.2 }}
                >
                    <p className='font-semibold text-xl text-gray-600'>Nossa Endereço de Loja</p>
                    <p className='text-gray-500'>44790 Aterrado <br /> Andar 2, Volta Redonda, RJ</p>
                    <p>Tel (24) 99837-9897 <br /> Email: contatostore@gmail.com</p>
                    <p className='font-semibold text-xl text-gray-600'>Siga-nos nas Redes Sociais</p>
                    <p className='text-gray-500'>Leia mas Sobre nos abaixo.</p>

                    {/* Botão com animação de escala e cor de fundo */}
                    <motion.button
                        className='border border-black px-8 py-3 text-sm hover:bg-black hover:text-white transition-all duration-500 cursor-pointer'
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ duration: 0.3 }}
                    >
                        Enviar
                    </motion.button>
                </motion.div>
            </motion.div>

            {/* Newsletter com animação de fade */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <NewsletterBox />
            </motion.div>

        </div>
    )
}

export default Contact
