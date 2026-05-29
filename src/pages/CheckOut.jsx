import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import api from "../utils/API";

export default function CheckOut() {
    const [addresses, setAddresses] = useState([]);
    const [payments, setPayments] = useState([]);

    const [selectedAddress, setSelectedAddress] = useState(null);
    const [selectedPayment, setSelectedPayment] = useState(null);

    const { state } = useLocation();
    const totalPrice = state.product.price * state.qty;
    const price = state.product.price

    async function getAddress() {
        try {
            const response = await api.get("/address");

            setAddresses(response.data.data);
        } catch (error) {
            console.log(error.response?.data || error.message);
        }
    };

    async function getPayments() {
        try {
            const response = await api.get("/payment");

            setPayments(response.data.data);
        } catch (error) {
            console.log(error.response?.data || error.message);
        }
    };

    async function handleOrder() {
        try {
            if (!selectedAddress) {
                alert("Pilih address");
                return;
            }

            if (!selectedPayment) {
                alert("Pilih payment");
                return;
            }

            const data = {
                address_id: selectedAddress,
                payment_id: selectedPayment,
                items: [
                    {
                        product_size_id: state.product_size_id,
                        qty: state.qty
                    }
                ]
            };

            const response = await api.post(
                "/order",
                data
            );

            alert("Order berhasil");

        } catch (error) {
            console.log(
                error.response?.data || error.message
            );
        }
    }

    useEffect(() => {
        getAddress();
        getPayments();
    }, []);

    return (
        <div className="min-h-screen bg-gray-50 px-6 py-8 font-inter">

            <div className="max-w-5xl mx-auto">

                <div className="flex items-baseline gap-3 mt-10 mb-8">
                    <h1 className="font-oswald text-4xl font-normal tracking-tight text-gray-900">
                        Checkout
                    </h1>
                    <span className="text-sm text-gray-400">2 items in your bag</span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 items-start">


                    <div className="lg:col-span-2 flex flex-col gap-5">


                        <div className="bg-white border border-gray-100 rounded-2xl p-6">
                            <p className="font-oswald text-xs font-medium tracking-widest uppercase text-gray-400 mb-4">
                                Delivery address
                            </p>
                            <div className="flex flex-col gap-3">
                                {
                                    addresses.map((address) => (
                                        <div key={address.id} onClick={() => setSelectedAddress(address.id)} className={selectedAddress === address.id ? "flex items-start gap-3 p-4 rounded-xl border border-gray-900 bg-gray-50 cursor-pointer" : "flex items-start gap-3 p-4 rounded-xl border border-gray-100 hover:border-gray-300 cursor-pointer"}>
                                            {
                                                selectedAddress === address.id ? <div className="mt-0.5 w-4 h-4 rounded-full border-2 border-gray-900 flex items-center justify-center flex-shrink-0">
                                                    <div className="w-2 h-2 rounded-full bg-gray-900" />
                                                </div> : <div className="mt-0.5 w-4 h-4 rounded-full border-2 border-gray-300 flex items-center justify-center flex-shrink-0" />
                                            }
                                            <div className="flex-1">
                                                <p className="text-sm font-medium text-gray-900">{address.User.name}</p>
                                                <p className="text-sm text-gray-500 mt-0.5">{address.addressLine}</p>
                                                <p className="text-sm text-gray-500 mt-0.5">{address.city}, {address.postalCode}</p>
                                            </div>
                                            {
                                                selectedAddress === address.id ? <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-green-50 text-green-700">
                                                    Selected
                                                </span> : <span></span>
                                            }

                                        </div>
                                    ))
                                }
                            </div>
                        </div>


                        <div className="bg-white border border-gray-100 rounded-2xl p-6">
                            <p className="font-oswald text-xs font-medium tracking-widest uppercase text-gray-400 mb-4">
                                Payment method
                            </p>
                            <div className="grid grid-cols-2 gap-3">

                                {
                                    payments.map((payment) => (
                                        <div key={payment.id} onClick={() => setSelectedPayment(payment.id)} className={`flex flex-col gap-2 p-4 rounded-xl ${selectedPayment === payment.id ? "border border-gray-00 bg-gray-50 cursor-pointer" : "border border-gray-100 hover:border-gray-300 cursor-pointer"} `}>
                                            <div className="w-9 h-9 rounded-lg bg-gray-100 flex items-center justify-center text-lg">🏦</div>
                                            <div>
                                                <p className="text-sm font-medium text-gray-900">{payment.paymentName}</p>
                                                <p className="text-xs text-gray-400 mt-0.5">Manual via ATM or app</p>
                                            </div>
                                        </div>
                                    ))
                                }



                                {/* <div className="flex flex-col gap-2 p-4 rounded-xl border border-gray-100 hover:border-gray-300 cursor-pointer">
                                    <div className="w-9 h-9 rounded-lg bg-gray-100 flex items-center justify-center text-lg">👛</div>
                                    <div>
                                        <p className="text-sm font-medium text-gray-900">E-Wallet</p>
                                        <p className="text-xs text-gray-400 mt-0.5">GoPay, OVO, Dana</p>
                                    </div>
                                </div> */}

                            </div>
                        </div>

                    </div>


                    <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden sticky top-6">


                        <div className="px-6 pt-6 pb-4 border-b border-gray-100">
                            <p className="font-oswald text-xs font-medium tracking-widest uppercase text-gray-400">
                                Order summary
                            </p>
                        </div>


                        <div className="px-6 py-2">
                            <div className="flex items-center gap-3 py-3 border-b border-gray-100">
                                <img src={state.product.image} className="w-20 h-15" />
                                <div className="flex-1">
                                    <p className="text-sm font-medium text-gray-900">{state.product.name}</p>
                                    <p className="text-xs text-gray-400">Qty {state.qty}</p>
                                </div>
                                <p className="text-sm font-medium text-gray-900">Rp {price.toLocaleString("id-ID")}</p>
                            </div>
                        </div>


                        <div className="px-6 pt-4 pb-6 bg-gray-50">
                            <div className="flex justify-between items-baseline mb-5">
                                <span className="text-sm text-gray-500">Total</span>
                                <span className="font-oswald text-2xl text-gray-900 tracking-tight">Rp {totalPrice.toLocaleString("id-ID")}</span>
                            </div>
                            <Link to="/profile">
                            <button onClick={handleOrder} className="w-full py-3.5 bg-gray-900 text-white text-sm font-medium rounded-xl flex items-center justify-center gap-2 hover:opacity-80 active:scale-[0.99] transition-all">
                                Order
                            </button>
                            </Link>

                            <p className="text-center text-xs text-gray-400 mt-3">
                                🛡️ Secure & encrypted checkout
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}