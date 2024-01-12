import React, { useRef } from "react"
import { Card } from "./Card";

export function Foreground() {
    const ref = useRef(null);

    const data = [{
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
        fileSize: ".9mb",
        closeOrAvailable: false,
        tag: {
            isOpen: true,
            tagTitle: "Download Now",
            tagColor: "bg-blue-600"
        } 
    }, {
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
        fileSize: ".9mb",
        closeOrAvailable: true,
        tag: {
            isOpen: false,
            tagTitle: "Download Now",
            tagColor: "bg-green-600"
        }
    }, {
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
        fileSize: ".9mb",
        closeOrAvailable: false,
        tag: {
            isOpen: true,
            tagTitle: "Download Now",
            tagColor: "bg-purple-600"
        }
    }];
    return (
            <div ref={ref} className='fixed top-0 left-0 z-[3] w-full h-full flex gap-10 flex-wrap p-8'>
                {data.map((item,index)=>(
                    <Card data={item} reference={ref}/>
                ))}
            </div>
    )
}