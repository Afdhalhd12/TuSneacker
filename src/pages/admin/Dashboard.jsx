import AdminBar from "../../components/AdminBar";
import SideBar from "../../components/SideBar";

export default function Dashboard() {
    return (
        <>
            <div className="bg-[#f8f8f8] min-h-screen">

                <div className="grid grid-cols-8 ">
                    <div className="col-span-2">
                      <AdminBar/>
                    </div>

                    <div className="col-span-6 mt-20">
                        
                    </div>


                </div>




            </div>
        </>
    )
}