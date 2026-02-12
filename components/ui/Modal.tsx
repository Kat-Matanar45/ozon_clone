import { X } from "lucide-react"
import { PropsWithChildren, RefObject } from "react"

interface Props extends PropsWithChildren {
    onClose?: () => void
    ref: RefObject<HTMLDivElement | null>
}

export function Modal({onClose, ref, children}: Props) {
    return (
        <div 
            className="h-screen w-screen flex justify-center items-center bg-black/15 absolute top-0 left-0 z-10 fadeIn"
        >
            <div className="bg-white p-5 rounded-3xl shadow-lg w-sm relative" ref={ref}>
                
                <button 
                    onClick={onClose} 
                    className="size-8 bg-zinc-200 hover:rotate-45 transition-all rounded-full flex justify-center items-center absolute top-3 right-3 p-1.5"
                >
                    <X className="opacity-60"/>
                </button>

                {children}
            </div>
        </div>
    )
}