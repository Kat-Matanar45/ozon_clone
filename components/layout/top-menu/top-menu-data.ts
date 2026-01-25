import { PagesConfig } from "@/config/pages.config"
import { Banana, BriefcaseBusiness, CreditCard, LucideIcon, Plane } from "lucide-react"

interface ITopMenuItem {
    title: string
    href: string
    icon?: LucideIcon
}

export const topMenu: ITopMenuItem[] = [
    {
        title: "Ozon fresh",
        icon: Banana,
        href: PagesConfig.FRESH
    },
    {
        title: "Ozon карта",
        icon: CreditCard,
        href: PagesConfig.OZON_CARD
    },
    {
        title: "Авиа-билеты",
        icon: Plane,
        href: PagesConfig.AIR_TICKETS
    },
    {
        title: "Для бизнеса",
        icon: BriefcaseBusiness,
        href: PagesConfig.FOR_BUSINESS
    },
    {
        title: "Одежда",
        href: PagesConfig.CLOTHING
    },
    {
        title: "Дом и сад",
        href: PagesConfig.HOME_AND_GARDEN
    },
    {
        title: "Товары за 1₽",
        href: PagesConfig.PRODUCTS_FOR_1_RUB
    },
    {
        title: "Сертификаты",
        href: PagesConfig.CERTIFICATES
    },
] as const;
