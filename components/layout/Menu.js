'use client'
import Link from "next/link";
import { navigationItems } from "./navigation";

function DesktopItem({ item }) {
    return (
        <li className={item.children ? "dropdown" : undefined}>
            <Link href={item.href}>{item.label}</Link>
            {item.children && (
                <ul>
                    {item.children.map((child) => (
                        <DesktopItem item={child} key={child.label} />
                    ))}
                </ul>
            )}
        </li>
    );
}

export default function Menu() {
    return (
        <ul className="navigation clearfix">
            {navigationItems.map((item) => (
                <DesktopItem item={item} key={item.label} />
            ))}
        </ul>
    )
}
