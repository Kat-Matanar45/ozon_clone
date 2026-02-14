"use client";

import { ReactElement, useEffect } from "react";

import Image from "next/image";
import Link from "next/link";

import cn from "clsx";
import {useTranslations} from 'next-intl';

import { headerMenu } from "./header-menu-data";

import { LayoutGrid, Search, User } from "lucide-react";
import { useOutsideClick } from "@/hooks/useOutsideClick";
import { Auth } from "./Auth";
import { useSession } from "@/lib/db/auth-client";
import { ProfileMenu } from "./ProfileMenu";

const Header = (): ReactElement => {

  const t = useTranslations('header');

  const { data } = useSession();

  const {isOpen, ref, setIsOpen} = useOutsideClick<HTMLDivElement>(false);

  const {
    isOpen: isProfileMenuOpen, 
    ref: profileMenuRef, 
    setIsOpen: setProfileMenuOpen
  } = useOutsideClick<HTMLDivElement>(false);

  useEffect(() => {
    if (data?.user) {
      setIsOpen(false)
    }
  }, [data, setIsOpen])

  return (
    <>
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
          {data?.user ? (
            <div className="relative" ref={profileMenuRef}>
              <button
                className={cn('flex items-center flex-col')}
                onClick={() => setProfileMenuOpen(!isProfileMenuOpen)}
              >
                <User size={20} />
                <span className="text-sm font-medium">
                  {data.user.name || data.user.email}
                </span>
              </button>

              {isProfileMenuOpen && <ProfileMenu setIsProfileMenuOpen={setProfileMenuOpen}/>}
            </div>
          ) : (
            <button
              className={"flex items-center flex-col"}
              onClick={() => setIsOpen(true)}
            >
              <User size={20} />
              <span className="text-sm font-medium">Войти</span>
            </button>
          )}
          

          {headerMenu.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className={cn(
                "flex items-center flex-col transition-opacity hover:opacity-100 opacity-50 font-medium",
              )}
            >
              <item.icon size={20} />

              <span className="text-sm font-medium">{item.title}</span>
            </Link>
          ))}
        </div>
      </header>

      {isOpen && (
        <Auth
          setIsOpen={setIsOpen}
          ref={ref}
        />
      )}
    </>
  );
};

export default Header;
