'use client'

import { ReactElement, useMemo, useTransition } from "react";

import Image from "next/image";
import { LANGUAGES } from "./languages.data";
import { usePathname, useRouter } from "@/i18n/navigation";
import { useLocale } from "next-intl";

import { Hourglass } from 'lucide-react';

type LanguageCode = typeof LANGUAGES[number]['code'];

const LanguageSwitcher = (): ReactElement => {
    const router = useRouter();
    const pathname = usePathname();
    const locale = useLocale(); 
    const [isPending, startTransition] = useTransition();

    const language = useMemo(() => {
        return LANGUAGES.find(lang => lang.code === locale)!
    }, [locale]);

    const toggleHandler = () => {
        const newLanguage = locale === 'ru' ? 'en' : 'ru';

        startTransition(() => {
            router.replace(pathname, {locale: newLanguage});
        })
    }

    return (
        <button 
            className="flex items-center gap-1.5 group w-12" 
            onClick={toggleHandler}
        >
            {isPending ? (
                <span className="ml-1 animate-spin"><Hourglass/></span>
            ) : (
                <Image
                src={language.flag}
                alt=''
                width={20}
                height={20}
                className="group-hover:rotate-6 transition-transform"
            />
            )}
            
            <span className="uppercase font-medium opacity-50 transition-opacity group-hover:opacity-100">{language.code}</span>
        </button>
    )
}

export default LanguageSwitcher;