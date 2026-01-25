import { IoMdAdd, IoMdAddCircle } from 'react-icons/io'

const FilePreviewer = ({ file, setFile }) => {
    return (
        <>
            {
                file?.type.includes("image")
                    ?
                    < div className='relative w-fit max-w-40 flex border border-foreground/20 rounded-sm overflow-hidden mt-1' >
                        <img src={URL.createObjectURL(file)} className='w-14 h-14 object-cover' alt="" />
                        <button className='absolute right-0 top-0 flex items-center justify-center cursor-pointer bg-blend-difference' onClick={() => setFile(null)}>
                            <IoMdAddCircle size={20}  className='rotate-45 text-red-700' />
                        </button>
                    </div >
                    :
                    < div className='relative w-fit max-w-40 flex border border-foreground/20 py-1 px-1.5 rounded-full overflow-hidden mt-1' >
                        <h1 className='text-nowrap pr-5'>{file.name}</h1>
                        <button className='absolute min-h-full right-0 px-0.5 top-0 bg-background flex items-center justify-center cursor-pointer bg-blend-difference' onClick={() => setFile(null)}>
                            <IoMdAddCircle size={20} className='rotate-45' />
                        </button>
                    </div>
            }
        </>
    )
}

export default FilePreviewer