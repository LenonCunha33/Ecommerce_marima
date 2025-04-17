import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import RelateProduct from '../components/RelatedProduct';

const Product = () => {
    const { productId } = useParams();
    const { products, currency ,addToCart } = useContext(ShopContext);
    const [productData, setProductData] = useState(null);
    const [image, setImage] = useState('');
    const [size, setSize] = useState('');

    useEffect(() => {
        const foundProduct = products.find((item) => item._id === productId);
        if (foundProduct) {
            setProductData(foundProduct);
            setImage(foundProduct.image[0]);
        }
    }, [productId, products]);

    return productData ? (
        <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>
            {/* Produto Data */}
            <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>
                {/* Imagem do Produto */}
                <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
                    <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full'>
                        {productData.image.map((item, index) => (
                            <img 
                                onClick={() => setImage(item)} 
                                src={item} 
                                key={index} 
                                className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer' 
                                alt='' 
                            />
                        ))}
                    </div>
                    <div className='w-full sm:w-[80%]'>
                        <img className='w-full h-auto' src={image} alt='' />
                    </div>
                </div>
                {/* Info do Produto */}
                <div className='flex-1'>
                    <h1 className='font-medium text-2xl mt-2'>{productData.name}</h1>
                    <div className='flex items-center gap-1 mt-2'>
                        {[...Array(4)].map((_, i) => (
                            <img key={i} src={assets.star_icon} alt='' className='w-3.5' />
                        ))}
                        <img src={assets.star_dull_icon} alt='' className='w-3.5' />
                        <p className='pl-2'>122</p>
                    </div>
                    <p className='mt-5 text-3xl font-medium'>{currency}{productData.price}</p>
                    <p className='mt-5 text-gray-500 md:w-4/5'>{productData.description}</p>
                    <div className='flex flex-col gap-4 my-8'>
                        <p>Selecione o Tamanho:</p>
                        <div className='flex gap-2'>
                            {productData.sizes.map((item, index) => (
                                <button 
                                    onClick={() => setSize(item)} 
                                    className={`border py-2 px-4 bg-gray-100 cursor-pointer ${item === size ? 'border-orange-500' : ''}`} 
                                    key={index}
                                >
                                    {item}
                                </button>
                            ))}
                        </div>
                    </div>
                    <button onClick={()=>addToCart(productData._id,size)} className='bg-black text-white px-8 py-3 text-sm active:bg-gray-700 cursor-pointer'>Adicionar ao Carrinho</button>
                    <hr className='mt-8 sm:w-4/5' />
                    <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'>
                        <p>Malha 100% Original</p>
                        <p>Pagamento na entrega está disponível neste produto</p>
                        <p>Troca Fácil devido à Nossa Política de Troca de 7 dias</p>
                    </div>
                </div>
            </div>
            {/* Descrição e Sessão de Revisão */}
            <div className='mt-20'>
                <div className='flex'>
                    <b className='border px-5 py-3 text-sm'>Descrição</b>
                    <p className='border px-5 py-3 text-sm'>Avaliações (122)</p>
                </div>
                <div className='flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500'>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus earum magnam aliquid.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias quod eligendi repellendus iure hic culpa cupiditate tempora quis. Saepe, voluptatibus.</p>
                </div>
            </div>
            {/* Produtos Relacionados */}
            <RelateProduct category={productData.category} subCategory={productData.subCategory} />
        </div>
    ) : <p className='text-center py-10'>Carregando...</p>;
};

export default Product;
