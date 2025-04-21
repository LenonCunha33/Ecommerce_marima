import React, { useContext, useState, useEffect } from 'react';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import Title from '../components/Title';
import ProductItem from '../components/ProductItem';
import { motion } from 'framer-motion';

const Products = () => {
    const { products, search, showSearch } = useContext(ShopContext);
    const [showFilter, setShowFilter] = useState(false);
    const [filterProducts, setFilterProducts] = useState([]);
    const [category, setCategory] = useState([]);
    const [subCategory, setSubCategory] = useState([]);
    const [sortType, setSortType] = useState('relavent');

    const specificSearchTerms = {
        'Tops': ['top'],
        'Blusas e Regatas': ['blusa', 'regata'],
        'Calças e Leggings': ['calça', 'legging'],
        'Shorts e Bermudas': ['short', 'bermuda'],
        'Jaquetas e Coletes': ['jaqueta', 'colete'],
        'Fitness': ['fitness'],
        'Macacões': ['macacão'],
        'Bodies': ['body'],
        'Casual': ['casual'],
    };

    const allSubCategories = Object.keys(specificSearchTerms);
    const generalSubCategories = ['Parte de Cima', 'Parte de Baixo', 'Inverno'];

    const toggleCategory = (e) => {
        const value = e.target.value;
        setCategory(prev => prev.includes(value) ? prev.filter(c => c !== value) : [...prev, value]);
    };

    const toggleSubCategory = (e) => {
        const value = e.target.value;
        setSubCategory(prev => prev.includes(value) ? prev.filter(s => s !== value) : [...prev, value]);
    };

    const clearFilters = () => {
        setCategory([]);
        setSubCategory([]);
    };

    const applyFilter = () => {
        let productsCopy = [...products];

        if (showSearch && search) {
            productsCopy = productsCopy.filter(item =>
                item.name.toLowerCase().includes(search.toLowerCase())
            );
        }

        if (category.length > 0) {
            productsCopy = productsCopy.filter(item => category.includes(item.category));
        }

        const selectedGeneral = subCategory.filter(sub => generalSubCategories.includes(sub));
        if (selectedGeneral.length > 0) {
            productsCopy = productsCopy.filter(item => selectedGeneral.includes(item.subCategory));
        }

        const selectedSpecific = subCategory.filter(sub => !generalSubCategories.includes(sub));
        if (selectedSpecific.length > 0) {
            productsCopy = productsCopy.filter(item => {
                const name = item.name.toLowerCase();
                return selectedSpecific.some(sub =>
                    specificSearchTerms[sub]?.some(keyword => name.includes(keyword))
                );
            });
        }

        setFilterProducts(productsCopy);
    };

    const sortProduct = () => {
        let sorted = [...filterProducts];
        switch (sortType) {
            case 'low-high':
                sorted.sort((a, b) => a.price - b.price);
                break;
            case 'high-low':
                sorted.sort((a, b) => b.price - a.price);
                break;
            default:
                applyFilter();
                return;
        }
        setFilterProducts(sorted);
    };

    useEffect(() => {
        applyFilter();
    }, [category, subCategory, search, showSearch]);

    useEffect(() => {
        sortProduct();
    }, [sortType]);

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
    };

    return (
        <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>
            {/* Filtros */}
            <div className="min-w-60">
                <p onClick={() => setShowFilter(!showFilter)} className='my-2 text-xl flex items-center cursor-pointer gap-2'>
                    Filtro
                    <img className={`h-3 sm:hidden ${showFilter ? 'rotate-90' : ''}`} src={assets.dropdown_icon} alt="" />
                </p>

                <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}>
                    <p className='mb-3 text-sm font-medium'>Categorias</p>
                    <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
                        {['Masculino', 'Feminino'].map(cat => (
                            <label className='flex gap-2 cursor-pointer' key={cat}>
                                <input
                                    className='w-3'
                                    type="checkbox"
                                    value={cat}
                                    checked={category.includes(cat)}
                                    onChange={toggleCategory}
                                />
                                {cat}
                            </label>
                        ))}
                    </div>
                </div>

                <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}>
                    <p className='mb-3 text-sm font-medium'>Tipos</p>
                    <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
                        {generalSubCategories.map(sub => (
                            <label className='flex gap-2 cursor-pointer' key={sub}>
                                <input
                                    className='w-3'
                                    type="checkbox"
                                    value={sub}
                                    checked={subCategory.includes(sub)}
                                    onChange={toggleSubCategory}
                                />
                                {sub}
                            </label>
                        ))}
                    </div>
                </div>

                <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}>
                    <p className='mb-3 text-sm font-medium'>Categorias Específicas</p>
                    <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
                        {allSubCategories.map(sub => (
                            <label className='flex gap-2 cursor-pointer' key={sub}>
                                <input
                                    className='w-3'
                                    type="checkbox"
                                    value={sub}
                                    checked={subCategory.includes(sub)}
                                    onChange={toggleSubCategory}
                                />
                                {sub}
                            </label>
                        ))}
                    </div>
                </div>

                {/* Botão de limpar filtros */}
                <div className="pl-5 py-4 mt-4">
                    <button
                        onClick={clearFilters}
                        className="text-sm px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition"
                    >
                        Limpar Filtros
                    </button>
                </div>
            </div>

            {/* Lista de produtos */}
            <div className="flex-1">
                <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center gap-4 text-base sm:text-2xl">
                        <Title text1={'Todos'} text2={'Produtos'} />
                        {showSearch && (
                            <img
                                src={assets.search_icon}
                                alt="Search"
                                className="w-5 h-5 opacity-70 hover:opacity-100 cursor-pointer"
                            />
                        )}
                    </div>
                    <select onChange={(e) => setSortType(e.target.value)} className='border-2 border-gray-300 text-sm px-2'>
                        <option value="relevant">Classificar por: Relevante</option>
                        <option value="low-high">Classificar por: baixo para alto</option>
                        <option value="high-low">Classificar por: alto para baixo</option>
                    </select>
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

export default Products;
