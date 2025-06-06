'use client';

import Link from "next/link";
import {usePathname} from "next/navigation";
import {cn} from "@/lib/utils";
import { SignedIn, SignedOut } from "@clerk/nextjs";

const publicNavItems = [
    {label: "Home", href: "/"},
    {label: "Companions", href: "/companions"},
]

const protectedNavItems = [
    {label: "My Journey", href: "/my-journey"}
]

const NavItems = () => {
    const pathname = usePathname();

    return (
        <nav className="flex items-center gap-4 ">
            {publicNavItems.map(({label, href}) => (
                <Link href={href}
                      key={label}
                      className={cn(
                          "text-sm transition-colors hover:text-primary",
                          (href === '/' ? pathname === href : pathname.startsWith(href)) &&
                          'text-primary font-medium'
                      )
                }>
                      {label}
                </Link>
            ))}

            <SignedIn>
                {protectedNavItems.map(({label, href}) => (
                    <Link href={href}
                          key={label}
                          className={cn(
                              "text-sm transition-colors hover:text-primary",
                              (href === '/' ? pathname === href : pathname.startsWith(href)) &&
                              'text-primary font-medium'
                          )
                    }>
                          {label}
                    </Link>
                ))}
            </SignedIn>
        </nav>
    );
};

export default NavItems;
