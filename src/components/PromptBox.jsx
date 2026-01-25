import React, { useEffect, useRef, useState } from 'react'
import SelectFileModal from './SelectFileModal'
import Button from './Button'
import { IoMdAdd } from 'react-icons/io'
import { BsSend } from 'react-icons/bs'
import FilePreviewer from './FilePreviewer'
import Input from './Input'

const PromptBox = ({ setMessages, setIsLoading, isLoading }) => {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [file, setFile] = useState(null)
    const input = useRef('');

    const handleChange = (e) => {
        setFile(e.target.files[0])
        input.current.focus()
    }

    const handleSend = async () => {
        input.current.focus()
        if (!input.current.value.trim() && !file) return;

        const userMessage = {
            role: 'user', content: {
                message: input.current.value,
                file: file
            }
        };
        setMessages((prev) => [...prev, userMessage]);
        input.current.value = ''
        setFile(null)
        setIsLoading(true);

        // Simulate API Call
        setTimeout(() => {
            const aiResponse = {
                role: 'assistant',
                content: {
                    message: `This is a simulated response. In a real app, you'd fetch this from an LLM API.This is a 
                    simulated response. In a real app, you'd fetch this 
                    from an LLM API.This is a simulated response. In a re
                    al app, you'd fetch this from an LLM API.This is a si
                    mulated response. In 
                    
                    a real app, you'd fetch this from an LLM API.This is a simu
                    lated response. In a real app, you'd fetch this from an LLM
                     API.This is a simulated response. In a real app, you'd fe
                     tch this from an LLM API.This is a simulated response. In 
                     a real app, you'd fetch this from an LLM API.This is a 
                    
                    simulated response. In a real app, you'd fetch this from an L
                    LM API.This is a simulated response. In a real app, you'd f
                    etch this from an LLM API.This is a simulated response. In 
                    a real app, you'd fetch this from an LLM API.This is a simu
                    lated response. In a real app, you'd fetch this from an LLM API.This is a simulat
                    ed response. In a real app, you'd fetch this from an LLM AP
                    I.This is a simulated response. In a real app, you'd fetch t
                    his from an LLM API.This is a simulated response. In a real app, you'
                    d fetch this from an LLM API.`
                }
            };
            setMessages((prev) => [...prev, aiResponse]);
            setIsLoading(false);
        }, 1000);
    };

    useEffect(() => { 
        setIsModalOpen(false)
        input.current.focus()
     }, [file])


    return (
        <div className="fixed bottom-0 w-full left-0 flex justify-center px-4 py-2 z-2 bg-background">
            <div className={`w-full max-w-2xl flex justify-between  bg-background shadow-sm shadow-zinc-800 border border-foreground/10 ${!file ? "rounded-full" : "rounded-xl"} px-1 py-1.5`}>
                <div className='w-full flex flex-col relative justify-center px-1'>
                    {/* Modal */}
                    {
                        isModalOpen &&
                        <SelectFileModal handleChange={handleChange} />
                    }

                    <div className='w-full flex gap-2 relative justify-between'>

                        <Button
                        isLoading={isLoading}
                         onClick={() => setIsModalOpen(prev => !prev)}
                          >
                            <IoMdAdd size={18} />
                        </Button>

                        <Input input={input} handleSend={handleSend} />

                        <Button 
                        isLoading={isLoading}
                        onClick={handleSend}
                          >
                            <BsSend size={18} />
                        </Button>
                    </div>
                    {
                        file &&
                        <FilePreviewer file={file} setFile={setFile} />
                    }
                </div>
            </div>
        </div>
    )
}

export default PromptBox