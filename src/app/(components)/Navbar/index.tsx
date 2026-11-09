"use client"
import { Bell, Menu, Settings, Sun } from "lucide-react";
import Link from "next/link";

const Navbar = ()=>{
    return <nav className={`flex justify-between items-center mb-8 w-full`}>
        {/* Left side */}
        <div className={`flex justify-between items-center gap-5`}>
            <button 
              className="px-3 py-3 rounded-full bg-gray-100 hover:bg-blue-100 cursor-pointer"
              onClick={()=>{}}
               >
                <Menu className="w-4 h-4" />
            </button>
            <div className="relative">
              <input 
                type="search" 
                placeholder="start type to search Groups & Products" 
                className="pl-10 pr-4 py-2 w-50 md:w-80 border-2 border-gray-300 rounded-lg bg-white focus:outline-none focus:border-blue-500"
               />
               <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Bell size={20} className="text-gray-500"/>
               </div>
            </div>
        </div>
        {/* Right side */}
        <div className="flex justify-between items-center gap-5">
            <div className="hidden md:flex justify-between items-center gap-5">
                <div>
                    <button>
                       <Sun className="text-gray-500 cursor-pointer" size={24}/>
                    </button>
                </div>
                <div className="relative">
                    <Bell className="text-gray-500 cursor-pointer" size={24} />
                    <span className="absolute -top-2 -right-2 px-[0.4em] py-1 rounded-full leading-none inline-flex items-center justify-center bg-red-400 text-red-100 text-sm font-semibold">3</span>
                </div>
                <hr className="w-0 h-8 border border-solid border-l border-gray-300 mx-3"/>
                <div className="flex items-center gap-3 cursor-pointer">
                    <div className="w-9 h-9">image</div>
                    <span className="font-semibold">Ed Roh</span>
                </div>
            </div>
            <Link href="settings">
                <Settings size={24} className="text-gray-500 cursor-pointer"/>
            </Link>
            
        </div>
        
    </nav>
}

export default Navbar;