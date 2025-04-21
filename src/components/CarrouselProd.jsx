import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { assets } from '../assets/assets';

const titles = [
  'FITNESS',
  'TOPS',
  'CALÇAS e LEGGINGS',
  'BODIES',
  'MACACÕES',
  'CASUAL',
  'BLUSAS E REGATAS',
  'SHORTS E BERMUDAS',
  'JAQUETAS E COLETES',
  'LANÇAMENTOS',
];

const images = [
  assets.Fitness,
  assets.Tops,
  assets.Calcas,
  assets.Bodies,
  assets.Macacoes,
  assets.Casual,
  assets.Blusas,
  assets.Shorts,
  assets.Jaquetas,
  assets.Lancamentos,
];

const prices = ['R$169,90', 'R$64,50', 'R$124,50', 'R$155,60'];

const slugify = (str) =>
  str
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // remove acentos
    .replace(/\s+/g, '-') // espaços por traço
    .replace(/[^a-z0-9-]/g, ''); // remove caracteres especiais

const items = titles.map((title, i) => ({
  id: i,
  title,
  slug: slugify(title),
  image: images[i],
  price: prices[i % prices.length],
}));

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function ProductCarousel() {
  const [index, setIndex] = useState(0);
  const visibleItems = items.slice(index, index + 4);

  const next = () => {
    if (index + 4 < items.length) setIndex(index + 4);
  };

  const prev = () => {
    if (index > 0) setIndex(index - 4);
  };

  return (
    <motion.div
      className="relative w-full bg-white px-4 py-10"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <div className="flex items-center justify-between mb-6">
        <button onClick={prev} className="p-2">
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button onClick={next} className="p-2">
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {visibleItems.map((item) => (
          <Link to={`/${item.slug}`} key={item.id}>
            <motion.div
              className="relative group overflow-hidden cursor-pointer rounded-2xl shadow-lg"
              variants={cardVariants}
              whileHover={{ scale: 1.03 }}
              transition={{ type: 'spring', stiffness: 200, damping: 20 }}
            >
              <motion.img
                src={item.image}
                alt={item.title}
                className="w-full h-[500px] object-cover"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.5 }}
              />
              <motion.div
                className="absolute inset-0 bg-black/30"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 0.5 }}
                transition={{ duration: 0.3 }}
              />
              <div className="absolute bottom-8 left-6 text-white z-10">
                <h2 className="text-3xl tracking-[0.3em] font-light">{item.title}</h2>
                <p className="text-sm mt-1">
                  a partir de <span className="font-bold">{item.price}</span>
                </p>
                <p className="text-xs mt-1">*ENQUANTO DURAREM OS ESTOQUES</p>
              </div>
              <motion.button
                className="absolute bottom-4 right-6 text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                CONFIRA →
              </motion.button>
            </motion.div>
          </Link>
        ))}
      </motion.div>
    </motion.div>
  );
}
