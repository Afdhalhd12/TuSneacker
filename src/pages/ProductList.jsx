import { useEffect, useState } from "react";
import FilterComp from "../components/FilterComp";
import { Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import SearchComp from "../components/SearchComp";
import PaginationComp from "../components/PaginationComp";

export default function ProductList() {
    const [products, setProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalProducts, setTotalProducts] = useState();

    async function getTotalProducts() {
    const response = await fetch("https://api.escuelajs.co/api/v1/products");
    const result = await response.json();
    setTotalProducts(result.length);
}

    const onPageChange = (page) => {
        setCurrentPage(page);
        // tidak mengitim param url, karena uda di url = fucntion sudah ada current page dari set
        getProducts();
    }

    async function getProducts(url = "http://localhost:3000/product" + "?limit=9" + "&page=" + currentPage) {
    
        try {
            const response = await fetch(url);
            if (!response.ok) throw new Error(`Response status: ${response.status}`);
            const result = await response.json();
            setProducts(result.data.data);
        } catch (error) {
            console.log(error.message);
        }
    }

    useEffect(() => {
        getProducts();
        getTotalProducts();
    }, [onPageChange]);

    return (
        <div className="min-h-screen">
            <div className="grid grid-cols-8">
                <div className="col-span-2">
                    <FilterComp />
                </div>

                <div className="col-span-6 mt-20 p-8">

                   
                    <div className="mb-6">
                        <h1 className="font-oswald text-4xl">
                            All <span className="text-[#737373]">Footwear</span>
                        </h1>
                        <p className="font-inter text-[#737373] mt-1">Precision engineered for the elite athlete.</p>
                    </div>

                   
                    <div className="flex items-center gap-3 mb-8">
                        <SearchComp/>
                        <select className="px-4 py-3 bg-white border border-gray-200 rounded-2xl text-[13px] text-gray-600 focus:outline-none focus:border-[#D4F931] transition-all cursor-pointer appearance-none pr-8 relative">
                            <option>Most Popular</option>
                            <option>Newest</option>
                            <option>Price: Low to High</option>
                            <option>Price: High to Low</option>
                        </select>
                    </div>

                   
                    <p className="text-[12px] text-gray-400 font-inter mb-4">Showing <span className="text-gray-600 font-semibold">{totalProducts}</span> results</p>

                    <div className="grid grid-cols-12 gap-5">
                        {products.map((product) => (
                            <div key={product.id} className="col-span-4">
                                <div className="mt-2 group">
                                    <div className="relative bg-white rounded-2xl border border-[#E5E5E5] overflow-hidden">
                                        <div className="flex justify-center">
                                            <img src={product.image} alt={product.name} />
                                        </div>
                                        <div className="absolute inset-0 flex justify-evenly items-baseline-last p-3 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            <Link to={`/product/${product.id}`}>
                                                <button className="font-inter text-sm w-full px-4 py-2 bg-[#D4F931] rounded-xl font-semibold hover:scale-105 transition-transform">
                                                    QUICK ADD
                                                </button>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="mt-2">
                                        <p className="text-sm font-inter text-[#D4F931]">{product.category}</p>
                                    </div>
                                    <div>
                                        <p className="font-inter font-semibold">{product.name}</p>
                                        <p className="font-inter text-sm mt-1 text-[#737373]">Rp. {product.price}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div>
                    <PaginationComp currentPage={currentPage} onPageChange={onPageChange}/>
                    </div>

                    

                </div>
            </div>
        </div>
    );
}