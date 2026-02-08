import { InputHTMLAttributes } from "react";

import cn from 'clsx';

type Props = InputHTMLAttributes<HTMLInputElement> 

export function Field({className, ...rest}: Props) {
    return (
        <input 
            className={cn("w-full border-2 border-zinc-300 transition-colors focus:border-primary rounded-lg px-4 py-3 mb-3", className)}
            {...rest}
        />
    )
}