import React, { useState } from "react";
import {
    CircleUser,
    Menu,
    Package2,
    Search,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { NavLink } from "react-router-dom";
import { menuStudent } from "./menu";

const Header: React.FC = () => {
    const [isSheetOpen, setIsSheetOpen] = useState(false);

    const closeSheet = () => setIsSheetOpen(false);

    return (
        <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
            <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
                <NavLink to='' className="flex items-center gap-2 text-lg font-semibold md:text-base">
                    <Package2 className="h-6 w-6" />
                    <span className="sr-only">Abzent Zero</span>
                </NavLink>
                {menuStudent.map((item, index) => (
                    <NavLink
                        to={item.path}
                        key={index}
                        className={({ isActive }) =>
                            (isActive ? 'text-foreground transition-colors' : 'text-muted-foreground') +
                            ' hover:text-foreground text-nowrap'
                        }
                    >
                        {item.display}
                    </NavLink>
                ))}
            </nav>
            <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
                <SheetTrigger asChild>
                    <Button
                        variant="outline"
                        size="icon"
                        className="shrink-0 md:hidden"
                    >
                        <Menu className="h-5 w-5" />
                        <span className="sr-only">Toggle navigation menu</span>
                    </Button>
                </SheetTrigger>
                <SheetContent side="left">
                    <nav className="grid gap-6 text-lg font-medium">
                        <NavLink to='' className="flex items-center gap-2 text-lg font-semibold" onClick={closeSheet}>
                            <Package2 className="h-6 w-6" />
                            <span className="sr-only">Abzent Zero</span>
                        </NavLink>
                        {menuStudent.map((item, index) => (
                            <NavLink to={item.path} key={index} className={({ isActive }) => (isActive ? 'text-foreground transition-colors' : 'text-muted-foreground') + ' hover:text-foreground text-nowrap'} onClick={closeSheet}>
                                {item.display}
                            </NavLink>
                        ))}
                    </nav>
                </SheetContent>
            </Sheet>
            <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
                <form className="ml-auto flex-1 sm:flex-initial">
                    <div className="relative">
                        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                        <Input
                            type="search"
                            placeholder="Search"
                            className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
                        />
                    </div>
                </form>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="secondary" size="icon" className="rounded-full">
                            <CircleUser className="h-5 w-5" />
                            <span className="sr-only">Toggle user menu</span>
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuLabel>My Account</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>Settings</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>Logout</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </header>
    );
};

export default Header;