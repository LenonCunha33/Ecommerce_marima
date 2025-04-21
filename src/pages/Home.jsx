import React from 'react'
import Hero from '../components/Hero'
import LatestCollection from '../components/LatestCollection'
import BestSeller from '../components/BestSeller'
import OurPolicy from '../components/OurPolicy'
import NewsletterBox from '../components/NewsletterBox'
import Descount from '../components/Descount'
import ProductCarousel from '../components/CarrouselProd'

const Home = () => {
    return (
        <div>
        <Hero />
        <ProductCarousel />
        <LatestCollection />
        <BestSeller />
        <OurPolicy />
        <NewsletterBox />
        <Descount />
        </div>
    )
}

export default Home