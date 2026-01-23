import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
    return (
        <section id='hero' className="flex flex-col items-center min-h-[85vh] justify-center space-y-1 px-4">
            <h1 className="text-[max(4.2vw,32px)] leading-[max(5.5vw,30px)] text-center font-[sansation-bold] pointer-events-none select-none">Private Document Intelligence System</h1>
            <h1 className="text-[max(1.2vw,16px)] lg:w-[60%] w-full text-center pointer-events-none select-none text-zinc-100/75">Query your private PDFs using a secure, on-prem, LLM-powered retrieval system with source-grounded answers.</h1>
            <div className="flex gap-4 mt-2">
                <Link className="border py-1 px-3 rounded-full border-green-400 cursor-pointer" to={'/chat'}>Get started</Link>
            </div>
        </section>
    )
}

export default Hero