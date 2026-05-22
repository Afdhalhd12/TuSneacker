import SideBar from "../components/SideBar";
import red from "../assets/red.jpg";
import ButtonComp from "../components/buttonComp";

export default function EditProfile() {
    return (
        <div className="bg-[#f8f8f8] min-h-screen">
            <div className="grid grid-cols-8 ">
                <div className="col-span-2">
                    <SideBar />
                </div>
                <div className="col-span-6">
                    <div className="p-10 mt-10">
                        <form>
                            <div className="bg-white rounded-2xl w-full shadow p-5">
                                <div className="flex items-center gap-3">
                                    <img src={red} className="w-35 h-35 rounded-full" />
                                    <div>
                                        <ButtonComp text={"Change Photo"} styling={"rounded-2xl border border-[#E5E5E5] font-inter text-3xl text-white w-50 font-bold p-2 text-sm bg-black"} />
                                        <p className="text-[12px] text-[#737373] mt-2 ms-2 font-inter">JPG, or PNG. Max size of 2MB.</p>
                                    </div>
                                </div>
                                <hr className="mt-5 text-[#737373]" />
                                <div className="mt-5">
                                    <p className="font-inter text-[#737373]">Personal Information</p>
                                </div>
                                <div>
                                    <div className="mt-2">
                                        <label className="font-inter">Your Name</label>
                                        <input type="text" placeholder="Type Your Name" className="w-full font-inter bg-[#f3f3f3] rounded-xl p-3 border border-[#737373]"></input>
                                    </div>
                                    <div className="mt-5">
                                        <div className="grid grid-cols-4 gap-5">
                                            <div className="col-span-2">
                                                <div>
                                                    <label className="font-inter">Email Address</label>
                                                    <input type="email" placeholder="Type Your Name" className="w-full font-inter bg-[#f3f3f3] rounded-xl p-3 border border-[#737373]"></input>
                                                </div>
                                            </div>
                                            <div className="col-span-2">
                                                <div>
                                                    <label className="font-inter">Password</label>
                                                    <input type="password" placeholder="Type Your Name" className="w-full font-inter bg-[#f3f3f3] rounded-xl p-3 border border-[#737373]"></input>
                                                </div>
                                            </div>
                                        </div>
                                        <hr className="mt-10 text-[#737373]" />
                                        <div className="flex justify-center gap-2 mt-5">
                                            <ButtonComp text={"Save Changes"} styling={"rounded-xl border border-[#E5E5E5] font-inter text-3xl text-white w-100 font-bold p-2 text-sm bg-black"} />
                                            <ButtonComp text={"Cancel"} styling={"rounded-xl border border-[#737373] font-inter text-3xl text-black w-100 font-bold p-2 text-sm bg-[#f8f8f8]"} />
                                        </div>


                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}