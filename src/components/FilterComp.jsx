import { useState } from "react";

export default function FilterComp({ brands, onBrandChange }) {
  const [selectedBrand, setSelectedBrand] = useState("");
  return (
    <aside className="fixed left-0 flex flex-col h-screen w-72 bg-white border-r border-gray-100 overflow-y-auto shadow-sm">

      {/* Header */}
      <div className="px-6 pt-20 pb-5 border-b border-gray-100">
        <p className="text-[11px] font-semibold text-gray-400 uppercase tracking-[0.15em] mb-1">Shop By</p>
        <h2 className="text-xl font-bold text-gray-900">Filters</h2>
      </div>

      {/* Categories */}
      <div className="px-4 py-5 border-b border-gray-100">
        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.15em] px-2 mb-3">Category</p>
        <div className="flex flex-col gap-1">
          <button className="flex items-center justify-between px-3 py-2.5 rounded-xl bg-[#D4F931] group transition-all">
            <span className="text-[13px] font-semibold text-[#3a5000]">All Footwear</span>
            <span className="text-[11px] font-semibold bg-[#3a5000] text-[#D4F931] px-2 py-0.5 rounded-full">128</span>
          </button>
          <button className="flex items-center justify-between px-3 py-2.5 rounded-xl hover:bg-gray-50 group transition-all">
            <span className="text-[13px] text-gray-500 group-hover:text-gray-800 transition-colors">Running</span>
            <span className="text-[11px] text-gray-400 px-2 py-0.5 rounded-full bg-gray-100">48</span>
          </button>
          <button className="flex items-center justify-between px-3 py-2.5 rounded-xl hover:bg-gray-50 group transition-all">
            <span className="text-[13px] text-gray-500 group-hover:text-gray-800 transition-colors">Basketball</span>
            <span className="text-[11px] text-gray-400 px-2 py-0.5 rounded-full bg-gray-100">32</span>
          </button>
          <button className="flex items-center justify-between px-3 py-2.5 rounded-xl hover:bg-gray-50 group transition-all">
            <span className="text-[13px] text-gray-500 group-hover:text-gray-800 transition-colors">Training</span>
            <span className="text-[11px] text-gray-400 px-2 py-0.5 rounded-full bg-gray-100">27</span>
          </button>
          <button className="flex items-center justify-between px-3 py-2.5 rounded-xl hover:bg-gray-50 group transition-all">
            <span className="text-[13px] text-gray-500 group-hover:text-gray-800 transition-colors">Lifestyle</span>
            <span className="text-[11px] text-gray-400 px-2 py-0.5 rounded-full bg-gray-100">21</span>
          </button>
        </div>
      </div>

      {/* Harga */}
      <div className="px-4 py-5 border-b border-gray-100">
        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.15em] px-2 mb-4">Price Range</p>
        <div className="px-2">
          <input type="range" min="0" max="5000000" step="50000" defaultValue="2500000"
            className="w-full accent-[#8bc400] h-1" />
          <div className="flex gap-2 mt-4">
            <div className="flex-1">
              <p className="text-[10px] text-gray-400 mb-1.5 font-medium">MIN</p>
              <input className="w-full border border-gray-200 rounded-xl px-3 py-2 text-[13px] text-gray-700 bg-gray-50 focus:outline-none focus:border-[#D4F931] transition-colors" placeholder="Rp 0" />
            </div>
            <div className="flex items-end pb-0.5">
              <div className="w-3 h-[1px] bg-gray-300 mb-3"></div>
            </div>
            <div className="flex-1">
              <p className="text-[10px] text-gray-400 mb-1.5 font-medium">MAX</p>
              <input className="w-full border border-gray-200 rounded-xl px-3 py-2 text-[13px] text-gray-700 bg-gray-50 focus:outline-none focus:border-[#D4F931] transition-colors" placeholder="Rp 5.000.000" />
            </div>
          </div>
        </div>
      </div>

      {/* Brand */}
      <div className="flex flex-col gap-0.5">
        {brands.map((item) => (
          <label
            key={item.brand}
            className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-gray-50 cursor-pointer group transition-all"
          >
            <div
              className={
                "w-4 h-4 rounded border-2 flex items-center justify-center flex-shrink-0 transition-colors " +
                (selectedBrand === item.brand
                  ? "bg-[#8bc400] border-[#8bc400]"
                  : "border-gray-300")
              }
            >
              <input
                type="checkbox"
                checked={selectedBrand === item.brand}
                className="hidden"
                onChange={() => {
                  if (selectedBrand === item.brand) {
                    setSelectedBrand("");
                    onBrandChange("");
                  } else {
                    setSelectedBrand(item.brand);
                    onBrandChange(item.brand);
                  }
                }}
              />

              {selectedBrand === item.brand && (
                <span className="text-white text-[10px]">✓</span>
              )}
            </div>

            <span className="text-[13px] text-gray-600 group-hover:text-gray-900 transition-colors flex-1">
              {item.brand}
            </span>
          </label>
        ))}
      </div>

      {/* Ukuran */}
      <div className="px-4 py-5">
        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.15em] px-2 mb-3">Size (EU)</p>
        <div className="flex flex-wrap gap-2 px-2">
          <button className="w-12 h-10 rounded-xl text-[13px] font-medium bg-gray-50 border border-gray-200 text-gray-500 hover:border-[#D4F931] hover:bg-[#f7fce4] hover:text-[#3a5000] transition-all">38</button>
          <button className="w-12 h-10 rounded-xl text-[13px] font-medium bg-gray-50 border border-gray-200 text-gray-500 hover:border-[#D4F931] hover:bg-[#f7fce4] hover:text-[#3a5000] transition-all">39</button>
          <button className="w-12 h-10 rounded-xl text-[13px] font-medium bg-gray-50 border border-gray-200 text-gray-500 hover:border-[#D4F931] hover:bg-[#f7fce4] hover:text-[#3a5000] transition-all">40</button>
          <button className="w-12 h-10 rounded-xl text-[13px] font-medium bg-gray-50 border border-gray-200 text-gray-500 hover:border-[#D4F931] hover:bg-[#f7fce4] hover:text-[#3a5000] transition-all">41</button>
          <button className="w-12 h-10 rounded-xl text-[13px] font-medium bg-gray-50 border border-gray-200 text-gray-500 hover:border-[#D4F931] hover:bg-[#f7fce4] hover:text-[#3a5000] transition-all">42</button>
          <button className="w-12 h-10 rounded-xl text-[13px] font-medium bg-gray-50 border border-gray-200 text-gray-500 hover:border-[#D4F931] hover:bg-[#f7fce4] hover:text-[#3a5000] transition-all">43</button>
          <button className="w-12 h-10 rounded-xl text-[13px] font-medium bg-gray-50 border border-gray-200 text-gray-500 hover:border-[#D4F931] hover:bg-[#f7fce4] hover:text-[#3a5000] transition-all">44</button>
          <button className="w-12 h-10 rounded-xl text-[13px] font-medium bg-gray-50 border border-gray-200 text-gray-500 hover:border-[#D4F931] hover:bg-[#f7fce4] hover:text-[#3a5000] transition-all">45</button>
        </div>
      </div>

      {/* Apply Button */}
      <div className="px-4 py-4 mt-auto border-t border-gray-100 bg-white sticky bottom-0">
        <button className="w-full bg-[#D4F931] text-[#3a5000] font-bold text-[14px] py-3 rounded-2xl hover:bg-[#c2e020] active:scale-95 transition-all shadow-sm">
          Apply Filters
        </button>
      </div>

    </aside>
  );
}