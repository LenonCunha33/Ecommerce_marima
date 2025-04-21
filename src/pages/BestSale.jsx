import React, { useContext, useState, useEffect } from 'react';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import Title from '../components/Title';
import ProductItem from '../components/ProductItem';
import { motion } from 'framer-motion';

const BestSale = () => {
    const { products, search, showSearch } = useContext(ShopContext);
    const [showFilter, setShowFilter] = useState(false);
    const [filterProducts, setFilterProducts] = useState([]);
    const [category, setCategory] = useState([]);
    const [subCategory, setSubCategory] = useState([]);

    const toggleCategory = (e) => {
        const value = e.target.value;
        setCategory(prev =>
            prev.includes(value)
                ? prev.filter(item => item !== value)
                : [...prev, value]
        );
    };

    const toggleSubCategory = (e) => {
        const value = e.target.value;
        setSubCategory(prev =>
            prev.includes(value)
                ? prev.filter(item => item !== value)
                : [...prev, value]
        );
    };

    const applyFilter = () => {
        // 🔥 Filtrar apenas bestsellers
        let productsCopy = products.filter(item => item.bestseller);

        if (showSearch && search) {
            productsCopy = productsCopy.filter(item =>
                item.name.toLowerCase().includes(search.toLowerCase())
            );
        }

        if (category.length > 0) {
            productsCopy = productsCopy.filter(item =>
                category.includes(item.category)
            );
        }

        if (subCategory.length > 0) {
            productsCopy = productsCopy.filter(item =>
                subCategory.includes(item.subCategory)
            );
        }

        setFilterProducts(productsCopy);
    };

    useEffect(() => {
        applyFilter();
    }, [category, subCategory, search, showSearch]);

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
    };

    return (
        <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>
            {/* Filtro */}
            <div className="min-w-60">
                <p onClick={() => setShowFilter(!showFilter)} className='my-2 text-xl flex items-center cursor-pointer gap-2'>
                    Filtro
                    <img
                        className={`h-3 sm:hidden ${showFilter ? 'rotate-90' : ''}`}
                        src={assets.dropdown_icon}
                        alt=""
                    />
                </p>

                <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}>
                    <p className='mb-3 text-sm font-medium'>Categorias</p>
                    <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
                        {['Masculino', 'Feminino'].map(cat => (
                            <label className='flex gap-2' key={cat}>
                                <input className='w-3' type="checkbox" value={cat} onChange={toggleCategory} />
                                {cat}
                            </label>
                        ))}
                    </div>
                </div>

                <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}>
                    <p className='mb-3 text-sm font-medium'>Tipos</p>
                    <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
                        {['Parte de Cima', 'Parte de Baixo', 'Inverno'].map(sub => (
                            <label className='flex gap-2' key={sub}>
                                <input className='w-3' type="checkbox" value={sub} onChange={toggleSubCategory} />
                                {sub}
                            </label>
                        ))}
                    </div>
                </div>
            </div>

            {/* Lista de Produtos */}
            <div className="flex-1">
                <div className="flex justify-between text-base sm:text-2xl mb-4">
                    <Title text1={'Mais'} text2={'Vendidos'} />
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
                    {filterProducts.map((item) => (
                        <motion.div
                            key={item._id}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                            variants={itemVariants}
                        >
                            <ProductItem
                                name={item.name}
                                id={item._id}
                                price={item.price}
                                image={item.image}
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BestSale;
