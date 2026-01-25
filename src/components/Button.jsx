import React from 'react'

const Button = ({children,isLoading,...props}) => {
    return (
        <div className='w-[max(6%,36px)]  aspect-square flex justify-end'>
            <button
            disabled={isLoading}
            {...props}
                className={`w-full aspect-square border  border-foreground/10 hover:border-zinc-600 hover:bg-zinc-900 text-white rounded-full place-items-center  hover:scale-[0.9] transition-all ${isLoading ? "cursor-not-allowed" : 'cursor-pointer'} disabled:opacity-30`}
            >
               {children}
            </button>
        </div>
    )
}

export default Button