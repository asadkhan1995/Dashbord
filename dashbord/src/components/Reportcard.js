import React, {useState} from "react";
import Datas from   "../data.json";
import iconEllipsis from '../img/icon-ellipsis.svg';
import iconExercise from '../img/icon-exercise.svg';
import iconPlay from '../img/icon-play.svg';
import iconSelfCare from '../img/icon-self-care.svg';
import iconSocial from '../img/icon-social.svg';
import iconStudy from '../img/icon-study.svg';
import iconWork from '../img/icon-work.svg';

function Reportcard({selectmod}) {
    const COLORS = {
        Work: 'hsl(15, 100%, 70%)',
        Play: 'hsl(195, 74%, 62%)',
        Study: 'hsl(348, 100%, 68%)',
        Exercise: 'hsl(145, 58%, 55%)',
        Social: 'hsl(264, 64%, 52%)',
        'Self Care': 'hsl(43, 84%, 65%)',
    };
    const ICONS = {
	Work: iconWork,
	Play: iconPlay,
	Study: iconStudy,
	Exercise: iconExercise,
	Social: iconSocial,
	'Self Care': iconSelfCare,
};
    
    const [openDropdown, setOpenDropdown] = useState(null);

    const handleDropdownClick = (id) => {
        
        if (openDropdown === id) {
          setOpenDropdown(null);
        } else {
          setOpenDropdown(id);
        }
      };
    
    return ( 
        
        <div className="sm:grid sm:grid-cols-3">
         {
                Datas.map((data,index) => {
                    return (
            <div key={data} className="rounded-2xl mt-4 sm:ml-4" style={{ backgroundColor: COLORS[data.title] }}
>
                {/* <div className="">
                    <svg className="" height="46px" xmlns="http://www.w3.org/2000/svg"><path d="M33.227 1.495a1.87 1.87 0 0 1 2.646 0l1.323 1.323-27.78 27.78c-2.189 2.189-2.1 5.837.088 8.026l12.132 12.132a5.624 5.624 0 0 0 1.096 6.388 5.624 5.624 0 0 0 6.389 1.097l12.132 12.132c2.188 2.188 5.837 2.276 8.025.088l27.78-27.78 1.323 1.322a1.87 1.87 0 0 1 0 2.646L46.632 78.4a1.87 1.87 0 0 1-2.645 0L29.12 63.531a5.624 5.624 0 0 1-6.389-1.097l-5.291-5.291a5.624 5.624 0 0 1-1.097-6.388L1.478 35.89a1.87 1.87 0 0 1 0-2.646ZM59.74 22.783c1.948.27 3.83 1.117 5.325 2.612l10.583 10.583a1.87 1.87 0 0 1 0 2.646L46.544 67.727a1.87 1.87 0 0 1-2.646 0L30.67 54.498a1.872 1.872 0 0 0-2.646 0ZM49.19 6.875a1.87 1.87 0 0 1 2.647 0c4.489 4.489 5.877 8.98 6.178 12.342L27.67 49.56c.349-1.527 1.181-7.463-4.938-13.582a1.87 1.87 0 0 1 0-2.646Zm-7.936-2.646a1.87 1.87 0 0 1 2.645 0l1.323 1.323-25.134 25.134a5.619 5.619 0 0 0 0 7.938c4.005 4.005 4.2 7.696 4.043 9.335L12.15 35.978a1.87 1.87 0 0 1 0-2.646Z" fill="#F04667" fill-rule="nonzero"/></svg>
                </div> */}
                <div className="h-8 px-2 flex justify-end">
                    <img className='w-12 object-cover object-center'src={ICONS[data.title]}/>
                </div>
                
                <div className="bg-color1 rounded-xl text-white text-left px-6 sm:px-2 md:px-4 cursor-pointer bg-color">
                    <div className="flex justify-between py-2 sm:py-4 relative">
                        <p className="font-semibold">{data.title}</p>
                        <div className="relative flex justify-end">
                            <svg onClick={() => handleDropdownClick(data.title)} className="mt-2" width="24" height="5" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z" fill="#BBC0FF" fill-rule="evenodd"/></svg>
                            {openDropdown === data.title && (
                                <ul style={{ backgroundColor: COLORS[data.title]}} className="text-sm absolute mt-4 w-24 text-center rounded-lg border bg-slate-500">
                                    <li className="py-1 hover:bg-white hover:text-black rounded-md border-none ">
                                        <a  href="#">Update</a>
                                    </li>
                                    <li className="py-1 hover:bg-white hover:text-black rounded-md">
                                        <a  href="#">Delete</a>
                                    </li>
                                    <li className="py-1 hover:bg-white hover:text-black rounded-md">
                                        <a  href="#">More..</a>
                                    </li>
                                </ul>
                            )}
                        </div>
                    </div>
                    {selectmod == "daily" ?(
                        <div className="flex justify-between sm:flex-col pb-4 sm:pb-8  lg:pb-4">
                            <h1 className="sm:text-4xl font-light text-2xl">{data.timeframes.daily.current}hrs</h1>
                            <p className="text-xs lg:text-base text-gray-400 mt-2">Last day-{data.timeframes.daily.previous}hrs</p>
                        </div>
                    )
                    :selectmod === "weekly" ? (
                        <div className="flex justify-between sm:flex-col pb-4 sm:pb-6  lg:pb-4">
                            <h1 className="sm:text-4xl font-light text-2xl">{data.timeframes.weekly.current}hrs</h1>
                            <p className="text-xs lg:text-base text-gray-400 mt-2">Last week - {data.timeframes.weekly.previous}hrs</p>
                        </div> 
                   ):(
                    
                        <div className="flex justify-between sm:flex-col pb-4 sm:pb-6  lg:pb-4">
                            <h1 className="sm:text-4xl font-light text-2xl">{data.timeframes.monthly.current}hrs</h1>
                            <p className="text-xs lg:text-base text-gray-400 mt-2">Last month-{data.timeframes.monthly.previous}hrs</p>
                        </div> 
                    )}
                </div>
                    
            </div>  
            )}) }
        </div>
     );
}

export default Reportcard;