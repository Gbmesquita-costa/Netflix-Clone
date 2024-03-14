import Image from "next/image";
import Link from "next/link";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from "@/components/ui/sheet";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Input } from "@/components/ui/input";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Bell, Menu, Search } from "lucide-react";
import { Links } from "./navbarComponents/links";

import { UserNav } from "../userNav";
import { ToggleLinks } from "./navbarComponents/toggleLinks";

import { ToggleUserNav } from "../userNav/userNavComponents/toggleUserNav";
import { Button } from "@/components/ui/button";

export async function Navbar(): Promise<JSX.Element> {
  return (
    <div className="w-full max-w-[1800px] mx-auto items-center md:justify-between px-5 sm:px-6 py-5 lg:px-8 flex">
      <div className="flex items-center">
        <Link href="/home" className="w-24 md:w-32">
          <Image
            src={"netflix_logo.svg"}
            width={128}
            height={128}
            alt="Netflix logo"
            priority
          />
        </Link>

        <Links />
      </div>

      <div className="flex items-center gap-x-8 mr-8 ml-auto md:ml-0">
        <Dialog>
          <DialogTrigger asChild>
            <Search className="w-5 h-5 text-gray-300 cursor-pointer" />
          </DialogTrigger>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>Search</DialogTitle>
              <DialogDescription>
                Search for any titles, people, gender...
              </DialogDescription>
            </DialogHeader>
            <div className="flex items-center space-x-2">
              <div className="grid flex-1 gap-2">
                <Input
                  id="link"
                  type="text"
                  placeholder="Search..."
                />
              </div>
              <Button 
                type="submit" 
                variant={"ghost"} 
                size="sm" 
                className="p-5"
              >
                <Search/>
              </Button> 
            </div>
          </DialogContent>
        </Dialog>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Bell className="h-5 w-5 text-gray-300 cursor-pointer" />
          </DropdownMenuTrigger>

          <DropdownMenuContent className="w-72 h-56" align="end" forceMount>
            <DropdownMenuLabel>
              Notifications
            </DropdownMenuLabel>
            <DropdownMenuSeparator />

            <div className="flex flex-col items-center mt-16">
              <div className="flex items-center gap-3">
                <p>There is no notification</p>
                <Bell className="h-5 w-5 text-gray-300" />
              </div>
            </div>
          </DropdownMenuContent>
        </DropdownMenu>

        <div className="hidden md:flex">
          <UserNav />
        </div>
      </div>

      <div className="flex md:hidden">
        <Sheet>
          <SheetTrigger>
            <Menu />
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>
                <ToggleUserNav />
              </SheetTitle>
            </SheetHeader>

            <ToggleLinks />
          </SheetContent>
        </Sheet>
      </div>
    </div>
  )
}