import React from 'react'

const WhatCanDo = () => {
  return (
    <section className="w-full flex flex-col md:px-20 sm:pt-50 py-10 sm:flex-row  bg-background">
      <div className="w-full md:w-1/2 flex justify-center flex-col px-8 sm:px-20 space-y-1">
        <h1 className="text-[max(2.2vw,22px)] font-bold tracking-wider font-[sansation-bold] leading-7">What it can do -</h1>
        <ul className='list-disc space-y-1'>
          <li>
            <p className='text-[max(1.1vw,16px)] font-[sansation-light]'>Query private PDF documents using natural language</p>
          </li>
          <li>
            <p className='text-[max(1.1vw,16px)] font-[sansation-light]'>Hybrid retrieval (keyword + semantic search)</p>
          </li>
          <li>
            <p className='text-[max(1.1vw,16px)] font-[sansation-light]'>Context-grounded answers with source references</p>
          </li>
          <li>
            <p className='text-[max(1.1vw,16px)] font-[sansation-light]'>Privacy-first, local-deployment friendly design</p>
          </li>
        </ul>
      </div>
      <div className="w-full sm:w-1/3 md:flex hidden items-center justify-center">
        <img src="/images/2.jpeg" alt="" className='w-[26vw] grayscale-100 drop-shadow-lg  drop-shadow-zinc-100/40 aspect-video object-cover' />
      </div>
    </section>
  )
}

export default WhatCanDo