import React, { useState, useEffect } from "react";
import BasedLayout from "../../layout/BasedLayout";
import Profile from "../../assets/Profile/padukajavier.png";
import deco from "../../assets/decoration/deco1.png";
import logo from "../../assets/decoration/kosmiku.png";
import Button from "../../components/Button";
import image from "../../assets/hero/mars.jpeg";
import { useNavigate } from "react-router-dom";
import ProfileCard from "../../components/ProfileCard";

export default function Index() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const loggedInStatus = localStorage.getItem("isLoggedIn");
    const userString = localStorage.getItem("user");

    if (loggedInStatus === "true" && userString) {
      const userData = JSON.parse(userString);
      setUser(userData);
      setIsLoggedIn(true);
    } else {
      navigate("/login"); // Arahkan ke halaman login jika belum login
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.setItem("isLoggedIn", "false");
    localStorage.removeItem("user"); // Hapus data user dari localStorage saat logout
    setIsLoggedIn(false);
    setUser(null);
    navigate("/login");
  };
  return (
    <BasedLayout>
      <sections id="Profile" className="relative px-1 min-h-min gap-10">
        <div className="bg-category-5 p-4 lg:p-8 mt-32 flex flex-col border-solid border-based-1 rounded-md lg:rounded-[64px] border-4 mx-4 lg:mx-20 gap-4">
          <div id="upper" className="relative w-full flex flex-col lg:flex-row items-center gap-3 lg:gap-4">
            <div className="w-full flex items-center gap-3 lg:gap-4">
              <img id="Avatar" src={Profile} className="w-12 h-12 lg:w-24 lg:h-24"></img>
              <div className="flex flex-col ">
                <h1 className=" text-sm lg:text-xl font-bold text-left line-clamp-2 text-white">{user?.data.nama_lengkap}</h1>
                <p className="text-white text-xs lg:text-md">{user?.data.alamat_email}</p>
              </div>
            </div>

            <div className="flex gap-4 w-full lg:w-auto sm:items-start">
              <button className="border border-based-1 w-28 md:w-36 text-white px-6 py-2 text-xs rounded-[60px]">Pengaturan</button>{" "}
              <button className="bg-[#E92E27] w-28 md:w-36  text-white px-6 py-2 text-xs rounded-[60px]" onClick={handleLogout}>
                Logout
              </button>
            </div>
          </div>
          <div id="content" className="flex flex-col gap-10">
            <div id="navigation" className="flex w-full">
              <div id="koleksi" className="cursor-pointer flex w-1/2 items-center justify-center border-b-4 border-solid border-based-1 p-1">
                <p className=" text-md lg:text-xl font-bold text-left line-clamp-2 text-based-1">Koleksi</p>
              </div>
              <div id="diskusi" className="cursor-pointer flex w-1/2 items-center justify-center border-b-2 border-solid border-white p-1">
                <p className="text-md lg:text-xl font-regular text-left line-clamp-2 text-white">Diskusi</p>
              </div>
            </div>
            {/* User's Data */}
            <div className="flex overflow-auto gap-4 w-full justify-start items-center">
              {" "}
              <ProfileCard title="Mars: Planet Merah yang Menarik" category="Astronomi" image={image} />
              <ProfileCard title="Mars: Planet Merah yang Menarik" category="Astronomi" image={image} />
            </div>
          </div>
        </div>
      </sections>
    </BasedLayout>
  );
}
