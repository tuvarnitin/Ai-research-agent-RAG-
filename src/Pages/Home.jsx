import Navbar from '../components/Navbar'
import Scene from '../3d models/Scene'
import OurTeam from './OurTeam'
import SystemArchitech from './SystemArchitech'
import Hero from './Hero'
import WhatCanDo from './WhatCanDo'
import HowWorks from './HowWorks'
import ProblemSolves from './ProblemSolves'
import WhyDifferent from './WhyDifferent'
import Limitations from './Limitations'
import Improvement from './Improvement'
import Lenis from 'lenis'


const Home = () => {
    // Initialize Lenis
    const lenis = new Lenis({
        autoRaf: true
    });
    return (
        <div>
            <Navbar />
            <main className="relative z-2 flex flex-col items-center justify-center">
                <Hero />
                <ProblemSolves />
                <HowWorks />
                <WhatCanDo />
                <WhyDifferent />
                <Limitations />
                <Improvement />
                {/* <SystemArchitech /> */}
                <OurTeam />
            </main>
            <Scene />
        </div>
    )
}

export default Home