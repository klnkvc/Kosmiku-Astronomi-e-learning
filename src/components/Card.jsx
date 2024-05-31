import React from "react";
import Button from "./Button";

export default function Card({ image, category, title, description, descClass, type, link }) {
  return (
    <>
      {type === "materi" ? (
        <div className="border border-white rounded-[32px] backdrop-opacity-10 backdrop-invert bg-category-5/80 p-4 duration-200 hover:scale-105">
          <div className="relative">
            <div className="flex justify-center">
              <div className="rounded-[32px] w-72 h-40 lg:h-72 bg-cover bg-center" style={{ backgroundImage: `url(${image})` }}></div>
            </div>
            {category === "Astronomi" ? (
              <div
                className="absolute top-0 left-1/2 ml-[-64px] lg:ml-[-80px] xl:ml-[-96px]  w-32 lg:w-40 xl:w-48 h-10
               lg:h-[50px] bg-gradient-to-r from-category-1 to-category-2 rounded-b-[53px]"
              >
                <p className="text-white text-center py-2 text-sm lg:text-xl italic">{category}</p>
              </div>
            ) : (
              <div
                className="absolute top-0 left-1/2 ml-[-64px] lg:ml-[-80px] xl:ml-[-96px]  w-32 lg:w-40 xl:w-48 h-10
               lg:h-[50px] bg-gradient-to-r from-category-3 to-category-4 rounded-b-[53px]"
              >
                <p className="text-white text-center py-2 text-sm lg:text-xl italic">{category}</p>
              </div>
            )}

            <h3 className="text-lg xl:text-2xl font-bold text-left mt-2 lg:mt-8 line-clamp-2">{title}</h3>
            <p className="text-sm lg:text-base text-left mt-2 mb-6 lg:mb-8 line-clamp-4">{description}</p>
            <div className="relative h-full"></div>
            <Button className={"self-stretch flex flex-col justify-center items-center text-center  left-0 right-0 bottom-0"} children={"Baca"} link={link} />
            <div className=""></div>
          </div>
        </div>
      ) : (
        <div className="w-full border border-white rounded-[32px] bg-white/10 p-4 duration-200 hover:scale-105 backdrop-blur-sm">
          <div className="flex justify-center">
            <img className="h-[135px]" src={image} alt="" />
          </div>
          <p className="text-base font-bold text-center mt-3">{title}</p>
          <p className={`text-base font-medium text-center mt-1 ${descClass}`}>{description}</p>
        </div>
      )}
    </>
  );
}
