import React from 'react';
import { assets } from '../assets/assets';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <div className='flex flex-col sm:flex-row border border-gray-400'>
            {/* Hero Lado Esquerdo */}
            <motion.div
                className="w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
            >
                <div className="text-[#414141] text-center sm:text-left px-4 sm:px-8">
                    <div className="flex items-center justify-center sm:justify-start gap-2">
                        <p className='w-8 md:w-11 h-[2px] bg-[#414141]'></p>
                        <p className='font-medium text-sm md:text-base'>Nossas melhores Coleções</p>
                    </div>
                    <h1 className='text-3xl sm:py-3 lg:text-5xl leading-relaxed'>Últimas Novidades</h1>
                    <div className="flex items-center justify-center sm:justify-start gap-2">
                        <p className='font-semibold text-sm md:text-base'>Confira Abaixo</p>
                        <p className='w-8 md:w-11 h-[1px] bg-[#414141]'></p>
                    </div>
                </div>
            </motion.div>

            {/* Hero Lado Direito */}
            <motion.img
                className='w-full sm:w-1/2 object-cover'
                src={assets.hero_img}
                alt="Hero Banner"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
            />
        </div>
    );
};

export default Hero;
