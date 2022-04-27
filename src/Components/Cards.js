import React from "react";

export default function Cards({ title, image, company }) {
  return (
    <div class="p-4 md:w-1/3">
      <div class=" rounded-xl border-2 shadow-cla-violate bg-gradient-to-r from-pink-50 to-red-50 overflow-hidden">
        <img
          class="lg:h-48 md:h-36 w-full object-cover object-center scale-110 transition-all duration-400 hover:scale-100"
          src={image}
          alt="blog"
        />
        <div class="p-6">
          <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
            {company}
          </h2>
          <h1 class="title-font text-lg font-medium text-gray-600 mb-3">
            {title}
          </h1>
          <p class="leading-relaxed mb-3">
            Photo booth fam kinfolk cold-pressed sriracha leggings jianbing
            microdosing tousled waistcoat.
          </p>
          <div class="flex items-center flex-wrap ">
            <button class="bg-gradient-to-r from-orange-300 to-green-100 hover:scale-105 drop-shadow-md shadow-cla-violate px-4 py-1 rounded-lg">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
