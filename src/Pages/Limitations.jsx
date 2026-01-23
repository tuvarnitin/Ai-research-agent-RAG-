import React from 'react'

function Limitations() {
  return (
      <section className="w-full flex flex-col md:px-20 sm:pt-50 py-10 sm:flex-row bg-background">

          <div className="w-full md:w-1/2 flex justify-center flex-col px-8 sm:px-20 space-y-1">
              <h1 className="text-[max(2.2vw,22px)] font-bold tracking-wider font-[sansation-bold]">CURRENT LIMITATIONS</h1>
              <ul className="space-y-1 list-disc">
                  <li className="text-[max(1.1vw,16px)] leading-5 font-[sansation-light]">
                      CPU-based inference may be slower for large queries.
                  </li>
                  <li className="text-[max(1.1vw,16px)] leading-5 font-[sansation-light]">
                      Large document sets require indexing optimization.
                  </li>
                  <li className="text-[max(1.1vw,16px)] leading-5 font-[sansation-light]">
                      Advanced personalization is not yet implemented.
                  </li>
              </ul>
          </div>
          <div className="w-full md:w-1/2 md:flex items-center justify-center hidden">
              <img src="/images/1.png" alt="" className='w-[26vw] drop-shadow-lg  drop-shadow-zinc-100/40 aspect-video object-cover' />
          </div>
      </section>
  )
}

export default Limitations