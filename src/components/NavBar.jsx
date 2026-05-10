import { Link } from "react-router-dom";
import ButtonComp from "./buttonComp";

export default function NavBar() {
    return (
        <>
            <div className="px-10">
                <nav className="w-full">
                    <div className="flex items-center justify-between text-[#0A0A0A]">

                        <h1 className="font-bold text-3xl">TuSneaker<span className="text-[#D4F931]">.</span></h1>

                        <div className="md:flex items-center gap-8">
                            <a className="cursor-pointer text-[#0A0A0A] font-inter ">Stories</a>
                            <a className="cursor-pointer text-[#0A0A0A] font-inter ">Coffee</a>
                            <a className="cursor-pointer text-[#0A0A0A] font-inter">Equipment</a>
                            <a className="cursor-pointer text-[#0A0A0A] font-inter">Store</a>
                        </div>
                        <div>
                            <Link to="/login">
                                <ButtonComp text={"Login"} styling={"rounded-full border border-[#E5E5E5] font-inter md:w-20 p-2 text-sm bg-[#D4F931]"} />
                            </Link>
                        </div>
                    </div>
                </nav>
            </div>

        </>
    )
}