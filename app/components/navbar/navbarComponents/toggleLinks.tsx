"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";

interface linkProps {
    name: string;
    href: string;
}

export function ToggleLinks(): JSX.Element {
    const pathName = usePathname()

    const links: linkProps[] = [
        { name: "Home", href: "/home" },
        { name: "Tv Shows", href: "/home/shows" },
        { name: "Movies", href: "/home/movies" },
        { name: "Recently Added", href: "/home/recently" },
        { name: "My List", href: "/home/user/list" }
    ]

    return (
        <ul className="flex flex-col gap-5 mt-12">
            {links.map((link, idx) => (
                <div key={idx}>
                    {pathName === link.href ? (
                        <li>
                            <Link
                                href={link.href}
                                className="text-white font-semibold underline text-md"
                            >
                                {link.name}
                            </Link>
                        </li>
                    ) : (
                        <li>
                            <Link
                                className="text-gray-300 font-normal text-md"
                                href={link.href}
                            >
                                {link.name}
                            </Link>
                        </li>
                    )}
                </div>
            ))}
        </ul>
    )
}