import React from "react";
function Profilecard() {
    return ( 
        <div className="bg-color1 rounded-xl shadow-xl text-left">
            <div className="bg-indigo-600 px-6 py-6 rounded-xl">
                <img className="h-24 w-24 rounded-full" src="pro.png"/>
                <div className="py-4 mt-6 text-white">
                    <p className="text-xs">Reported for</p>
                    <h1 className="text-4xl font-sans">Jeremy Robson</h1>
                </div>

            </div>
            <div className="px-6 py-4 text-sm text-gray-300">
                <p className="py-1">Daily</p>
                <p className="py-1">Weeklly</p>
                <p className="py-1">Monthly</p>
            </div>
        </div>
     );
}

export default Profilecard;