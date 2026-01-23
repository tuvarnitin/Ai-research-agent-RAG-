import React from 'react'

const ProblemSolves = () => {
    return (
        <section className="w-full flex flex-col md:px-20 sm:pt-50 py-10 sm:flex-row bg-linear-to-t from-80% to-100% from-background to-transparent">
            <div className="w-full md:w-1/2 flex justify-center flex-col px-8 sm:px-20 space-y-1">
                <h1 className="text-[max(2.2vw,22px)] font-bold tracking-wider font-[sansation-bold]">WHAT PROBLEM IT SOLVES</h1>
                <div className="space-y-2">
                    <li className="text-[max(1.1vw,16px)] leading-5 font-[sansation-light]">
                        Organizations store critical knowledge in PDFs — policies, manuals, contracts — but retrieving precise information is slow and error-prone.
                    </li>
                    <li className="text-[max(1.1vw,16px)] leading-5 font-[sansation-light]">
                        This system enables natural-language querying over private documents while ensuring privacy, accuracy, and transparency.
                    </li>
                </div>
            </div>
            <div className="w-full md:w-1/2 md:flex items-center justify-center hidden">
                <img src="/images/1.png" alt="" className='w-[26vw] drop-shadow-lg  drop-shadow-zinc-100/40 aspect-video object-cover' />
            </div>
        </section>
    )
}

export default ProblemSolves