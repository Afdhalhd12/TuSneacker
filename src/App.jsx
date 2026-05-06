import coffee from "./assets/product.png";
import shadow from "./assets/shadow.png";
import beans from "./assets/beans.png";
import ButtonComp from "./components/ButtonComp";
import { MdOutlineHexagon } from "react-icons/md";
import { CiCoffeeCup } from "react-icons/ci";
import { useEffect, useRef } from "react";
import gsap from "gsap";



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
      y: 60
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
      ease: "sine.in"
    })

    tl.to(coffeeRef.current, {
      y: -10,
      duration: 2,
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true
    });


  }, []);

  return (
    <>
      <div className="mx-auto p-5">
        <nav className="w-full">
          <div className="flex items-center justify-between text-green-700">
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
              <ButtonComp text={"Login"} warna={"green"} />
            </div>
          </div>
        </nav>

        <div className="bg-[linear-gradient(191deg,#6B7F2A_0%,#8A9B3C_67%,#4F5F1F_90%)]  rounded-2xl">
          <div className="mx-auto p-5 mt-5">
            <div className="grid grid-cols-2 gap-4">

              <div>
                <div className="md:pt-5 text-5xl text-[#FBEEE5]">
                <MdOutlineHexagon />
                </div>
                <h1 ref={espressoRef} className="md:text-8xl text-3xl font-bold text-[#FBEEE5] leading-tight">ESPRESSO YOURSELF</h1>
                <div className="pt-4">
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
      </div>

    </>
  )
}