'use client'

import { ReactElement, useState } from "react";

import Image from "next/image";

import cn from 'clsx'

import { SLIDES } from "./slides.data";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Slider = (): ReactElement => {
    const [activeSlideId, setActiveSlideId] = useState(1);

    return (
        <div className="relative">
            {SLIDES.map(slide => (
                <div
                    key={slide.id}
                    className={cn(slide.id === activeSlideId ? 'block' : 'hidden', 'rounded-2xl overflow-hidden')}
                >
                    <Image
                        src={slide.image}
                        alt='Специальное предложение'
                        width={1450}
                        height={307}
                        className="w-full"
                    />
                </div>
            ))}

            <div className="absolute top-1/2 -translate-y-1/2 w-full flex justify-between px-4">
                <button 
                    onClick={() =>
                        setActiveSlideId(
                            activeSlideId === 1 ? SLIDES.length : activeSlideId - 1
                        )
                    }
                    className="bg-white/50 transition hover:bg-white/75 text-black font-bold p-1.5 rounded-lg"
                >
                    <ChevronLeft size={20} />
                </button>

                <button 
                    onClick={() =>
                        setActiveSlideId(
                            activeSlideId === 1 ? SLIDES.length : activeSlideId - 1
                        )
                    }
                    className="bg-white/50 transition hover:bg-white/75 text-black font-bold p-1.5 rounded-lg"
                >
                    <ChevronRight size={20} />
                </button>

            </div>
        </div>
    )
}

export default Slider;