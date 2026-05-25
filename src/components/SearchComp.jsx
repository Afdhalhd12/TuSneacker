import { CiSearch } from "react-icons/ci";

export default function SearchComp() {
    return (
        <div className="relative flex-1">
            <CiSearch className="absolute top-4 left-4" />
            <input
                type="text"
                placeholder="Search products..."
                className="w-full pl-11 pr-4 py-3 bg-white border border-gray-200 rounded-2xl text-[13px] text-gray-700 placeholder-gray-400 focus:outline-none focus:border-[#D4F931] focus:ring-2 focus:ring-[#D4F931]/20 transition-all"
            />
        </div>
    )
}