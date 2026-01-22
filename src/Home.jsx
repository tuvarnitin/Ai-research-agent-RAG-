import { Link } from "react-router-dom"
import Scene from "./Scene"

const Home = () => {
    return (
        <div>
            <nav className="flex items-center justify-between py-4 px-30">
                <Link to={'/'} className="font-extrabold text-4xl">Ace</Link>
                <div className="flex gap-8">
                    <Link>Link 1</Link>
                    <Link>Link 2</Link>
                    <Link>Link 3</Link>
                    <Link>Link 4</Link>
                </div>
            </nav>
            <main className="relative z-1 flex flex-col items-center justify-center space-y-1">
                <div className="flex flex-col items-center min-h-[80vh] justify-center">
                    <h1 className="text-6xl text-center font-[sansation-bold] pointer-events-none select-none">Private Document Intelligence System</h1>
                    <h1 className="text-md w-[60%] text-center pointer-events-none select-none text-zinc-400">Query your private PDFs using a secure, on-prem, LLM-powered retrieval system with source-grounded answers.</h1>
                    <div className="flex gap-4 mt-6">
                        <button className="bg-green-400/80 text-background font-bold py-1 hover:text-foreground hover:scale-[0.9] transition-all transition-background duration-200 px-4 rounded-md cursor-pointer hover:bg-background">Get started</button>
                        <button className="border border-green-400/80 font-bold py-1 hover:text-background hover:scale-[0.9] transition-all transition-background duration-200 px-4 rounded-md cursor-pointer hover:bg-green-400/80">Docs</button>
                    </div>
                </div>
                <div className="w-full min-h-screen flex bg-linear-to-t from-80% to-100% from-background to-transparent">
                    <div className="min-h-[50vh] w-1/2 flex justify-center flex-col px-20 space-y-3">
                        <h1 className="text-[max(2.2vw)] font-bold tracking-wider font-[sansation-bold]">WHAT PROBLEM IT SOLVES</h1>
                       <div className="space-y-2">
                            <li className="text-[max(1.1vw)] leading-5 font-[sansation-light]">
                                Organizations store critical knowledge in PDFs — policies, manuals, contracts — but retrieving precise information is slow and error-prone.
                            </li>
                            <li className="text-[max(1.1vw)] leading-5 font-[sansation-light]">
                                This system enables natural-language querying over private documents while ensuring privacy, accuracy, and transparency.
                            </li>   
                       </div>
                    </div>
                    <div className="min-h-[50vh] w-1/2"></div>
                </div>
            </main>
            <div className="fixed top-0 left-0 w-screen h-screen">
                <Scene />
            </div>
        </div>
    )
}

export default Home