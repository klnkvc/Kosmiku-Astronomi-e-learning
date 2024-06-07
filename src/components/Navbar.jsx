import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import logo from "../assets/decoration/logo.png";
import dropdownBlack from "../assets/decoration/dropdownBlack.svg";
import close from "../assets/decoration/close.svg";
import { useLocation } from "react-router-dom";

export default function Navbar(className) {
  const [openMenu, setOpenMenu] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [nama_lengkap, setName] = useState("");
  const [user, setUser] = useState(null);
  const location = useLocation();
  const isProfilePage = location.pathname === "/profile";
  useEffect(() => {
    const loggedInStatus = localStorage.getItem("isLoggedIn");
    setIsLoggedIn(loggedInStatus === "true");

    const userString = localStorage.getItem("user");
    if (userString) {
      const userData = JSON.parse(userString);
      setUser(userData);
    }
  }, []);
  return (
    <section id="navbar" className={`navbar ${className}`}>
      <div className="fixed w-screen bg-category-5/40 backdrop-blur-sm max-w-[1700px] mx-auto px-0 md:px-4 lg:px-32 py-1 border-b-2 border-based-1 z-20">
        <div className="hidden lg:flex justify-between items-center z-10">
          <Link className="z-10" to={"/"}>
            <img className="w-36 lg:w-44 xl:w-60" src={logo} alt="" />
          </Link>
          <div className="flex justify-between gap-14  text-white">
            <Link className="z-10 hover:bg-gradient-to-r hover:from-based hover:to-based-1 hover:inline-block hover:text-transparent hover:bg-clip-text" to={"/"}>
              Beranda
            </Link>
            <Link className="z-10 hover:bg-gradient-to-r hover:from-based hover:to-based-1 hover:inline-block hover:text-transparent hover:bg-clip-text" to={"/explore"}>
              Jelajahi
            </Link>
            <Link className="z-10 hover:bg-gradient-to-r hover:from-based hover:to-based-1 hover:inline-block hover:text-transparent hover:bg-clip-text" to={"/about-us"}>
              Tentang Kami
            </Link>
          </div>

          {isLoggedIn ? (
            !isProfilePage && <Button className={"z-10"} img={user.data.avatar} type={"profile"} variant={"button"} children={user?.data.nama_lengkap} link={"/profile"} />
          ) : (
            <Button className={"z-10"} variant={"outline"} children={"Logins"} link={"/login"} />
          )}
        </div>

        <nav className="px-6">
          <div className="container flex flex-wrap items-center justify-between mx-auto md:flex lg:hidden relative">
            <Link className="z-10" to={"/"}>
              <img className="w-40" src={logo} alt="" />
            </Link>
            <div className="flex flex-wrap items-center justify-end z-10">
              <button type="button" onClick={() => setOpenMenu(!openMenu)} className="inline-flex items-center p-2 ml-1 text-sm text-gray-500">
                <span className="sr-only">Open main menu</span>
                <img className="w-6 h-6" src={dropdownBlack} alt="" />
              </button>
            </div>
          </div>
        </nav>
      </div>

      <div onClick={() => setOpenMenu(false)} className={`duration-500 fixed inset-0 bg-black z-30 ${openMenu ? "opacity-50 pointer-events-auto" : "opacity-0 pointer-events-none"}`}></div>

      {openMenu && (
        <div className="duration-500 w-full fixed top-0 z-50 bg-landing px-6 shadow-2xl translate-x-0">
          <div className="pt-9 pb-6 flex justify-between">
            <Link to={"/"}>
              <img className="w-40 md:w-auto" src={logo} alt="kosmiku logo" />
            </Link>
            <img className="cursor-pointer" onClick={() => setOpenMenu(false)} src={close} alt="" />
          </div>

          <ul className="flex flex-col rounded-lg pb-10 md:pb-20 text-white">
            <li>
              <Link className="duration-200 block text-lg font-bold py-3 hover:text-based rounded" to={"/"}>
                Beranda
              </Link>
            </li>
            <li>
              <Link className="duration-200 block text-lg font-bold py-3 hover:text-based rounded" to={"/explore"}>
                Jelajahi
              </Link>
            </li>
            <li>
              <Link className="duration-200 block text-lg font-bold py-3 hover:text-based rounded" to={"/about-us"}>
                Tentang Kami
              </Link>
            </li>
            <li className="duration-200 block text-lg font-bold py-3 hover:text-based rounded text-right">
              {isLoggedIn ? <Button variant={"primary"} children={"Logiw"} link={"/"} /> : <h1>Kamu sudah login</h1>}
            </li>
          </ul>
        </div>
      )}
    </section>
  );
}
