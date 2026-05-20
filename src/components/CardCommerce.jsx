export default function CardCommerce({ products }) {
    return (
        <div className="grid grid-cols-12 gap-4 mt-10">
            {
                products.map((product = []) => (
                    <div className="col-span-4">
                        <div className="bg-white rounded-2xl border border-[#E5E5E5]">
                            <div className="flex justify-center">
                                <img src={product.image} className="md:w-100 md:h-80" />
                            </div>
                        </div>
                        <div className="flex justify-between mt-2">
                            <p className="font-inter font-semibold">{product.name}</p>
                            <p className="font-inter font-bold">{product.price}</p>
                        </div>
                        <div>

                            <p className="text-sm font-inter">{product.category}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}