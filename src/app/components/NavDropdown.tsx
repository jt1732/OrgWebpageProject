import {Menu, Search} from "lucide-react";
import Link from "next/link";
import React from "react";

const NavDropdown = () => {
    return (
        <div suppressHydrationWarning>
        <el-dropdown>
            <button className={'md:hidden w-full border rounded-md px-5 py-2'}><Menu className="w-5 h-5 text-black"/>
            </button>
            <el-menu anchor="bottom end" popover={true}
                     className="w-screen origin-top-right rounded-md bg-white py-2 transition transition-discrete [--anchor-gap:--spacing(2)] data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
                     id="menu-0" aria-labelledby="menu-button-1" role="menu">
                <div className="py-4">
                    <div className="flex gap-2 p-2 justify-center">
                        <Link className={'w-full max-w-[200px] border rounded-md px-5 py-2'} href={""}>HOME</Link>
                        <Link className={'w-full max-w-[200px] rounded-md px-5 py-2 bg-blue-400 text-white'}
                              href={""}>LOGIN</Link>
                    </div>
                    <div className="flex gap-2 p-2 justify-center">
                        <div className="flex items-center justify-self-center w-full max-w-md border rounded-md">
                            <Search className="w-7 h-7 ml-2 text-black"/><input type={'text'}
                                                                                className={'w-full select-auto focus:outline-none max-w-md px-3 h-10'}
                                                                                placeholder={"Search branches, clubs, members"}></input>
                        </div>
                    </div>
                </div>
            </el-menu>
        </el-dropdown>
        </div>
    )
}
export default NavDropdown