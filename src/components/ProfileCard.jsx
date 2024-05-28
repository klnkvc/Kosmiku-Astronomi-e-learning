import React from "react";

export default function ProfileCard({ image, category, title }) {
    return (
        <div id="contents" className="flex">
            {" "}
            <div className="border w-72 border-white rounded-[32px] backdrop-opacity-10 backdrop-invert bg-white/10 p-4  cursor-pointer">
                <div className="relative">
                    <div className="flex justify-center">
                        <div
                            className="rounded-[32px] w-60 h-60 bg-cover bg-center"
                            style={{
                                backgroundImage: `url(${image})`,
                            }}
                        ></div>
                    </div>
                    {category === "Astronomi" ? (
                        <div className="absolute top-0 left-1/2 ml-[-80px] w-40 h-[40px] bg-gradient-to-r from-category-1 to-category-2 rounded-b-[53px]">
                            <p className="text-white text-center py-2 text-md italic">
                                {category}
                            </p>
                        </div>
                    ) : (
                        <div className="absolute  w-32 xl:w-40 h-[40px] bg-gradient-to-r from-category-3 to-category-4 rounded-b-[53px]">
                            <p className="text-white text-center py-2 text-md italic">
                                {category}
                            </p>
                        </div>
                    )}
                    <h3 className="text-xl text-white font-bold text-left mt-4 line-clamp-2 max-w-full">
                        {title}
                    </h3>
                </div>
            </div>
        </div>
    );
}
