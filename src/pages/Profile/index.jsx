import React from "react";
import BasedLayout from "../../layout/BasedLayout";
import Profile from "../../assets/Profile/padukajavier.png";
import deco from "../../assets/decoration/deco1.png";
import logo from "../../assets/decoration/kosmiku.png";

export default function index() {
    return (
        <BasedLayout>
            <section
                id="Profile"
                className="h-[70vh] border-solid border-based-1 rounded-lg border-2 mx-20 relative p-10"
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
            </section>
        </BasedLayout>
    );
}
