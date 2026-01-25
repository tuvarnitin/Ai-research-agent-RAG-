import { useState, useEffect, useRef } from 'react';
import MessagePanel from '../components/MessagePanel';
import PromptBox from '../components/PromptBox';

const Chat = () => {
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef(null);

    const [messages, setMessages] = useState([
        {
            role: 'assistant', content: {
                message: 'Hello! How can I help you today?',
                file: null
            }
        }
    ]);

    // Auto-scroll to the bottom when messages change
    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    return (
        <>
            <div className="relative flex min-h-screen text-foreground justify-center z-6 selection:bg-foreground selection:text-background">
                {/* Main Chat Area */}
                <div className="flex-1 flex flex-col relative p-4 max-w-2xl py-10">
                    <MessagePanel
                        messages={messages}
                        isLoading={isLoading}
                        messagesEndRef={messagesEndRef}
                    />
                    {/* Input Area */}
                    <PromptBox
                    isLoading={isLoading}
                        setMessages={setMessages}
                        setIsLoading={setIsLoading}
                    />
                </div>
            </div>
            {/* <div className='w-screen h-screen bg-background text-foreground fixed top-0 left-0 z-1 grid place-items-center'>
                <img className='w-full h-full object-cover scale-[1] animate-myspin opacity-5 transform translate-y-50' src="moon.png" alt="" />
            </div> */}
        </>
    );
};

export default Chat;

{/* */ }