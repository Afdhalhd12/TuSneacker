import coffee from "./assets/product.png";
import shadow from "./assets/shadow.png";
import beans from "./assets/beans.png";
import black from "./assets/beast.jpg";
import latte from "./assets/latte.jpg";
import latte1 from "./assets/latte1.jpg";
import latte2 from "./assets/latte2.jpg";
import cafee from "./assets/cafee.jpg";
import italian from "./assets/italian.jpg";
import croisant from "./assets/bar.jpg";
import hot from "./assets/tuang.jpg";
import ButtonComp from "./components/ButtonComp";
import { MdOutlineHexagon } from "react-icons/md";
import { CiCoffeeCup } from "react-icons/ci";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);



export default function App() {
  const coffeeRef = useRef(null);
  const beansRef = useRef(null);
  const shadowRef = useRef(null);
  const espressoRef = useRef(null);



  useEffect(() => {
    const tl = gsap.timeline();

    gsap.set(espressoRef.current, {
      x: 600,
      opacity: 0,
      duration: 0.50
    })

    gsap.set(shadowRef.current, {
      scale: 0.20,
      duration: 0.10
    })

    gsap.set(coffeeRef.current, {
      opacity: 0,
      scale: 0.85,
      duration: 0.20,
      y: 50
    });

    gsap.set(beansRef.current, {
      opacity: 0,
      rotate: -20,
      scale: 0.1,
    });

    tl.to(shadowRef.current, {
      opacity: 1,
      scale: 1,
      duration: 0.85,
      y: 0
    });

    tl.to(coffeeRef.current, {
      opacity: 1,
      scale: 1,
      left: 10,
      rotate: 10,
      duration: 0.85,
      y: 0
    });

    tl.to(beansRef.current, {
      opacity: 1,
      rotate: 0,
      scale: 1,
      duration: 0.9,
      ease: "back.out(1.4)",
    });

    tl.to(espressoRef.current, {
      x: 0,
      duration: 1,
      opacity: 1,
      ease: "sine.in",
    })

    gsap.to(coffeeRef.current, {
      y: -2,
      duration: 3,
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true

    })

    gsap.set(".explore", {
      y: 200,
      opacity: 0,
      duration: 1
    })

    gsap.to(".explore", {
      y: 0,
      duration: 1,
      opacity: 1,
      scrollTrigger: {
        trigger: ".explore",
        start: "top 80%",
        toggleActions: "play none none none",
      }
    })


  }, []);

  return (
    <>
      <div className="mx-auto p-5">
        <nav className="w-full">
          <div className="flex items-center justify-between text-[#E8A736]">
            <div className="flex items-center gap-1">
              <CiCoffeeCup className="text-3xl" />
              <h1 className="font-bold text-lg">Tukopi</h1>
            </div>
            <div className="md:flex items-center gap-8">
              <a className="cursor-pointer ">Stories</a>
              <a className="cursor-pointer ">Coffee</a>
              <a className="cursor-pointer ">Equipment</a>
              <a className="cursor-pointer ">Store</a>
            </div>
            <div>
              <ButtonComp text={"Login"} warna={"yellow"} />
            </div>
          </div>
        </nav>

        <div className="bg-[#E8A736]  rounded-2xl">
          <div className="mx-auto p-5 mt-5">
            <div className="grid grid-cols-2 gap-4">

              <div>
                <div className="md:pt-5 text-5xl text-[#FBEEE5]">
                  <MdOutlineHexagon />
                </div>
                <h1 ref={espressoRef} className="md:text-8xl text-3xl font-bold text-[#FAEFD9] leading-tight">ESPRESSO YOURSELF</h1>
                <div className="pt-4 ps-3">
                  <ButtonComp text={"Order Now"} warna={"light"} />
                </div>
              </div >

              <div className="mx-auto grid place-items-center">
                <img ref={shadowRef} src={shadow} className="gambar-awal col-start-1 row-start-1 md:w-100 md:h-100  translate-x-1 translate-y-1 z-1" />
                <img ref={beansRef} src={beans} className="gambar-awal col-start-1 row-start-1 md:w-600 md:h-100  translate-x-1 -translate-y-5 z-2" />
                <img ref={coffeeRef} src={coffee} className="gambar-akhir col-start-1 row-start-1 w-1xl relative z-5  md:h-95 h-20" />
              </div>

            </div>

          </div>
        </div>
        {/* Coffee */}
        <div className="mt-10">
          <div className="flex justify-between">
            <h1 className="explore text-4xl font-bold text-[#E8A736] font-serif">EXPLORE OUR <span className="text-[#6e501d]">COLLECTION</span></h1>
            <h1 className="text-1xl font-bold text-[#E8A736] font-serif">View <span className="text-[#6e501d]">All</span></h1>
          </div>
          <div className="grid grid-cols-8 gap-4 mt-10">
            <div className="col-span-4 relative">
              <img src={black} className="rounded-2xl  h-105" />
              <p className="absolute inset-1 flex items-end text-white p-2 pb-10 text-1xl font-serif">Coffee Latte</p>
              <h3 className="absolute inset-0 flex items-end text-white font-bold p-3 text-3xl font-serif">Coffee Latte</h3>
            </div>
            <div className="col-span-2 relative">
              <img src={italian} className="rounded-2xl  h-105 w-80" />
              <p className="absolute inset-1 flex items-end text-white p-2 pb-10 text-1xl font-serif">Coffee Latte</p>
              <h3 className="absolute inset-0 flex items-end text-white font-bold p-3 text-3xl font-serif">Coffee Latte</h3>
            </div>
            <div className="col-span-2">
              <div className="relative">
                <img src={hot} className="rounded-2xl  h-50 w-75" />
                <p className="absolute inset-1 flex items-end text-white p-2 pb-10 text-1xl font-serif">Coffee Latte</p>
                <h3 className="absolute inset-0 flex items-end text-white font-bold p-3 text-3xl font-serif">Coffee Latte</h3>
              </div>
              <div className="relative">
                <img src={croisant} className="rounded-2xl  h-50 w-75 mt-5" />
                <p className="absolute inset-1 flex items-end text-white p-2 pb-10 text-1xl font-serif">Coffee Latte</p>
                <h3 className="absolute inset-0 flex items-end text-white font-bold p-3 text-3xl font-serif">Coffee Latte</h3>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10">
          <h1 className="explore text-4xl font-bold text-[#E8A736] font-serif">EXPLORE OUR <span className="text-[#6e501d]">COLLECTION</span></h1>
          <div className="mt-5">
            <div className="grid grid-cols-8 gap-5">
              <div className="col-span-4">

                <div className="mt-5">
                  <div className="shadow-2xl bg-[#eeeeec] rounded-2xl">
                    <div className="grid grid-cols-8">
                      <div className="col-span-2">
                        <div className="p-3">
                          <img src={latte} className="rounded-2xl h-25 w-25" />
                        </div>
                      </div>
                      <div className="col-span-6">
                        <div className="p-3">
                          <h1 className="font-bold text-3xl text-black font-serif">Latte</h1>
                          <p className="text-gray-700 font-serif">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, nam magni doloremque sequi doloribus placeat eveniet, asperiores odit minus deleniti</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-5">
                  <div className="shadow-2xl bg-[#E8A736] rounded-2xl">
                    <div className="grid grid-cols-8">
                      <div className="col-span-2">
                        <div className="p-3">
                          <img src={latte} className="rounded-2xl h-25 w-25" />
                        </div>
                      </div>
                      <div className="col-span-6">
                        <div className="p-3">
                          <h1 className="font-bold text-3xl text-white font-serif">Latte</h1>
                          <p className="text-white font-serif">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, nam magni doloremque sequi doloribus placeat eveniet, asperiores odit minus deleniti</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-5">
                  <div className="shadow-2xl bg-black rounded-2xl">
                    <div className="grid grid-cols-8">
                      <div className="col-span-2">
                        <div className="p-3">
                          <img src={latte} className="rounded-2xl h-25 w-25" />
                        </div>
                      </div>
                      <div className="col-span-6">
                        <div className="p-3">
                          <h1 className="font-bold text-3xl text-white font-serif">Latte</h1>
                          <p className="text-white font-serif">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, nam magni doloremque sequi doloribus placeat eveniet, asperiores odit minus deleniti</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
              </div>

              <div className="col-span-4">
              <div className="mt-5">
                <img src={black} className="rounded-2xl w-160 h-109"/>
              </div>
              </div>
            </div>
          </div>
        </div>

      </div>

    </>
  )
}