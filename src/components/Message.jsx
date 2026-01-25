import React, { useEffect, useState } from 'react'
import { BsFiletypePdf } from "react-icons/bs";
import { CiFileOn } from "react-icons/ci";
const Message = ({ msg }) => {

    return (
        <>
            {
                msg.content.file
                &&
                <div
                    className={`${msg.role === 'assistant' ? 'my-80' : 'w-fit rounded-lg overflow-hidden ml-auto'}`}
                >
                    {
                        msg.content.file?.type.includes("image")
                            ?
                            <img src={URL.createObjectURL(msg.content.file)} className='w-[max(24vw,180px)] bg-foreground' alt="" />
                            :
                            <div
                                className={`py-1.5 px-2 ${msg.role === 'assistant' ? '' : 'border border-foreground/30 w-fit max-w-60 rounded-full ml-auto'} flex gap-1 items-center overflow-hidden`}
                            >
                                {
                                    msg.content.file?.type.includes("pdf")
                                     ?
                                        <BsFiletypePdf size={16} />
                                        :
                                        <CiFileOn size={24} />
                                }
                                <p className='w-[90%] text-wrap text-ellipsis overflow-hidden'>
                                    {msg.content.file?.name}
                                </p>
                            </div>
                    }
                </div>

            }
            {
                msg.content.message
                &&
                <div
                    className={`py-1 px-2 ${msg.role === 'assistant' ? '' : ' w-fit max-w-130 rounded-2xl ml-auto bg-foreground/8'} overflow-x-auto`}
                >
                    <p className='text-wrap'>
                        {msg.content?.message}
                    </p>
                </div>
            }
        </>
    )
}

export default Message