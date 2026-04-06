import { useState } from 'react'

/*COMPONENTS*/
import BackgroundImage from './components/BackgroundImage';
import HeroSection from './components/HeroSection';

import './App.css'

function App() {
  return (
    <div className="h-screen w-screen flex justify-center">
        {/* HERO SECTION */}
        <HeroSection />
    </div>
  );
}

export default App;