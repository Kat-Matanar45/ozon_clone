"use client";

import { ReactElement } from "react";

import Image from "next/image";
import Link from "next/link";

import cn from "clsx";
import {useTranslations} from 'next-intl';

import { headerMenu } from "./header-menu-data";

import { LayoutGrid, Search } from "lucide-react";

const Header = (): ReactElement => {

  const t = useTranslations('header');

  return (
    <header className="grid grid-cols-[2fr_7fr_2.3fr] gap-5 items-center mt-3 mx-5">
      <div className="flex items-center gap-7">
        <Link href='/'>
          <Image src="/ozon_logo.png" alt="Logo" width={120} height={60} />
        </Link>

        <button className="bg-primary p-2 rounded-md text-white flex items-center gap-2">
          <LayoutGrid />

          <span>{t('catalogTitle')}</span>
        </button>
      </div>

      <div className="rounded-xl p-1 flex items-center bg-primary">
        <input
          type="text"
          placeholder={t('searchPlaceholder')}
          value=""
          onChange={() => {}}
          className="bg-white rounded-lg px-4 py-1.5 w-full"
        />
        <button className="px-6">
          <Search color="#fff" />
        </button>
      </div>

      <div className="flex gap-5 items-center ml-2 justify-end">
        {headerMenu.map((item, index) => (
          <Link
            key={item.title}
            href={item.href}
            className={cn(
              "flex items-center flex-col transition-opacity hover:opacity-100 opacity-50 font-medium",
              index === 0 && "opacity-100",
            )}
          >
            <item.icon size={20} />

            <span className="text-sm font-medium">{item.title}</span>
          </Link>
        ))}
      </div>
    </header>
  );
};

export default Header;
