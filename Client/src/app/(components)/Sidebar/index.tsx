
"use client"
import { Menu } from "lucide-react";

const Sidebar = ()=>{
    return <div>
        {/* Top Logo */}
        <div className="flex justify-center md:justify-normal items-center pt-8 gap-3">
            <div>logo</div>
            <h1 className="font-extrabold text-2xl">EDSTOCK</h1>
            <button className="px-3 py-3 rounded-full md:hidden bg-gray-100 hover:bg-blue-100" onClick={()=>{}}>
                <Menu className="w-4 h-4 "/>
            </button>
        </div>

        {/* Links */}
        <div className="grow mt-8">
            {/* Links here */}
        </div>

        {/* Footer */}
        <div>
            <p className="text-center text-xs text-gray-500">&copy; 2026 Edstock</p>
        </div>
    </div>
}

export default Sidebar;