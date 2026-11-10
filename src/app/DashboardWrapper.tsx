import React from "react"
import Navbar from "@/app/(components)/Navbar/index"
import Sidebar from "@/app/(components)/Sidebar/index"

const DashboardWrapper = ({children}:{children:React.ReactNode})=>{
    return <div className={`flex bg-gray-50 text-gray-900 w-full min-h-screen`}>
        <Sidebar/>
        <main className={`flex flex-col h-full w-full py-7 px-8 bg-gray-50 md:pl-24`}>
            <Navbar />
            {children}
        </main>
    </div>
}

export default DashboardWrapper;