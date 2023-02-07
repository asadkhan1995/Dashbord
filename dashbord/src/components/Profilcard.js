import React from "react";
function Profilecard({Setselectmod}) {
    const Listclick=(mod)=>{
        Setselectmod(mod)
    }
    return ( 
        <div className="bg-color1 rounded-xl shadow-lg text-left mt-4">
            <div className="bg-indigo-600 px-6 py-5 rounded-xl flex justify-between sm:flex-col">
                <img className="h-20 w-20 rounded-full" src="pro.png"/>
                <div className="py-4 mt-2 sm:mt-4 text-white">
                    <p className="text-xs ">Reported for</p>
                    <h1 className="text-2xl sm:text-3xl font-sans">Jeremy Robson</h1>
                </div>

            </div>
            <div className="px-6 py-4 lg:py-4 sm:py-6 2xl:py-8  text-sm text-indigo-500 flex justify-between sm:flex-col">
                <button onClick={()=>Listclick("daily")} className="text-indigo-500 py-1 text-left focus:text-white active:text-white hover:text-white cursor-pointer">Daily</button>
                <button onClick={()=>Listclick("weekly")} className="py-1 text-left focus:text-white hover:text-white cursor-pointer">Weeklly</button>
                <button onClick={()=>Listclick("monthly")} className="py-1 text-left focus:text-white hover:text-white cursor-pointer">Monthly</button>

                
            </div>
        </div>
     );
}

export default Profilecard;