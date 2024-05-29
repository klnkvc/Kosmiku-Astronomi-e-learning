import React, { useState } from "react";
import BasedLayout from "../../layout/BasedLayout";
import Button from "../../components/Button";
import logo from "../../assets/decoration/kosmiku.png";
import hide from "../../assets/decoration/hide.svg";
import show from "../../assets/decoration/show.svg";
import { Link } from "react-router-dom";

export default function Register() {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [isConfirmVisible, setIsConfirmVisible] = useState(false);

    //form hook
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [degree, setDegree] = useState("");
    const [dob, setDob] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

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

        console.log(name, email, degree, dob, password);
    };
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
                        Ayo buat akun kosmik anda mari kita jelajahi fenomena
                        astronomi!
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
                        <form className="mt-16" onSubmit={handleSubmit}>
                            <div className="md:mx-20 flex flex-col gap-5">
                                <div className="flex flex-col gap-4">
                                    <label
                                        className="text-base md:text-xl font-medium text-white"
                                        htmlFor="name"
                                    >
                                        Nama Lengkap
                                    </label>
                                    <input
                                        type="text"
                                        required
                                        name="name"
                                        id="name"
                                        className="py-3 px-5 w-full rounded-lg text-base text-white bg-transparent outline outline-white focus:bg-transparent focus:text-gray-900"
                                        placeholder="Masukkan Nama"
                                        autoComplete="off"
                                        value={name}
                                        onChange={(e) =>
                                            setName(e.target.value)
                                        }
                                    />
                                </div>
                                <div className="flex flex-col gap-4">
                                    <label
                                        className="text-base md:text-xl font-medium text-white"
                                        htmlFor="email"
                                    >
                                        Alamat Email
                                    </label>
                                    <input
                                        type="email"
                                        required
                                        name="email"
                                        id="email"
                                        className="py-3 px-5 w-full rounded-lg text-base text-white bg-transparent outline outline-white focus:bg-transparent focus:text-gray-900"
                                        placeholder="Masukkan Email"
                                        autoComplete="off"
                                        value={email}
                                        onChange={(e) =>
                                            setEmail(e.target.value)
                                        }
                                    />
                                </div>
                                <div className="flex flex-col gap-4">
                                    <label
                                        className="text-base md:text-xl font-medium text-white"
                                        htmlFor="degree"
                                    >
                                        Jenjang Pendidikan
                                    </label>
                                    <select
                                        name="degree"
                                        required
                                        id="degree"
                                        autoComplete="off"
                                        className="py-3 px-5 w-full rounded-lg text-base text-white bg-transparent outline outline-white focus:bg-transparent focus:text-gray-900"
                                        value={degree}
                                        onChange={(e) =>
                                            setDegree(e.target.value)
                                        }
                                    >
                                        <option value="" selected disabled>
                                            Pilih Jenjang Pendidikan
                                        </option>
                                        <option value="sd">
                                            Sekolah Dasar
                                        </option>
                                        <option value="smp">
                                            Sekolah Menengah Pertama
                                        </option>
                                        <option value="sma">
                                            Sekolah Menengah Atas
                                        </option>
                                        <option value="smk">
                                            Sekolah Menengah Kejuruan
                                        </option>
                                        <option value="kuliah">Kuliah</option>
                                    </select>
                                </div>
                                <div className="flex flex-col gap-4">
                                    <label
                                        className="text-base md:text-xl font-medium text-white"
                                        htmlFor="birthdate"
                                    >
                                        Tanggal Lahir
                                    </label>
                                    <input
                                        type="date"
                                        required
                                        name="birthdate"
                                        autoComplete="off"
                                        id="birthdate"
                                        className="py-3 px-5 w-full rounded-lg text-base text-white bg-transparent outline outline-white focus:bg-transparent focus:text-gray-900"
                                        value={dob}
                                        onChange={(e) => setDob(e.target.value)}
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
                                            required
                                            name="password"
                                            id="password"
                                            autoComplete="off"
                                            className="py-3 px-5 w-full rounded-lg text-base text-white bg-transparent outline outline-white focus:bg-transparent focus:text-gray-900"
                                            placeholder="Masukkan Password"
                                            value={password}
                                            onChange={(e) =>
                                                setPassword(e.target.value)
                                            }
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
                                <div className="flex flex-col gap-4">
                                    <label
                                        className="text-base md:text-xl font-medium text-white"
                                        htmlFor="confirm"
                                    >
                                        Konfirmasi Password
                                    </label>
                                    <div className="relative">
                                        <input
                                            type={
                                                isConfirmVisible
                                                    ? "text"
                                                    : "password"
                                            }
                                            name="confirm"
                                            id="confirm"
                                            required
                                            className="py-3 px-5 w-full rounded-lg text-base text-white bg-transparent outline outline-white focus:bg-transparent focus:text-gray-900"
                                            placeholder="Masukkan Password"
                                            autoComplete="off"
                                            value={confirmPassword}
                                            onChange={(e) =>
                                                setConfirmPassword(
                                                    e.target.value,
                                                )
                                            }
                                        />
                                        <div
                                            className="absolute inset-y-0 right-0 flex items-center px-4 text-gray-600"
                                            onClick={toggleConfirmVisibility}
                                        >
                                            {isConfirmVisible ? (
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
                                {errorMessage &&
                                    password !== confirmPassword && (
                                        <p className="text-error font-bold">
                                            {errorMessage}
                                        </p>
                                    )}
                                <p className="text-white text-center text-sm md:text-base">
                                    Sudah punya akun?{" "}
                                    <span>
                                        <Link
                                            className="text-based-1"
                                            to={"/login"}
                                        >
                                            Login Here
                                        </Link>
                                    </span>
                                </p>
                            </div>{" "}
                            <Button
                                className={"w-full mt-4 md:mt-16"}
                                type={"button"}
                                variant={"outline"}
                                children={"Register"}
                            />
                        </form>
                    </div>
                </div>
            </section>
        </BasedLayout>
    );
}
