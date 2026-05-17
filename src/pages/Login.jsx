import { Link } from "react-router-dom";
import ButtonComp from "../components/ButtonComp";

export default function Login() {
    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-8">
                <div className="col-span-4">
                    <div className="bg-[url('./assets/login-gambar.png')] bg-position-[70%_80%] md:h-screen h-100">
                        
                    </div>
                </div>

                <div className="col-span-4">
                    <div className="text-center mt-10">
                        <div>
                            <h1 className="font-oswald text-3xl">ACCESS YOUR <span className="text-[#D4F931]">ACCOUNT</span></h1>
                            <p className="font-inter text-[#737373] mt-3">Welcome back to TuSneacker</p>
                            <form>
                                <div className="mx-auto px-20 mt-10">
                                    <input type="email" placeholder="Enter your email address..." className="rounded-full w-full md:h-15 px-5 outline-[#D4F931] hover:shadow-[#D4F931] border border-[#D4F931]" />
                                    <input type="password" placeholder="Enter your password..." className="rounded-full w-full md:h-15 px-5 outline-[#D4F931] hover:shadow-[#D4F931] border border-[#D4F931] mt-5" />

                                    <div className="mt-10">
                                        <ButtonComp text={"Login"} styling={"rounded-full border-[#D4F931] font-inter p-2 text-sm bg-black text-white w-full "} />
                                        <p className="font-inter text-[#737373] text-[12px] mt-3">Dont have an account? 
                                            <Link to="/signup">
                                                <a className="text-[#D4F931] cursor-pointer"> Sign Up</a>
                                            </Link>
                                        </p>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}