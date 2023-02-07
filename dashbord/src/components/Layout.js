import React, { useState } from "react";
import Profilecard from "./Profilcard";
import Reportcard from "./Reportcard";

function Layout() {
    const [selectmod , Setselectmod] = useState("daily")
    return ( 
    <div className="mt-20 w-full lg:px-28 xl:px-44">
        <div className="sm:flex sm:justify-around px-4 lg:justify-center">
            <div className="">
                <Profilecard Setselectmod={Setselectmod}/>
            </div>
            <div className="w-full 2xl:w-1/2">
                <Reportcard selectmod={selectmod}/>
            </div>
            
            
        </div>
    </div> 
    );
}

export default Layout;