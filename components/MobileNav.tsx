'use client';
import React from "react";
import {
    Sheet,
    SheetContent,
    SheetClose,
    SheetTrigger,
    SheetTitle
  } from "@/components/ui/sheet"
import Image from "next/image"
import Link from "next/link"
import { sidebarLinks } from "@/constants";
import { usePathname } from 'next/navigation';
import { cn } from "@/lib/utils";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";
const MobileNav = () => {
    const pathname = usePathname();
    return (
        <section className="w-full max-w-[264px]">
            <Sheet>
            <SheetTrigger asChild>
                <Image src="/icons/hamburger.svg" alt="burger" width={36} height = {36}
                 className="cursor-pointer" />
            </SheetTrigger>
            <SheetContent side="left" className="border-none bg-dark-1">
                <VisuallyHidden.Root>
                    <SheetTitle></SheetTitle>
                </VisuallyHidden.Root>
                <Link href="/" className="flex items-center gap-1">
                    <Image src='icons/logo.svg'
                    width={32}
                    height={32}
                    alt ="Yoom logo"
                    className = 'max-sm:size-10' />
                    <p className="text-[26px] font-extrabold text-white">
                        Yoom
                    </p>
                </Link>
                <div className="flex h-[calc(100vh-72px)] flex-col justify-between overflow-y-auto">
                        <section className="flex h-full flex-col gap-6 pt-16 text-white">
                            {sidebarLinks.map((item) => {
                                const isActive = pathname === item.route || pathname.startsWith(`${item.route}/`);
                                return (
                                <SheetClose asChild key={item.route}>
                                <Link
                                href={item.route}
                                key={item.label}
                                className={cn(
                                    'flex gap-4 items-center p-4 rounded-lg w-full max-w-60',
                                    {
                                    'bg-blue-1': isActive,
                                    }
                                )}
                                >
                                <Image
                                    src={item.imgURL}
                                    alt={item.label}
                                    width={20}
                                    height={20}
                                />
                                <p className="font-semibold">
                                    {item.label}
                                </p>
                                </Link>
                                </SheetClose>
                                );
                            })}
                        </section>
                </div>
            </SheetContent>
            </Sheet>
        </section>
    )
}

export default MobileNav;