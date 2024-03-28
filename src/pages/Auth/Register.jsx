import React, { useState } from 'react'
import BasedLayout from '../../layout/BasedLayout'
import Button from '../../components/Button'
import logo from "../../assets/decoration/kosmiku.png";
import hide from "../../assets/decoration/hide.svg";
import show from "../../assets/decoration/show.svg";
import { Link } from 'react-router-dom';

export default function Register() {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [isConfirmVisible, setIsConfirmVisible] = useState(false);

    function togglePasswordVisibility() {
        setIsPasswordVisible((prevState) => !prevState);
    }
    function toggleConfirmVisibility() {
        setIsConfirmVisible((prevState) => !prevState);
    }
    return (
        <BasedLayout>
            <section id='login' className='login flex flex-col justify-center py-12 md:py-16 relative items-center'>
                <div className='text-white text-center w-4/5 md:w-3/4 grid grid-cols-1 gap-8 z-10'>
                    <h1 className='font-magmawave text-3xl md:text-4xl lg:text-5xl bg-gradient-to-r from-based-2 to-based-3 inline-block text-transparent bg-clip-text'>SeLamat datang Para penjelajah kosmik!</h1>
                    <p className='text-base md:text-2xl font-bold mb-16 bg-gradient-to-r from-based-2 to-based-3 inline-block text-transparent bg-clip-text'>Ayo buat akun kosmik anda mari kita jelajahi fenomena astronomi!</p>
                </div>
                <div className="w-full md:w-3/4 xl:w-1/2 px-8">
                    <div className='w-full border border-white rounded-3xl backdrop-opacity-10 backdrop-invert bg-white/10 p-8'>
                        <div className="logo flex flex-col items-center gap-3">
                            <img className='w-24' src={logo} alt="" />
                            <h1 className='font-magmawave text-3xl md:text-4xl lg:text-5xl bg-gradient-to-r from-based to-based-1 inline-block text-transparent bg-clip-text'>Kosmiku</h1>
                        </div>
                        <form className='mt-16' >
                            <div className="md:mx-20 flex flex-col gap-5">
                                <div className='flex flex-col gap-4'>
                                    <label className='text-base md:text-xl font-medium text-white' htmlFor="name">Nama Lengkap</label>
                                    <input type="text" name="name" id="name" class="py-3 px-5 w-full rounded-lg text-base text-white bg-transparent outline outline-white focus:bg-transparent focus:text-gray-900" placeholder="Masukkan Nama" autocomplete="off" />
                                </div>
                                <div className='flex flex-col gap-4'>
                                    <label className='text-base md:text-xl font-medium text-white' htmlFor="email">Alamat Email</label>
                                    <input type="email" name="email" id="email" class="py-3 px-5 w-full rounded-lg text-base text-white bg-transparent outline outline-white focus:bg-transparent focus:text-gray-900" placeholder="Masukkan Email" autocomplete="off" />
                                </div>
                                <div className='flex flex-col gap-4'>
                                    <label className='text-base md:text-xl font-medium text-white' htmlFor="degree">Jenjang Pendidikan</label>
                                    <select name="degree" id="degree" class="py-3 px-5 w-full rounded-lg text-base text-white bg-transparent outline outline-white focus:bg-transparent focus:text-gray-900" >
                                        <option selected disabled>Pilih Jenjang Pendidikan</option>
                                        <option value="sd">Sekolah Dasar</option>
                                        <option value="smp">Sekolah Menengah Pertama</option>
                                        <option value="sma">Sekolah Menengah Atas</option>
                                        <option value="smk">Sekolah Menengah Kejuruan</option>
                                        <option value="kuliah">Kuliah</option>
                                    </select>
                                </div>
                                <div className='flex flex-col gap-4'>
                                    <label className='text-base md:text-xl font-medium text-white' htmlFor="birthdate">Tanggal Lahir</label>
                                    <input type="date" name="birthdate" id="birthdate" class="py-3 px-5 w-full rounded-lg text-base text-white bg-transparent outline outline-white focus:bg-transparent focus:text-gray-900" />
                                </div>
                                <div className='flex flex-col gap-4'>
                                    <label className='text-base md:text-xl font-medium text-white' htmlFor="password">Password</label>
                                    <div className="relative">
                                        <input type={isPasswordVisible ? "text" : "password"} name="password" id="password" class="py-3 px-5 w-full rounded-lg text-base text-white bg-transparent outline outline-white focus:bg-transparent focus:text-gray-900" placeholder="Masukkan Password" />
                                        <div
                                            className="absolute inset-y-0 right-0 flex items-center px-4 text-gray-600"
                                            onClick={togglePasswordVisibility}
                                        >
                                            {isPasswordVisible ? (
                                                <img className='w-6' src={hide} alt="" />
                                            ) : (
                                                <img className='w-6' src={show} alt="" />
                                            )}
                                        </div>
                                    </div>
                                </div>
                                <div className='flex flex-col gap-4'>
                                    <label className='text-base md:text-xl font-medium text-white' htmlFor="confirm">Konfirmasi Password</label>
                                    <div className="relative">
                                        <input type={isConfirmVisible ? "text" : "password"} name="confirm" id="confirm" class="py-3 px-5 w-full rounded-lg text-base text-white bg-transparent outline outline-white focus:bg-transparent focus:text-gray-900" placeholder="Masukkan Password" />
                                        <div
                                            className="absolute inset-y-0 right-0 flex items-center px-4 text-gray-600"
                                            onClick={toggleConfirmVisibility}
                                        >
                                            {isConfirmVisible ? (
                                                <img className='w-6' src={hide} alt="" />
                                            ) : (
                                                <img className='w-6' src={show} alt="" />
                                            )}
                                        </div>
                                    </div>
                                </div>
                                <p className='text-white text-center text-sm md:text-base'>Sudah punya akun? <span><Link className='text-based-1' to={'/login'}>Login Here</Link></span></p>
                            </div>
                        </form>
                        <Button className={'w-full mt-4 md:mt-16'} type={'button'} variant={'outline'} children={'Register'} />
                    </div>
                </div>
            </section>
        </BasedLayout>
    )
}
