import { CiLocationOn, CiSettings } from "react-icons/ci";
import { IoPerson } from "react-icons/io5";
import { LuBox } from "react-icons/lu";
import { MdOutlinePayment } from "react-icons/md";
import { Link } from "react-router-dom";

export default function FilterComp(){
    return(
        <>
             <div>
                <aside className="fixed left-0 lg:flex flex-col h-screen border-r w-80 border-[#d1cece] bg-[#f3f3f3]">
                    <div className="px-4 mt-20">
                        <div className="font-headline-md text-headline-md text-primary text-2xl mb-1 font-inter">CATEGORIES</div>
                    </div>
                    <div className="px-5 mb-6 mt-1">
                        <p className="font-inter mb-3 border-s-5 text-[#D4F931] text-[16px] bg-[#f7fce4]  p-3 rounded-2xl">All Footwear</p>
                        <p className="font-inter text-1xl text-[#737373] mb-3">Running</p>
                        <p className="font-inter text-1xl text-[#737373] mb-3">BasketBall</p>
                        <p className="font-inter text-1xl text-[#737373] mb-3">Training</p>
                    </div>

                </aside>
            </div>
        </>
    )
}