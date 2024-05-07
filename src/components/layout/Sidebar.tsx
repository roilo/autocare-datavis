"use client";

import React from 'react';
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from "../ui/tooltip";
import { LayoutDashboard, HomeIcon, Wrench, UsersIcon, SettingsIcon, Calendar } from "lucide-react";
import Link from "next/link";
import { usePathname } from 'next/navigation';

interface SidebarProps {
    links: Array<{
        label: string;
        path: string;
    }>
}

const getIconByLabel = (label: string) => {
    switch (label) {
        case 'Home':
            return <HomeIcon className="h-5 w-5" />;
        case 'Repair Orders':
            return <Wrench className="h-5 w-5" />;
        case 'Employees':
            return <UsersIcon className="h-5 w-5" />;
        case 'Calendar':
            return <Calendar className="h-5 w-5" />;
        default:
            return null;
    }
};

export default function Sidebar({ links }: SidebarProps) {
    const pathname = usePathname();
    return (  
        <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex">
            {/* Navigation Area */}
            <nav className="flex flex-col items-center gap-4 px-2 sm:py-5">
                <Link
                    className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base"
                    href="#"
                >
                    <LayoutDashboard className="h-4 w-4 transition-all group-hover:scale-110" />
                    <span className="sr-only">Acme Inc</span>
                </Link>

                {links.map(link => {
                    const isActive = pathname === link.path;
                    const Icon = getIconByLabel(link.label);

                    return (
                        <TooltipProvider key={`${link.label}-${link.path}`}>
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <Link
                                        className={isActive ? 'flex h-9 w-9 items-center justify-center rounded-lg bg-accent text-accent-foreground transition-colors hover:text-foreground md:h-8 md:w-8' : 'flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8'}
                                        href={link.path}
                                    >
                                        {Icon}
                                        <span className="sr-only">{link.label}</span>
                                    </Link>
                                </TooltipTrigger>
                                <TooltipContent side="right">{link.label}</TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                    )
                })}
            </nav>

            {/* Settings Area */}
            <nav className="mt-auto flex flex-col items-center gap-4 px-2 sm:py-5">
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Link
                                className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                                href="#"
                            >
                                <SettingsIcon className="h-5 w-5" />
                                <span className="sr-only">Settings</span>
                            </Link>
                        </TooltipTrigger>
                        <TooltipContent side="right">Settings</TooltipContent>
                    </Tooltip>
                </TooltipProvider>
            </nav>
        </aside>
    );
}
