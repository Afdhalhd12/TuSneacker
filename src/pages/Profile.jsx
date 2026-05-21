import { IoPerson } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { CiLocationOn } from "react-icons/ci";
import { LuBox, LuMail } from "react-icons/lu";
import { MdOutlinePayment } from "react-icons/md";
import { CiSettings } from "react-icons/ci";
import SideBar from "../components/SideBar";
import red from "../assets/red.jpg";
import ButtonComp from "../components/buttonComp";
export default function Profile() {
    return (
        <div>
            <div className="grid grid-cols-8 bg-[#f8f8f8] min-h-screen">
                <div className="col-span-2">
                    <SideBar />
                </div>
                <div className="col-span-6 mt-20">
                    <div className="p-10">
                        <div className="bg-white shadow rounded-2xl p-5 ">
                            <div className="flex justify-between items-center gap-5">
                                <div className="flex items-center gap-3">
                                    <img src={red} className="w-35 h-35 rounded-full" />
                                    <div className="">
                                        <p className="font-inter text-3xl mb-2">Afdhal Hadi Solahudin</p>
                                        <div className="flex gap-5">
                                            <p className="font-inter text-[#737373] flex gap-1 items-center"><LuMail size={15} />tester@gmail.com</p>
                                            <p className="font-inter text-[#737373] flex gap-1 items-center"><LuMail size={15} />085775647390</p>
                                        </div>
                                    </div>
                                </div>
                                <ButtonComp text={"Edit Profile"} styling={"rounded-full border border-[#E5E5E5] font-inter p-2 w-40  text-white text-sm bg-black"} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>

    )
}