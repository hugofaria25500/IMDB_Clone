import { useState } from 'react'

/*COMPONENTS*/
import HeroSection from './components/HeroSection';
import MultiItemCarousel from './components/MultiItemCarousel';
import PromoSection from './components/PromoSection';
import Footer from './components/Footer';

import './App.css'

function App() {
  return (
    <div className="w-full flex flex-col justify-center">
        {/*NAVBAR*/}
        {/*<Navbar />*/}
        {/* HERO SECTION */}
        <HeroSection />
        {/* MOVIE CAROUSELS */}
        <MultiItemCarousel title="Popular Movies" />
        {/*TRENDING MOVIES*/}
        <MultiItemCarousel title="New Releases" />
        {/*PROMO SECTION*/}
        <PromoSection />
        {/*FOOTER*/}
        <Footer />
    </div>
  );
}

export default App;