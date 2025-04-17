import React, { useContext, useState } from 'react'
import { assets } from '../assets/assets'
import { Link, NavLink } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext'
import { motion, AnimatePresence } from 'framer-motion'

const Navbar = () => {
    const [visible, setVisible] = useState(false)
    const [collectionOpen, setCollectionOpen] = useState(false)

    const { setShowSearch, getCartCount } = useContext(ShopContext)

    return (
        <div className='flex items-center justify-between py-5 font-medium'>

            <Link to="/"><img src={assets.logo} alt="Logo Oficial" className='w-36' /></Link>

            {/* Menu Desktop */}
            <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>
                <NavLink to='/' className='flex flex-col items-center gap-1'><p>Início</p></NavLink>
                <NavLink to='/gallery' className='flex flex-col items-center gap-1'><p>Lançamentos</p></NavLink>
                <NavLink to='/bestsellers' className='flex flex-col items-center gap-1'><p>Mais Vendidos</p></NavLink>
                <NavLink to='/collection' className='flex flex-col items-center gap-1'><p>Coleções</p></NavLink>
                <NavLink to='/about' className='flex flex-col items-center gap-1'><p>Sobre</p></NavLink>
                <NavLink to='/contact' className='flex flex-col items-center gap-1'><p>Contato</p></NavLink>
            </ul>

            {/* Ícones */}
            <div className="flex items-center gap-6">
                <img onClick={() => setShowSearch(true)} src={assets.search_icon} className='w-5 cursor-pointer' alt="" />

                <div className="group relative">
                    <Link to='/login'><img className='w-5 cursor-pointer' src={assets.profile_icon} alt="" /></Link>
                    <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
                        <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded">
                            <p className='cursor-pointer hover:text-black'>Meu Perfil</p>
                            <p className='cursor-pointer hover:text-black'>Meus Pedidos</p>
                            <p className='cursor-pointer hover:text-black'>Sair</p>
                        </div>
                    </div>
                </div>

                <Link to='/cart' className='relative'>
                    <img src={assets.cart_icon} className='w-5 min-w-5' alt='' />
                    <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]'>{getCartCount()}</p>
                </Link>

                <img onClick={() => setVisible(true)} src={assets.menu_icon} className='w-5 cursor-pointer sm:hidden' alt="" />
            </div>

            {/* Menu Mobile */}
            <div className={`absolute top-0 right-0 overflow-hidden bg-white h-screen transition-all z-50 ${visible ? 'w-full' : 'w-0'}`}>
                <div className="flex flex-col text-gray-600">
                    <div onClick={() => setVisible(false)} className="flex items-center gap-4 p-3 cursor-pointer">
                        <img className='h-4 rotate-180' src={assets.dropdown_icon} alt="" />
                        <p>Voltar</p>
                    </div>

                    <NavLink onClick={() => setVisible(false)} className='py-2 pl-6' to='/'>Início</NavLink>
                    
                    {/* Dropdown com animação */}
                    <div className='relative'>
                        <div onClick={() => setCollectionOpen(!collectionOpen)} className='py-2 pl-6 cursor-pointer'>
                            Coleções
                        </div>

                        <AnimatePresence>
                            {collectionOpen && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    className="ml-6 flex flex-col gap-2 text-sm text-gray-500"
                                >
                                    <NavLink onClick={() => { setVisible(false); setCollectionOpen(false); }} to="/collection/fitness" className='py-1 pl-4'>Fitness</NavLink>
                                    <NavLink onClick={() => { setVisible(false); setCollectionOpen(false); }} to="/collection/fitness" className='py-1 pl-4'>Tops</NavLink>
                                    <NavLink onClick={() => { setVisible(false); setCollectionOpen(false); }} to="/collection/fitness" className='py-1 pl-4'>Calças e Leggings</NavLink>
                                    <NavLink onClick={() => { setVisible(false); setCollectionOpen(false); }} to="/collection/fitness" className='py-1 pl-4'>Bodies</NavLink>
                                    <NavLink onClick={() => { setVisible(false); setCollectionOpen(false); }} to="/collection/fitness" className='py-1 pl-4'>Macacões</NavLink>
                                    <NavLink onClick={() => { setVisible(false); setCollectionOpen(false); }} to="/collection/casual" className='py-1 pl-4'>Casual</NavLink>
                                    <NavLink onClick={() => { setVisible(false); setCollectionOpen(false); }} to="/collection/casual" className='py-1 pl-4'>Blusas e Regatas</NavLink>
                                    <NavLink onClick={() => { setVisible(false); setCollectionOpen(false); }} to="/collection/casual" className='py-1 pl-4'>Shorts e Bermudas</NavLink>
                                    <NavLink onClick={() => { setVisible(false); setCollectionOpen(false); }} to="/collection/casual" className='py-1 pl-4'>Jaquetas e Coletes</NavLink>
                                    <NavLink onClick={() => { setVisible(false); setCollectionOpen(false); }} to="/collection/lancamentos" className='py-1 pl-4'>Lançamentos</NavLink>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    <NavLink onClick={() => setVisible(false)} className='py-2 pl-6' to='/about'>Sobre</NavLink>
                    <NavLink onClick={() => setVisible(false)} className='py-2 pl-6' to='/contact'>Contato</NavLink>
                </div>
            </div>
        </div>
    )
}

export default Navbar
