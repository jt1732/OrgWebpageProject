import Link from 'next/link'
import { Menu, Search  } from "lucide-react"
import React from "react";
import NavDropdown from "@/app/components/NavDropdown";

const Navbar = () => {
    return(
        <div className={'w-full h-16 bg-white grid grid-cols-[auto_auto_auto] items-center px-4'} id={'Topnav'}>
            <div className="text-sm sm:text-md md:text-xl font-bold justify-self-start">Auckland Sports Org</div>
            <div className="hidden md:flex justify-center items-center w-full max-w-md border rounded-md">
                <Search className="w-7 h-7 ml-2 text-black" /><input type={'text'} className={'w-full select-auto focus:outline-none max-w-md px-3 h-10'}
                       placeholder={"Search branches, clubs, members"}></input>
            </div>
            <div className={'md:hidden'}></div>
            <div className={'flex gap-4 justify-self-end mr-4 text-center items-center '}>
                <Link className={'hidden md:block w-full border rounded-md px-5 py-2 hover:bg-gray-200'} href={""}>HOME</Link>
                <Link className={'hidden md:block w-full rounded-md px-5 py-2 bg-blue-400 hover:bg-blue-500 text-white'} href={""}>LOGIN</Link>
                <NavDropdown></NavDropdown>
            </div>
        </div>

    )

}

export default Navbar