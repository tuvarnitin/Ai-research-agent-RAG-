import React from 'react'

const HowWorks = () => {
    return (
        <section className="w-full flex flex-col md:px-20 sm:pt-50 py-10 sm:flex-row bg-background">
            <div className=" w-full md:w-1/2 md:flex hidden items-center justify-center">
                <img src="/images/2.jpeg" alt="" className='w-[26vw] grayscale-100 drop-shadow-lg  drop-shadow-zinc-100/40 aspect-video object-cover' />
            </div>
            <div className="w-full md:w-1/2 flex justify-center flex-col px-8 sm:px-20 space-y-1">
                <h1 className="text-[max(2.2vw,22px)] font-bold tracking-wider font-[sansation-bold] leading-[max(2.2vw,16px)]">HOW IT WORKS</h1>
                <div className="space-y-4">
                    <p className="text-[max(1.1vw,16px)] leading-5 font-[sansation-light]">
                        The system uses Retrieval-Augmented Generation (RAG) to answer questions accurately and transparently.
                    </p>
                    <ul className='list-decimal space-y-2 ml-1'>
                        <li>

                            <p className='text-[max(1.1vw,16px)] font-[sansation-light]'>
                                <span className='text-[max(1.3vw,18px)] font-[sansation-bold]'>Retrieve -</span>
                                Relevant sections are fetched using both keyword search and semantic search.</p>
                        </li>
                        <li>

                            <p className='text-[max(1.1vw,16px)] font-[sansation-light]'>
                                <span className='text-[max(1.3vw,18px)] font-[sansation-bold]'>Rank -</span>Retrieved content is ranked to identify the most relevant information.</p>

                        </li>
                        <li>
                            <p className='text-[max(1.1vw,16px)] font-[sansation-light]'>
                                <span className='text-[max(1.3vw,18px)] font-[sansation-bold]'>Generate -</span>

                                An LLM generates answers strictly from the retrieved context, preventing hallucinations.</p>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default HowWorks