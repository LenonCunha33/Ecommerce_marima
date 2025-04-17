import React from 'react'
import { motion } from 'framer-motion'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewslleterBox from '../components/NewsletterBox'

const About = () => {
    return (
        <div>
            {/* Título com animação de fade */}
            <motion.div
                className="text-2xl text-center pt-8 border-t"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                <Title text1={'Sobre'} text2={'Nós'} />
            </motion.div>

            {/* Seção de texto e imagem com animação de deslizamento */}
            <motion.div
                className="my-10 flex flex-col md:flex-row gap-16"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
            >
                <motion.img
                    className='w-full md:max-w-[450px]'
                    src={assets.about_img}
                    alt=""
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                />
                <motion.div
                    className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.2 }}
                >
                    <p>A Marima nasceu com um propósito claro: vestir mulheres que se movimentam com estilo, atitude e autenticidade. Somos uma marca brasileira de moda fitness & casual que acredita que conforto e beleza podem (e devem) andar juntos — seja nos treinos, no dia a dia, ou em momentos de puro relaxamento.</p>
                    <p>Cada peça Marima é pensada com exclusividade, criada para valorizar o corpo feminino em todas as suas formas e trazer confiança para quem a veste. Unimos design moderno, tecidos tecnológicos e acabamentos impecáveis para oferecer roupas que acompanham você em todos os momentos — da academia ao café com as amigas, do treino ao street style.</p>
                    <p>Mais do que uma marca, a Marima é um movimento. Um convite para que você se sinta poderosa, autêntica e pronta para conquistar o mundo, sem abrir mão do seu bem-estar.</p>
                    <b className='text-gray-800'>Nossa Missão</b>
                    <p>Transformar o vestir em uma experiência de empoderamento. Queremos inspirar mulheres a se sentirem bem com quem são, valorizando cada curva e cada conquista, com roupas que refletem sua força, seu estilo e sua liberdade de ser.</p>
                </motion.div>
            </motion.div>

            {/* Título com animação de fade */}
            <motion.div
                className="text-4xl py-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
            >
                <Title text1={'Por que Nos'} text2={'Escolher'} />
            </motion.div>

            {/* Seção com cards com animação de escala */}
            <motion.div
                className="flex flex-col md:flex-row text-sm mb-20"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7 }}
            >
                <motion.div
                    className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                >
                    <b>Garantia de Qualidade:</b>
                    <p className='text-gray-600'>Na Marima, qualidade não é apenas um compromisso — é parte essencial da nossa essência. Cada peça é desenvolvida com materiais de alta performance, acabamento minucioso e controle rigoroso de produção, garantindo durabilidade, conforto e um caimento impecável.</p>
                </motion.div>
                <motion.div
                    className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                >
                    <b>Conveniência:</b>
                    <p className='text-gray-600'>Na Marima, tornar sua experiência simples e prática é tão importante quanto oferecer produtos de qualidade. Pensamos em cada detalhe para que você tenha mais conforto desde a navegação até a entrega — tudo com rapidez, segurança e eficiência.</p>
                </motion.div>
                <motion.div
                    className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                >
                    <b>Atendimento Excepcional ao Cliente:</b>
                    <p className='text-gray-600'>Na Marima, acreditamos que um bom atendimento faz toda a diferença. Por isso, colocamos você no centro de tudo o que fazemos. Nossa equipe está sempre pronta para oferecer um suporte rápido, humano e eficiente — antes, durante e depois da sua compra.</p>
                </motion.div>
            </motion.div>

            {/* Newsletter com animação de fade */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <NewslleterBox />
            </motion.div>

        </div>
    )
}

export default About
