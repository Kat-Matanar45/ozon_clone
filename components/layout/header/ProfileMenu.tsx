'use client'

import { signOut, TUser } from "@/lib/db/auth-client"
import Link from "next/link"

interface Props {
    setIsProfileMenuOpen: (isOpen: boolean) => void
}

export function ProfileMenu({setIsProfileMenuOpen}: Props) {
    const handleLogOut = () => {
        signOut()
        setIsProfileMenuOpen(false)
    }

    return (
        <div 
            className="fadeIn absolute top-full right-0 mt-2 bg-white rounded-md shadow-2xl p-4 z-10 flex flex-col gap-2 items-start"
        >
            <Link href='/profile' className="transition-colors hover:text-primary">Профиль</Link>
            <button className='transition-colors hover:text-primary' onClick={handleLogOut}>Выйти</button>
        </div>
    )
}