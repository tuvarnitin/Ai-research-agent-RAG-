import React from 'react'
import Message from './Message'

const MessagePanel = ({ messages, isLoading, messagesEndRef  }) => {
  return (
      <div className=" space-y-2 flex flex-col  gap-8 pb-32 text-sm">
          {messages.map((msg, idx) => (
              <>
                  <Message key={`${crypto.randomUUID()}_${idx}`} msg={msg} />
              </>
          ))}
          {isLoading && (
              <div className="max-w-3xl px-14 py-4 text-gray-400 animate-pulse">
                  Thinking...
              </div>
          )}
          <div ref={messagesEndRef} />
      </div>
  )
}

export default MessagePanel