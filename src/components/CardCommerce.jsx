export default function CardCommerce({foto}) {
    return (
        <>
            <div className="bg-white rounded-2xl border border-[#E5E5E5]">
                <div className="flex justify-center">
                    <img src={foto} className="md:w-100 md:h-80" />
                </div>
            </div>
            <div className="flex justify-between mt-2">
                <p className="font-inter font-semibold">Air Force</p>
                <p className="font-inter font-bold">$2.00</p>
            </div>
            <p className="text-sm font-inter">Man's Sportswear</p>
        </>
    )
}