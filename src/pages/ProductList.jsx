import { useEffect, useState } from "react";
import CardCommerce from "../components/CardCommerce";
import FilterComp from "../components/FilterComp";
import { Link } from "react-router-dom";

export default function ProductList() {
    const [products, setProducts] = useState([]);


    async function getProducts() {
        const url = `http://localhost:3000/product?limit=9&page=1`;
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`Response status: ${response.status}`);
            }

            const result = await response.json();
            setProducts(result.data.data);


        } catch (error) {
            console.log(error.message);
        }
    }

    useEffect(() => {
        getProducts();
    }, []);

    return (
        <div className="min-h-screen">
            <div className="grid grid-cols-8 ">
                <div className="col-span-2">
                    <FilterComp />
                </div>
                <div className="col-span-6 mt-20 p-5">
                    <h1 className="font-oswald text-4xl">
                        All <span className="text-[#737373]">Footwear</span>
                    </h1>
                    <p className="font-inter text-[#737373]">Precision engineered for the elite athlete.</p>
                    <div className="grid grid-cols-12 gap-5">
                        {
                            products.map((product) =>
                                <div className="col-span-4">
                                    <div className="mt-5 group">
                                        <div className="relative bg-white rounded-2xl border border-[#E5E5E5] overflow-hidden">

                                            <div className="flex justify-center ">
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

                                        <div>
                                            <p className="text-sm font-inter text-[#D4F931]">
                                                {product.category}
                                            </p>
                                        </div>

                                        <div>
                                            <p className="font-inter font-semibold">
                                                {product.name}
                                            </p>
                                            <p className="font-inter text-sm mt-1 text-[#737373]">
                                                Rp. {product.price}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            )
                        }

                    </div>
                </div>
            </div>
        </div>
    )
}