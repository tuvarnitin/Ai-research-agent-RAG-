import React from 'react'

const Input = ({input,handleSend}) => {
  return (
      <div className="w-[80%] flex items-center">
          <input
              className="w-full text-white focus:outline-none"
              ref={input}
              placeholder="Ask your query"
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          />
      </div>
  )
}

export default Input