import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";
import ButtonComp from "../components/ButtonComp";
import adidas from "../assets/adidas.jpg";

export default function DetailProduct() {
    const { id } = useParams();
    const token = localStorage.getItem("token");

    const [product, setProduct] = useState(null);
    const [sizes, setSizes] = useState([]);
    const [selectedSize, setSelectedSize] = useState(null);

    async function getProductDetail() {
        const url = `http://localhost:3000/product/${id}`;

        try {
            const response = await fetch(url, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            if (!response.ok) {
                throw new Error(`Response status: ${response.status}`);
            }

            const result = await response.json();
            setProduct(result.data);

        } catch (error) {
            console.log(error.message);
        }
    }

    async function getProductSizes() {
        const url = `http://localhost:3000/productsize/product/${id}`;

        try {
            const response = await fetch(url, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            if (!response.ok) {
                throw new Error(`Response status: ${response.status}`);
            }

            const result = await response.json();
            setSizes(result.data || []);

        } catch (error) {
            console.log(error.message);
            setSizes([]);
        }
    }

    useEffect(() => {
        getProductDetail();
        getProductSizes();
    }, [id]);

    if (!product) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <NavBar />

            <div className="px-5 p-5">
                <div className="grid grid-cols-12 gap-10">

                    <div className="col-span-6 mt-20">
                        <img
                            src={product.image}
                            className="w-160 h-150 rounded-2xl"
                            alt={product.name}
                        />
                    </div>

                    <div className="col-span-6 mt-20">
                        <p className="text-[#D4F931] text-2xl font-inter">
                            {product.category || "RUNNING"}
                        </p>

                        <h1 className="font-oswald text-5xl">
                            {product.name}
                        </h1>

                        <p className="font-inter text-sm mt-5">
                            Rp. {product.price}
                        </p>

                        <p className="text-[#737373] text-justify mt-5">
                            {product.description}
                        </p>

                        <p className="font-inter text-sm mt-20">
                            Select Size (US)
                        </p>

                        <div className="grid grid-cols-12 gap-2 mt-3">
                            {sizes.map((item) => {
                                const outOfStock = item.stock <= 0;
                                const selected = selectedSize === item.id;

                                return (
                                    <div className="col-span-3" key={item.id}>
                                        <button
                                            onClick={() =>
                                                !outOfStock &&
                                                setSelectedSize(item.id)
                                            }
                                            disabled={outOfStock}
                                            className={`border p-2 w-full rounded font-inter
                                                ${
                                                    outOfStock
                                                        ? "border-gray-300 text-gray-400 cursor-not-allowed"
                                                        : selected
                                                        ? "border-[#737373] text-[#D4F931] bg-black"
                                                        : "border-[#737373]"
                                                }
                                            `}
                                        >
                                            {item.Size.sizeName}
                                        </button>
                                    </div>
                                );
                            })}
                        </div>

                        <div className="mt-20">
                            <ButtonComp
                                text={"Order Now"}
                                styling={
                                    "rounded-xl border border-[#E5E5E5] w-full font-inter p-3 text-sm bg-[#D4F931]"
                                }
                            />

                            <ButtonComp
                                text={"Add to Cart"}
                                styling={
                                    "rounded-xl border border-[#E5E5E5] w-full font-inter p-3 text-sm bg-white mt-3"
                                }
                            />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}