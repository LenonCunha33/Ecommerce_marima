import React, { useContext, useEffect,useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';
import ProductItem from './ProductItem';

const LatestCollection  = () => {

    const { products } = useContext(ShopContext);
    const [latestProducts,setLatestProducts] = useState([]);

    useEffect(()=>{
        setLatestProducts(products.slice(0,10));
    }, [])

    return (
        <div className='my-10'>
            <div className='text-center py-8 text-3xl'>
                <Title text1={'Últimos'} text2={'Lançamentos'} />
                <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
                Peças que respiram estilo, movimento e autenticidade. Nossos lançamentos trazem o frescor da estação com modelagens modernas, tecidos leves e detalhes que fazem a diferença. Para quem vive a rotina com atitude e não abre mão do conforto. Essa é a Marima em sua melhor versão — casual, fitness e sempre atual.
                </p>
            </div>
        
        {/* Renderização de Produtos */}
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
        {
            latestProducts.map((item,index)=>(
                <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price} />
            ))
        }
        </div>

        </div>
    )
}

export default LatestCollection