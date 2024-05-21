import React from "react";
import BasedLayout from "../../layout/BasedLayout";
import Profile from "../../assets/Profile/padukajavier.png";
import deco from "../../assets/decoration/deco1.png";
import logo from "../../assets/decoration/kosmiku.png";


export default function index({ image, category, title, description, descClass, type, link }) {
    return (
        <BasedLayout>
            <section
                id="Profile"
                className="h-[70vh] flex flex-col border-solid border-based-1 rounded-lg border-4 mx-20 relative p-10 bg-category-5"
            >
                <div id="upper" className="w-full flex gap-3">
                    <img
                        id="Avatar"
                        src={Profile}
                        className="max-w-40 max-h-40"
                    ></img>
                    <div className="flex flex-col">
                        <h1 className="text-3xl font-bold text-left mt-8 line-clamp-2 text-white">
                            Paduka Javier
                        </h1>
                        <p className="text-white">masihmewing2024@gmail.com</p>
                    </div>
                </div>

                <div id="content" className="flex flex-col">
                    <div id="navigation" className="flex w-full">
                        <div
                            id="koleksi"
                            className="cursor-pointer flex w-1/2 items-center justify-center border-b-4 border-solid border-based-1 p-1"
                        >
                            <p className="text-2xl font-bold text-left line-clamp-2 text-based-1">
                                Koleksi
                            </p>
                        </div>
                        <div
                            id="diskusi"
                            className="cursor-pointer flex w-1/2 items-center justify-center border-b-2 border-solid border-white p-1"
                        >
                            <p className="text-2xl font-regular text-left line-clamp-2 text-white">
                                Diskusi
                            </p>
                        </div>
                    </div>
                    {/* User's Data */}
                    <div id="contents" className="flex">
                        {" "}
                        <div className="border border-white rounded-[32px] backdrop-opacity-10 backdrop-invert bg-white/10 p-4 duration-200 hover:scale-105">
                            <div className="relative pb-10">
                                <div className="flex justify-center">
                                    <div
                                        className="rounded-[32px] w-72 h-72 bg-cover bg-center"
                                        style={{
                                            backgroundImage: `url(${image})`,
                                        }}
                                    ></div>
                                </div>
                                {category === "Astronomi" ? (
                                    <div className="absolute top-0 left-[15%] min-[375px]:left-[20%] min-[425px]:left-[25%] min-[638px]:left-[34%] md:left-[37%] lg:left-[15%] xl:left-[20%] w-40 xl:w-48 h-[50px] bg-gradient-to-r from-category-1 to-category-2 rounded-b-[53px]">
                                        <p className="text-white text-center py-2 text-xl italic">
                                            {category}
                                        </p>
                                    </div>
                                ) : (
                                    <div className="absolute top-0 left-[15%] min-[375px]:left-[20%] min-[425px]:left-[25%] min-[638px]:left-[34%] md:left-[37%] lg:left-[15%] xl:left-[20%] w-40 xl:w-48 h-[50px] bg-gradient-to-r from-category-3 to-category-4 rounded-b-[53px]">
                                        <p className="text-white text-center py-2 text-xl italic">
                                            {category}
                                        </p>
                                    </div>
                                )}
                                <h3 className="text-3xl font-bold text-left mt-8 line-clamp-2">
                                    {title}
                                </h3>
                                <p className="text-base text-left mt-3 mb-8 line-clamp-4">
                                    {description}
                                </p>
                                <div className="relative h-full"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </BasedLayout>
    );
}
