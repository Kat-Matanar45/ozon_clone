'use client'

import { ReactElement } from "react";

import Link from "next/link";

import cn from "clsx";

import { topMenu } from "./top-menu-data";

// import LanguageSwitcher from "../language-switcher/LanguageSwitcher";
import { Dot } from "lucide-react";
import dynamic from "next/dynamic";

const DynamicLanguageSwitcher = dynamic(() => import("../language-switcher/LanguageSwitcher").then(mod => mod.default), {ssr: false})

const TopMenu = (): ReactElement => {
  return (
    <div className="flex justify-between items-center mt-6 mx-5">
      <nav className="flex gap-6 items-center">
        {topMenu.map((menuItem, index) => (
          <Link
            key={menuItem.title}
            href={menuItem.href}
            className={cn(
              "flex gap-1 items-center transition-opacity hover:opacity-100 opacity-50 font-medium",
              index === 0 && "opacity-100 text-teal-600",
            )}
          >
            {menuItem.icon && (
              <menuItem.icon size={16} style={{ marginRight: 4 }} />
            )}

            <span>{menuItem.title}</span>
          </Link>
        ))}
      </nav>
      <div className="flex items-center gap-4">
        <div className="font-medium flex items-center text-sm">
          <span className="opacity-50">Москва</span>
          <Dot className="opacity-50"/>
          <button className="text-primary font-semibold">Укажите адрес</button>
        </div>
        <div>
          <DynamicLanguageSwitcher />
        </div>
      </div>
    </div>
  );
};

export default TopMenu;
