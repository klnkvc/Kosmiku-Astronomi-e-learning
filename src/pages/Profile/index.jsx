import React from "react";
import BasedLayout from "../../layout/BasedLayout";
import Profile from "../../assets/Profile/padukajavier.png";
import deco from "../../assets/decoration/deco1.png";
import logo from "../../assets/decoration/kosmiku.png";
import image from "../../assets/hero/mars.jpeg";
import ProfileCard from "../../components/ProfileCard";

export default function index() {
    return (
        <BasedLayout>
            <sections
                id="Profile"
                className="flex flex-col border-solid border-based-1 rounded-lg border-4 mx-20 relative p-10 bg-category-5 min-h-min"
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

                <div id="content" className="flex flex-col gap-10">
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
                    <div className="flex gap-4 w-full justify-start items-center">
                        {" "}
                        <ProfileCard
                            title="Mars: Planet Merah yang Menarik"
                            category="Astronomi"
                            image={image}
                        />
                        <ProfileCard
                            title="Mars: Planet Merah yang Menarik"
                            category="Astronomi"
                            image={image}
                        />
                    </div>
                </div>
            </sections>
        </BasedLayout>
    );
}
