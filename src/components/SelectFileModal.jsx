import React from 'react'
import { IoMdAdd } from 'react-icons/io'

const SelectFileModal = ({ handleChange }) => {
  return (
      <div className='border bg-background border-foreground/30 text-white absolute -top-29 -left-2 z-2 rounded-md transition-all overflow-hidden'>
          <label htmlFor="pdf-input" className='flex items-center gap-1 hover:bg-zinc-900 px-2 min-w-26 py-1 border-b border-zinc-500 cursor-pointer'>
              <IoMdAdd size={14} /> PDF
              <input onChange={(e) => {
                  handleChange(e)
              }} type="file" hidden id='pdf-input' accept="application/pdf" />
          </label>
          <label htmlFor="text-input" className='flex items-center gap-1 hover:bg-zinc-900 px-2 min-w-26 py-1 border-b border-zinc-500 cursor-pointer'>
              <IoMdAdd size={14} /> Text
              <input onChange={(e) => {
                  handleChange(e)
              }} type="file" hidden id='text-input' accept='text/plain' />
          </label>
          <label htmlFor="image-input" className='flex items-center gap-1 hover:bg-zinc-900 px-2 min-w-26 py-1 cursor-pointer'>
              <IoMdAdd size={14} /> Image
              <input
                  onChange={(e) => {
                      handleChange(e)
                  }} type="file" hidden id='image-input' accept="image/*" />
          </label>
      </div>
  )
}

export default SelectFileModal