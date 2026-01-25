'use client'

import { ReactElement, useState, useMemo } from "react";

import Image from "next/image";
import { LANGUAGES } from "./languages.data";

type LanguageCode = typeof LANGUAGES[number]['code'];

const LanguageSwitcher = (): ReactElement => {
    const [currentLanguage, setCurrentLanguage] = useState<LanguageCode>('ru');

    const language = useMemo(() => {
        return LANGUAGES.find(lang => lang.code === currentLanguage)!
    }, [currentLanguage])

    return (
        <button 
            className="flex items-center gap-1.5 group w-12" 
            onClick={() => {
                setCurrentLanguage(prev => (prev === 'ru' ? 'en' : 'ru'))
            }}
        >
            <Image
                src={language.flag}
                alt=''
                width={20}
                height={20}
                className="group-hover:rotate-6 transition-transform"
            />

            <span className="uppercase font-medium opacity-50 transition-opacity group-hover:opacity-100">{language.code}</span>
        </button>
    )
}

export default LanguageSwitcher;