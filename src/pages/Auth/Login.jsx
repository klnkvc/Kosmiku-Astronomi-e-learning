import React, { useState } from "react";
import BasedLayout from "../../layout/BasedLayout";
import logo from "../../assets/decoration/kosmiku.png";
import hide from "../../assets/decoration/hide.svg";
import show from "../../assets/decoration/show.svg";
import Button from "../../components/Button";
import { Link } from "react-router-dom";

export default function Login() {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    function togglePasswordVisibility() {
        setIsPasswordVisible((prevState) => !prevState);
    }
    return (
        <BasedLayout>
            <section
                id="login"
                className="login flex flex-col justify-center py-12 md:py-16 relative items-center"
            >
                <div className="text-white text-center w-4/5 md:w-3/4 grid grid-cols-1 gap-8 z-10">
                    <h1 className="font-magmawave text-3xl md:text-4xl lg:text-5xl bg-gradient-to-r from-based-2 to-based-3 inline-block text-transparent bg-clip-text">
                        SeLamat datang Para penjelajah kosmik!
                    </h1>
                    <p className="text-base md:text-2xl font-bold mb-16 bg-gradient-to-r from-based-2 to-based-3 inline-block text-transparent bg-clip-text">
                        Login untuk mendapatkan notifikasi berita terbaru !
                    </p>
                </div>
                <div className="w-full md:w-3/4 xl:w-1/2 px-8">
                    <div className="w-full border border-white rounded-3xl backdrop-opacity-10 backdrop-invert bg-white/10 p-8">
                        <div className="logo flex flex-col items-center gap-3">
                            <img className="w-24" src={logo} alt="" />
                            <h1 className="font-magmawave text-3xl md:text-4xl lg:text-5xl bg-gradient-to-r from-based to-based-1 inline-block text-transparent bg-clip-text">
                                Kosmiku
                            </h1>
                        </div>
                        <form className="mt-16">
                            <div className="md:mx-20 flex flex-col gap-5">
                                <div className="flex flex-col gap-4">
                                    <label
                                        className="text-base md:text-xl font-medium text-white"
                                        htmlFor="email"
                                    >
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        class="py-3 px-5 w-full rounded-lg text-base text-white bg-transparent outline outline-white focus:bg-transparent focus:text-gray-900"
                                        placeholder="Masukkan Email"
                                        autocomplete="off"
                                    />
                                </div>
                                <div className="flex flex-col gap-4">
                                    <label
                                        className="text-base md:text-xl font-medium text-white"
                                        htmlFor="password"
                                    >
                                        Password
                                    </label>
                                    <div className="relative">
                                        <input
                                            type={
                                                isPasswordVisible
                                                    ? "text"
                                                    : "password"
                                            }
                                            name="password"
                                            id="password"
                                            class="py-3 px-5 w-full rounded-lg text-base text-white bg-transparent outline outline-white focus:bg-transparent focus:text-gray-900"
                                            placeholder="Masukkan Password"
                                        />
                                        <div
                                            className="absolute inset-y-0 right-0 flex items-center px-4 text-gray-600"
                                            onClick={togglePasswordVisibility}
                                        >
                                            {isPasswordVisible ? (
                                                <img
                                                    className="w-6"
                                                    src={hide}
                                                    alt=""
                                                />
                                            ) : (
                                                <img
                                                    className="w-6"
                                                    src={show}
                                                    alt=""
                                                />
                                            )}
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col lg:flex-row gap-3 justify-between">
                                    <div class="inline-flex items-center">
                                        <label
                                            class="relative flex items-center mr-4 rounded-full cursor-pointer"
                                            htmlFor="check"
                                        >
                                            <input
                                                type="checkbox"
                                                class="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-white transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-transparent before:opacity-0 before:transition-opacity checked:border-based-1 checked:bg-based-1 checked:before:bg-based-1 hover:before:opacity-10"
                                                id="check"
                                            />
                                            <span class="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    class="h-3.5 w-3.5"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                    stroke="currentColor"
                                                    stroke-width="1"
                                                >
                                                    <path
                                                        fill-rule="evenodd"
                                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                        clip-rule="evenodd"
                                                    ></path>
                                                </svg>
                                            </span>
                                        </label>
                                        <label
                                            class="mt-px font-medium text-sm md:text-base text-white cursor-pointer select-none"
                                            htmlFor="check"
                                        >
                                            Remember Me
                                        </label>
                                    </div>
                                    <p className="text-white text-center text-sm md:text-base">
                                        Tidak punya akun?{" "}
                                        <span>
                                            <Link
                                                className="text-based-1"
                                                to={"/register"}
                                            >
                                                Register Here
                                            </Link>
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </form>
                        <Button
                            className={"w-full mt-4 md:mt-16"}
                            type={"button"}
                            variant={"outline"}
                            children={"Login"}
                        />
                    </div>
                </div>
            </section>
        </BasedLayout>
    );
}
