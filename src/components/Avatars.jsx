import React, { useEffect, useState } from "react";

const AvatarSelection = ({ onSelectAvatar }) => {
  const [avatars, setAvatars] = useState([]);
  const [selectedAvatar, setSelectedAvatar] = useState(null);

  const activeAvatar = (avatar) => {
    if (typeof onSelectAvatar === "function") {
      onSelectAvatar(avatar);
      setSelectedAvatar(avatar);
    } else {
      console.error("onSelectAvatar is not a function");
    }
  };

  useEffect(() => {
    fetch("http://localhost:8081/user/avatars")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Fetched avatars:", data);
        if (data && Array.isArray(data)) {
          setAvatars(data);
        } else {
          console.error("Invalid data format:", data);
        }
      })
      .catch((error) => {
        console.error("Error fetching avatars:", error);
      });
  }, []);

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-start">
      {avatars.map((avatar, index) => (
        <img
          key={index}
          src={avatar}
          alt={`avatar`}
          onClick={() => activeAvatar(avatar)}
          className={`cursor-pointer h-[100px] w-[100px] transition-all duration-200 hover:scale-110 ${selectedAvatar === avatar ? "bg-white rounded-full p-2" : ""}`}
        />
      ))}
    </div>
  );
};

export default AvatarSelection;
