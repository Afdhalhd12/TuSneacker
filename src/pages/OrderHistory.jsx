import SideBar from "../components/SideBar";
import red from "../assets/red.jpg";
import { LuMail } from "react-icons/lu";
import ButtonComp from "../components/buttonComp";
export default function OrderHistory() {
    return (
        <div className="bg-[#f8f8f8] min-h-screen">
            <div className="grid grid-cols-8 ">
                <div className="col-span-2">
                    <SideBar />
                </div>
                <div className="col-span-6">
                    <div className="p-10 mt-10">
                        <p className="font-oswald text-2xl">Order History</p>
                        <div className="flex mt-2 gap-2">
                            <ButtonComp text={"All"} styling={"rounded-full border border-[#E5E5E5] font-inter text-white w-15 font-bold p-2 text-sm bg-black"} />
                            <ButtonComp text={"Pending"} styling={"rounded-full border border-[#E5E5E5] font-inter text-[#787878] max-w-full p-2 text-sm bg-[#f3f3f3]"} />
                            <ButtonComp text={"Processed"} styling={"rounded-full border border-[#E5E5E5] font-inter text-[#787878] max-w-full p-2 text-sm bg-[#f3f3f3]"} />
                            <ButtonComp text={"Shipped"} styling={"rounded-full border border-[#E5E5E5] font-inter text-[#787878] max-w-full p-2 text-sm bg-[#f3f3f3]"} />
                            <ButtonComp text={"Completed"} styling={"rounded-full border border-[#E5E5E5] font-inter text-[#787878] max-w-full p-2 text-sm bg-[#f3f3f3]"} />
                        </div>

                        <div className="bg-white shadow rounded-2xl p-5 mt-5 ">
                            <div className="flex justify-between items-center gap-5 ">
                                <div className="flex items-center gap-5">
                                    <img src={red} className="w-35 h-35 rounded-2xl" />
                                    <div className="">
                                        <p className="font-inter text-[14px] text-[#737373]">#INV/2026/1023</p>
                                        <p className="font-inter text-2xl font-bold mb-2">Nike Air Well</p>
                                        <div className="flex gap-5">
                                            <div>
                                                <p className="font-inter text-[12px] text-[#737373]">Size</p>
                                                <p className="font-inter text-1xl ">42</p>
                                            </div>
                                            <div>
                                                <p className="font-inter text-[12px] text-[#737373]">Price</p>
                                                <p className="font-inter text-1xl ">Rp. 500.000</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="">
                                    <ButtonComp text={"Lihat Detail"} styling={"rounded-full border border-[#E5E5E5] font-inter p-2 w-40  text-white text-sm bg-black"} />
                                    <div className="bg-blue-900/50 rounded-full shadow p-2 mt-2">
                                        <p className="font-inter text-blue-900 font-medium text-center"><span className="text-[14px] text-blue-900/50">●</span> Shipped</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}