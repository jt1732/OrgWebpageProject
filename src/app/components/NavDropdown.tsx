"use client";

import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { Menu, Search } from "lucide-react"; // same as before
import Link from "next/link";        // if you were using it

export default function MobileMenu() {
  return (
      <DropdownMenu.Root>
        <DropdownMenu.Trigger asChild>
          <button className={'md:hidden w-full border rounded-md px-5 py-2'}>
            <Menu className="w-5 h-5 text-black" />
          </button>
        </DropdownMenu.Trigger>

        <DropdownMenu.Content
          side="bottom"
          align="end"
          sideOffset={8}
          className="z-40 w-screen origin-top-right rounded-md bg-white py-2 md:hidden"

        >

        <div className="flex gap-2 p-2 justify-center">
            <DropdownMenu.Item asChild>
                <Link href="#" className="w-full max-w-[200px] border rounded-md px-5 py-2 outline-none
                 data-[highlighted]:bg-gray-200">HOME</Link>
            </DropdownMenu.Item>
            <DropdownMenu.Item asChild>
                <Link href="#" className="w-full max-w-[200px] rounded-md px-5 py-2 bg-blue-400 text-white outline-none
                 data-[highlighted]:bg-blue-500 ">LOGIN</Link>
             </DropdownMenu.Item>
        </div>
          <DropdownMenu.Item className={'focus:outline-none'}>
              <div className="flex gap-2 p-2 justify-center">
                  <div className="flex items-center justify-self-center w-full max-w-md border rounded-md">
                      <Search className="w-7 h-7 ml-2 text-black"/><input type={'text'}
                                                                          className={'w-full select-auto focus:outline-none max-w-md px-3 h-10'}
                                                                          placeholder={"Search branches, clubs, members"}></input>
                  </div>
              </div>
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Root>
  );
}
