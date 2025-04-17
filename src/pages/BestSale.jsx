import React, { useContext, useState, useEffect } from 'react';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import Title from '../components/Title';
import ProductItem from '../components/ProductItem';
import { motion } from 'framer-motion'; // <-- Aqui

const BestSale = () => {
    const { products , search ,showSearch } = useContext(ShopContext);
    const [showFilter, setShowFilter] = useState(false);
    const [filterProducts, setFilterProducts] = useState([]);
    const [category, setCategory] = useState([]);
    const [subCategory, setSubCategory] = useState([]);
    const [sortType,setSortType] = useState('relavent');

    const toggleCategory = (e) => {
        if (category.includes(e.target.value)) {
            setCategory(prev => prev.filter(item => item !== e.target.value));
        } else {
            setCategory(prev => [...prev, e.target.value]);
        }
    };

    const toggleSubCategory = (e) => {
        if (subCategory.includes(e.target.value)) {
            setSubCategory(prev => prev.filter(item => item !== e.target.value));
        } else {
            setSubCategory(prev => [...prev, e.target.value]);
        }
    };

    const applyFilter = () => {
        let productsCopy = products.slice();

        if (showSearch && search) {
            productsCopy  = productsCopy.filter(item  => item.name.toLowerCase().includes(search.toLowerCase()))
        }
        
        if (category.length > 0) {
            productsCopy = productsCopy.filter(item => category.includes(item.category));
        }

        if (subCategory.length > 0) {
            productsCopy = productsCopy.filter(item => subCategory.includes(item.subCategory));
        }

        setFilterProducts(productsCopy);
    };

    const sortProduct = () => {
        let fpCopy = filterProducts.slice();

        switch (sortType) {
            case 'low-high':
                setFilterProducts(fpCopy.sort((a,b)=>(a.price - b.price)));
                break;
            case 'high-low':
                setFilterProducts(fpCopy.sort((a,b)=>(b.price - a.price)));
                break;
            default:
                applyFilter();
                break;
        }
    }

    useEffect(() => {
        applyFilter();
    }, [category, subCategory,search,showSearch]);

    useEffect(() => {
        sortProduct();
    },[sortType]);

    // 🔥 Framer Motion Variants para a entrada suave
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
                    <img className={`h-3 sm:hidden ${showFilter ? 'rotate-90' : ''}`} src={assets.dropdown_icon} alt="" />
                </p>
                <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}>
                    <p className='mb-3 text-sm font-medium'>Categorias</p>
                    <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
                        {['Masculino', 'Feminino'].map(cat => (
                            <p className='flex gap-2' key={cat}>
                                <input className='w-3' type="checkbox" value={cat} onChange={toggleCategory} /> {cat}
                            </p>
                        ))}
                    </div>
                </div>
                <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}>
                    <p className='mb-3 text-sm font-medium'>Tipos</p>
                    <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
                        {['Parte de Cima', 'Parte de Baixo', 'Inverno'].map(sub => (
                            <p className='flex gap-2' key={sub}>
                                <input className='w-3' type="checkbox" value={sub} onChange={toggleSubCategory} /> {sub}
                            </p>
                        ))}
                    </div>
                </div>
            </div>

            {/* Conteúdo da Lista */}
            <div className="flex-1">
                <div className="flex justify-between text-base sm:text-2xl mb-4">
                    <Title text1={'Mais'} text2={'Vendidos'} />
                    <select onChange={(e)=>setSortType(e.target.value)} className='border-2 border-gray-300 text-sm px-2'>
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

export default BestSale;
