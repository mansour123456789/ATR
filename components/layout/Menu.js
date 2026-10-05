'use client'
import Link from "next/link";
import { navigationItems } from "./navigation";
import { useLanguage } from "@/context/LanguageContext";

function DesktopItem({ item, t }) {
    const label = item.key ? t(item.key, item.label) : item.label;
    return (
        <li className={item.children ? "dropdown" : undefined}>
            <Link href={item.href}>{label}</Link>
            {item.children && (
                <ul>
                    {item.children.map((child) => (
                        <DesktopItem item={child} t={t} key={child.key || child.label} />
                    ))}
                </ul>
            )}
        </li>
    );
}

export default function Menu() {
    const { t } = useLanguage();
    return (
        <ul className="navigation clearfix">
            {navigationItems.map((item) => (
                <DesktopItem item={item} t={t} key={item.key || item.label} />
            ))}
        </ul>
    );
}
