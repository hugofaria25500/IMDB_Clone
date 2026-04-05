import { useState } from 'react'

/*COMPONENTS*/
import BackgroundImage from './components/BackgroundImage';
import HeroSection from './components/HeroSection';

/*IMAGES*/
import backgroundImage from "./assets/background_image.jpg"

import './App.css'

function App() {
  return (
    <div className="h-screen w-screen flex justify-center">
        {/* BACKGROUND IMAGE*/}
        <BackgroundImage backgroundImage={backgroundImage} />
        {/* HERO SECTION */}
        <HeroSection />
    </div>
  );
}

export default App;