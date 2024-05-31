import React, { useState } from "react";
import BasedLayout from "../../layout/BasedLayout";
import Button from "../../components/Button";
import logo from "../../assets/decoration/logo.png";

import hide from "../../assets/decoration/hide.svg";
import show from "../../assets/decoration/show.svg";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isConfirmVisible, setIsConfirmVisible] = useState(false);

  //form hook
  const [nama_lengkap, setName] = useState("");
  const [alamat_email, setEmail] = useState("");
  const [jenjang_pendidikan, setDegree] = useState("");
  const [tanggal_lahir, setDob] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  //API
  const [error, setError] = useState("");

  function togglePasswordVisibility() {
    setIsPasswordVisible((prevState) => !prevState);
  }
  function toggleConfirmVisibility() {
    setIsConfirmVisible((prevState) => !prevState);
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      setErrorMessage("Password dan konfirmasi password tidak cocok.");
      return;
    }

    const userData = { nama_lengkap, alamat_email, jenjang_pendidikan, tanggal_lahir, password };
    fetch("http://localhost:8081/user/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to register");
        }
        return response.json();
      })
      .then((data) => {
        console.log("isi data", data);
        localStorage.setItem("isLoggedIn", true);
        localStorage.setItem("user", JSON.stringify(data));
        navigate("/");
      })
      .catch((error) => {
        setError("Register Failed");
        console.log(error);
      });
  };
  return (
    <BasedLayout>
      <section id="login" className="login flex flex-col justify-center py-12 md:py-16 relative items-center">
        <div className="text-white text-center w-4/5 md:w-3/4 grid grid-cols-1 mt-12 xl:mt-20 gap-8 z-10">
          <h1 className="font-magmawave text-3xl bg-gradient-to-r from-based-2 mb-8 to-based-3 inline-block text-transparent bg-clip-text">SeLamat datang Para penjelajah kosmik!</h1>
        </div>
        <div className="w-full md:w-3/4 xl:w-1/2 px-8">
          <div className="w-full  border border-white rounded-3xl backdrop-opacity-10 backdrop-invert bg-category-5 p-8">
            <div className="logo flex flex-col items-center gap-3">
              <img className="h-16 sm:h-24" src={logo} alt="" />
            </div>
            <form className="mt-2" onSubmit={handleSubmit}>
              <div className="md:mx-20 flex flex-col gap-5">
                <div className="flex flex-col gap-4">
                  <label className="text-base font-medium text-white" htmlFor="name">
                    Nama Lengkap
                  </label>
                  <input
                    type="text"
                    required
                    name="name"
                    id="name"
                    className="bg-transparent border-2 py-3 px-5 rounded-lg text-xs border-based-1 outline-offset-0 text-white focus:outline-based-1 focus:outline-4 focus:outline-offset-4 transition-all duration-200"
                    placeholder="Masukkan Nama"
                    autoComplete="off"
                    value={nama_lengkap}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="flex flex-col gap-4">
                  <label className="text-base font-medium text-white" htmlFor="email">
                    Alamat Email
                  </label>
                  <input
                    type="email"
                    required
                    name="email"
                    id="email"
                    className="bg-transparent border-2 py-3 px-5 rounded-lg text-xs border-based-1 outline-offset-0 text-white focus:outline-based-1 focus:outline-4 focus:outline-offset-4 transition-all duration-200"
                    placeholder="Masukkan Email"
                    autoComplete="off"
                    value={alamat_email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="flex flex-col gap-4">
                  <label className="text-base font-medium text-white" htmlFor="degree">
                    Jenjang Pendidikan
                  </label>
                  <select
                    name="degree"
                    required
                    id="degree"
                    autoComplete="off"
                    className="bg-transparent border-2 py-3  px-5 rounded-lg text-xs border-based-1 outline-offset-0 text-white focus:outline-based-1 focus:outline-4 focus:outline-offset-4 transition-all duration-200 focus:bg-category-5 focus:border-based-1 appearance-none"
                    value={jenjang_pendidikan}
                    onChange={(e) => setDegree(e.target.value)}
                  >
                    <option className="text-white/20 h-7" value="" selected disabled>
                      Pilih Jenjang Pendidikan
                    </option>
                    <option value="sd">Sekolah Dasar</option>
                    <option value="smp">Sekolah Menengah Pertama</option>
                    <option value="sma">Sekolah Menengah Atas</option>
                    <option value="smk">Sekolah Menengah Kejuruan</option>
                    <option value="kuliah">Kuliah</option>
                  </select>
                </div>
                <div className="flex flex-col gap-4">
                  <label className="text-base font-medium text-white" htmlFor="birthdate">
                    Tanggal Lahir
                  </label>
                  <input
                    type="date"
                    required
                    name="birthdate"
                    autoComplete="off"
                    id="birthdate"
                    className="bg-transparent border-2 py-3 px-5 rounded-lg text-xs border-based-1 outline-offset-0 text-white focus:outline-based-1 focus:outline-4 focus:outline-offset-4 transition-all duration-200 appearance-none web"
                    value={tanggal_lahir}
                    onChange={(e) => setDob(e.target.value)}
                  />
                </div>
                <div className="flex flex-col gap-4">
                  <label className="text-base font-medium text-white" htmlFor="password">
                    Password
                  </label>
                  <div className="relative">
                    <input
                      type={isPasswordVisible ? "text" : "password"}
                      required
                      name="password"
                      id="password"
                      autoComplete="off"
                      className="bg-transparent border-2 py-3 px-5 rounded-lg text-xs border-based-1 outline-offset-0 text-white focus:outline-based-1 focus:outline-4 focus:outline-offset-4 transition-all duration-200 w-full"
                      placeholder="Masukkan Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <div className="absolute inset-y-0 right-0 flex items-center px-4 text-gray-600" onClick={togglePasswordVisibility}>
                      {isPasswordVisible ? <img className="w-6" src={hide} alt="" /> : <img className="w-6" src={show} alt="" />}
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-4">
                  <label className="text-base font-medium text-white" htmlFor="confirm">
                    Konfirmasi Password
                  </label>
                  <div className="relative">
                    <input
                      type={isConfirmVisible ? "text" : "password"}
                      name="confirm"
                      id="confirm"
                      required
                      className="bg-transparent border-2 py-3 px-5 rounded-lg text-xs border-based-1 outline-offset-0 text-white focus:outline-based-1 focus:outline-4 focus:outline-offset-4 transition-all duration-200 w-full"
                      placeholder="Masukkan Password"
                      autoComplete="off"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                    <div className="absolute inset-y-0 right-0 flex items-center px-4 text-gray-600" onClick={toggleConfirmVisibility}>
                      {isConfirmVisible ? <img className="w-6" src={hide} alt="" /> : <img className="w-6" src={show} alt="" />}
                    </div>
                  </div>
                </div>
                {errorMessage && password !== confirmPassword && <p className="text-error font-bold">{errorMessage}</p>}
                <p className="text-white text-center text-sm">
                  Sudah punya akun?{" "}
                  <span>
                    <Link className="text-based-1" to={"/login"}>
                      Masuk di sini
                    </Link>
                  </span>
                </p>
              </div>{" "}
              <Button className={"w-full mt-4 md:mt-16"} type={"button"} variant={"outline"} children={"Register"} />
            </form>
          </div>
        </div>
      </section>
    </BasedLayout>
  );
}
