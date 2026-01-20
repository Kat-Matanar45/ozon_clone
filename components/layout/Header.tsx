'use client'

import { ReactElement } from "react";

import Image from 'next/image';
import Link from "next/link";

import { headerMenu } from "./header-menu-data";

import { LayoutGrid, Search } from "lucide-react";

const Header = ():ReactElement => {
    return (
        <header className="flex gap-5 items-center">
            <Image
                src='/logo.png'
                alt='Logo'
                width={120}
                height={60}
            />

            <button className="bg-primary p-2 rounded-md text-white flex items-center gap-2">
                <LayoutGrid/>

                <span>Каталог</span>
            </button>

            <div className="rounded-xl p-1 flex items-center bg-primary">
                <input 
                    type='text' 
                    placeholder="Искать на Ozon"
                    value=''
                    onChange={() => {}}
                    className="bg-white rounded-lg px-4 py-1.5"
                />
                <button className="px-6">
                    <Search color='#fff'/>
                </button>
            </div>

            <div className="flex gap-5 items-center ml-20">
                {headerMenu.map((item) => <Link
                    key={item.title}
                    href={item.href}
                    className="flex items-center flex-col transition-colors hover:opacity-100 opacity-50 text-sm"
                >
                <item.icon size={20}/>

                <span className="text-sm font-medium">
                    {item.title}
                </span>
                </Link>)}
            </div>

        </header>
    )
}

export default Header;