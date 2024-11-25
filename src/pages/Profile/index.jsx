import { useState, useEffect } from "react";
import BasedLayout from "../../layout/BasedLayout";
import image from "../../assets/hero/mars.jpeg";
import edit from "../../assets/Profile/edit.svg";
import check from "../../assets/Profile/check.svg";
import closeChatbot from "../../assets/decoration/closeChatbot.svg";
import AvatarSelection from "../../components/Avatars";
import Button from "../../components/Button";

import { useNavigate } from "react-router-dom";
import ProfileCard from "../../components/ProfileCard";

export default function Index() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);
  const [user, setUser] = useState(null);
  const [isAvatar, setIsAvatar] = useState(false);
  const [nama_lengkap, setName] = useState("");
  const [avatar, setAvatar] = useState("");
  const [selectedAvatar, setSelectedAvatar] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    fetch(`${import.meta.env.VITE_APIURL}/auth/get-data`, { method: "GET", credentials: "include" })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch user data");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Data pengguna setelah login:", data);

        if (data.session) {
          const userData = data.session.user;
          setUser(userData);
          console.log("userData : ", userData);

          const loggedInStatus = data.session.isLoggedIn;
          setIsLoggedIn(loggedInStatus);
          console.log("Status login : ", loggedInStatus);
        } else {
          throw new Error("Session data not found in response");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);
  useEffect(() => {
    const loggedInStatus = localStorage.getItem("isLoggedIn");
    const userString = localStorage.getItem("user");

    if (loggedInStatus === "true" && userString) {
      const userData = JSON.parse(userString);
      setUser(userData);
      setIsLoggedIn(true);
    } else {
      navigate("/login");
    }
  }, [navigate]);

  useEffect(() => {
    if (user?.data) {
      setName(user.data.nama_lengkap);
      setAvatar(user.data.avatar);
    }
  }, [user]);

  const handleSelectAvatar = (avatars) => {
    setSelectedAvatar(avatars);
  };

  const saveAvatar = () => {
    setIsAvatar(!isAvatar);
    setAvatar(selectedAvatar);
  };

  useEffect(() => {
    if (avatar) {
      console.log("Saved Avatar User:", avatar);
      handleUpdate();
    }
  }, [avatar]);

  const saveName = () => {
    setIsUpdating(!isUpdating);
    handleUpdate();
  };

  const handleLogout = () => {
    localStorage.setItem("isLoggedIn", "false");
    localStorage.removeItem("user");
    setIsLoggedIn(false);
    setUser(null);
    navigate("/login");
  };

  const handleUpdate = () => {
    const userID = user?.data.userID;
    const userData = { nama_lengkap, avatar: selectedAvatar || avatar };
    const userString = localStorage.getItem("user");

    fetch(`${import.meta.env.VITE_APIURL}/user/${userID}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to update data");
        }
        return response.json();
      })
      .then((data) => {
        const userObject = JSON.parse(userString);
        userObject.data.nama_lengkap = nama_lengkap;
        userObject.data.avatar = selectedAvatar || avatar;
        localStorage.setItem("user", JSON.stringify(userObject));
        console.log("Updated user:", JSON.parse(localStorage.getItem("user")));
      })
      .catch((error) => {
        console.log("Terjadi error!", error);
      });
  };
  return (
    <BasedLayout>
      <sections id="Profile" className="relative bg-white px-1 w-auto h-auto gap-10">
        <div className="bg-category-5 relative p-4 lg:p-8 mt-32 flex flex-col border-solid border-based-1 rounded-md lg:rounded-[64px] border-4 mx-4 lg:mx-20 gap-4">
          <div onClick={() => setIsAvatar(false)} className={`duration-500 fixed inset-0 bg-black z-20 ${isAvatar ? "opacity-50 pointer-events-auto" : "opacity-0 pointer-events-none"}`}></div>
          {isAvatar && (
            <div className="duration-500 absolute z-50 w-[50vw] top-12 left-1/2 ml-[-25vw] rounded-3xl border-4 border-quest-1 p-8 text-white bg-landing ">
              <div className="relative">
                <div className="z-50 absolute right-0 w-8 lg:w-11" onClick={() => setIsAvatar(!isAvatar)}>
                  <img src={closeChatbot} alt="" />
                </div>
                <div className="flex flex-col gap-8 items-center">
                  <h4 className="text-2xl font-medium">Pilih Avatarmu</h4>
                  <div className="">
                    <AvatarSelection onSelectAvatar={handleSelectAvatar} />
                  </div>
                  <Button onClick={() => saveAvatar()} className={"w-fit"} type={"clickable"} children={"Simpan"} variant={"outline"} />
                </div>
              </div>
            </div>
          )}
          <div id="upper" className="relative w-full flex flex-col lg:flex-row items-center gap-3 lg:gap-4">
            <div className="w-full flex items-center gap-3 lg:gap-4">
              <div className="flex flex-col items-center gap-2">
                <img id="Avatar" src={avatar} className="w-12 h-12 lg:w-24 lg:h-24"></img>
                <p className="text-xs text-based-4 cursor-pointer" onClick={() => setIsAvatar(!isAvatar)}>
                  Ubah Avatar
                </p>
              </div>
              <div className="flex flex-col gap-2">
                {!isUpdating ? (
                  <div className="flex gap-2">
                    <h1 className=" text-sm lg:text-xl font-bold text-left line-clamp-2 text-white">{nama_lengkap}</h1>
                    <img src={edit} alt="" className="h-4" onClick={() => setIsUpdating(!isUpdating)} />
                  </div>
                ) : (
                  <div className="flex gap-6 items-center">
                    <input
                      type="text"
                      required
                      name="name"
                      id="name"
                      className="bg-transparent border-2 py-2 px-3 rounded-lg text-xs border-based-1 outline-offset-0 text-white focus:outline-based-1 focus:outline-4 focus:outline-offset-4 transition-all duration-200"
                      autoComplete="off"
                      value={nama_lengkap}
                      onChange={(e) => setName(e.target.value)}
                    />
                    <div className="flex gap-2">
                      <img src={check} alt="" className="h-6" onClick={() => saveName()} />
                      <img src={closeChatbot} alt="" className="h-6" onClick={() => setIsUpdating(!isUpdating)} />
                    </div>
                  </div>
                )}

                <p className="text-white text-xs lg:text-md">{user?.data.alamat_email}</p>
              </div>
            </div>

            <div className="flex gap-4 w-full lg:w-auto sm:items-start">
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
        </div>{" "}
      </sections>
    </BasedLayout>
  );
}
