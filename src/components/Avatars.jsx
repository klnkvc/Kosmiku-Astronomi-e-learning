import React, { useEffect, useState } from "react";

const AvatarSelection = ({ onSelectAvatar }) => {
  const [avatars, setAvatars] = useState([]);

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
        <img key={index} src={avatar} alt={`avatar`} onClick={() => onSelectAvatar(avatar)} style={{ cursor: "pointer", width: "100px", height: "100px" }} />
      ))}
    </div>
  );
};

export default AvatarSelection;
