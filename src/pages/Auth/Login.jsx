import React, { useState } from "react";
import BasedLayout from "../../layout/BasedLayout";
import logo from "../../assets/decoration/logo.png";
import hide from "../../assets/decoration/hide.svg";
import show from "../../assets/decoration/show.svg";
import Button from "../../components/Button";
import { Link } from "react-router-dom";
import Loader from "../../assets/loader/Ring.svg";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  function togglePasswordVisibility() {
    setIsPasswordVisible((prevState) => !prevState);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const userData = { email, password };
    setIsLoading(true);
    try {
      const response = await fetch("http://localhost:8081/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });
      if (!response.ok) {
        throw new Error("Failed to login");
      }
      const data = await response.json();
      console.log("User ditemukan : ", data);
      localStorage.setItem("isLoggedIn", true);
      localStorage.setItem("user", JSON.stringify(data));
      navigate("/");
    } catch (error) {
      setErrorMessage("Email atau Password Salah !");
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <BasedLayout>
      <section id="login" className="login flex flex-col justify-center py-12 md:py-16 relative items-center">
        <div className="text-white text-center w-4/5 md:w-3/4 grid grid-cols-1 mt-12 xl:mt-20 gap-8 z-10">
          <h1 className="font-magmawave text-3xl bg-gradient-to-r from-based-2 mb-8 to-based-3 inline-block text-transparent bg-clip-text">SeLamat datang Para penjelajah kosmik!</h1>
        </div>
        <div className="w-full  md:w-3/4 xl:w-1/2 px-8">
          <div className="w-full  border-2 border-based-1 rounded-3xl backdrop-opacity-10 backdrop-invert bg-category-5 p-8">
            <div className="logo flex flex-col items-center gap-3">
              <img className="h-16 sm:h-24" src={logo} alt="" />
            </div>
            <form method="post" className="mt-2" onSubmit={handleSubmit}>
              <div className="md:mx-20 flex flex-col gap-5">
                <div className="flex flex-col gap-4">
                  <label className="text-base font-medium text-white" htmlFor="email">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="bg-transparent border-2 py-3 px-5 rounded-lg text-xs border-based-1 outline-offset-0 text-white focus:outline-based-1 focus:outline-4 focus:outline-offset-4 transition-all duration-200"
                    placeholder="Masukkan Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    autoComplete="off"
                  />
                </div>
                <div className="flex flex-col gap-4">
                  <label className="text-base font-medium text-white" htmlFor="password">
                    Password
                  </label>
                  <div className="relative">
                    <input
                      type={isPasswordVisible ? "text" : "password"}
                      name="password"
                      id="password"
                      className="w-full bg-transparent border-2 py-3 px-5 rounded-lg text-xs border-based-1 outline-offset-0 text-white focus:outline-based-1 focus:outline-4 focus:outline-offset-4 transition-all duration-200"
                      placeholder="Masukkan Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <div className="absolute inset-y-0 right-0 flex items-center px-4 text-gray-600" onClick={togglePasswordVisibility}>
                      {isPasswordVisible ? <img className="w-6" src={hide} alt="" /> : <img className="w-6" src={show} alt="" />}
                    </div>
                  </div>
                </div>
                <div className="flex flex-col lg:flex-row gap-3 justify-between">
                  <div className="inline-flex items-center">
                    <label className="relative flex items-center mr-4 rounded-full cursor-pointer" htmlFor="check">
                      <input
                        type="checkbox"
                        className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-white transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-transparent before:opacity-0 before:transition-opacity checked:border-based-1 checked:bg-based-1 checked:before:bg-based-1 hover:before:opacity-10"
                        id="check"
                      />
                      <span className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor" stroke="currentColor" strokeWidth="1">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                        </svg>
                      </span>
                    </label>
                    <label className="mt-px font-medium text-xs text-white cursor-pointer select-none" htmlFor="check">
                      Remember Me
                    </label>
                  </div>
                  <p className="text-white text-center text-xs">
                    Tidak punya akun?{" "}
                    <span>
                      <Link className="text-based-1" to={"/register"}>
                        Daftar di sini
                      </Link>
                    </span>
                  </p>
                </div>
                {errorMessage && <p className="text-wrongSelected underline-offset-2 underline text-xs text-center font-bold">{errorMessage}</p>}
              </div>

              <button className={"py-2 h-[48px] rounded-[60px] transition-all duration-300 border-based border hover:bg-based text-white text-sm lg:text-base w-full mt-4 md:mt-8"} type="submit">
                {isLoading ? <img src={Loader} className="mx-auto" /> : <p>Login</p>}
              </button>
            </form>
          </div>
        </div>
      </section>
    </BasedLayout>
  );
}
