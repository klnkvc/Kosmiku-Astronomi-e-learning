import React from 'react'
import rocket from '../../assets/decoration/rocket.png'
import profile from '../../assets/decoration/profile.png'
import help from '../../assets/decoration/help.svg'
import idea from '../../assets/decoration/idea.svg'
import shield from '../../assets/decoration/shield.svg'
import goldMedal from '../../assets/decoration/goldMedal.svg'
import silverMedal from '../../assets/decoration/silverMedal.svg'
import bronzeMedal from '../../assets/decoration/bronzeMedal.svg'
import BasedLayout from '../../layout/BasedLayout'
import { Link } from 'react-router-dom'

export default function index() {
    return (
        <BasedLayout>
            <section id='quest' className='quest flex flex-col justify-center pb-12 pt-4 md:py-16 relative items-center'>
                <div className="flex flex-row items-center gap-4 xl:gap-9">
                    <img className='w-20 h-20 xl:w-40 xl:h-40' src={rocket} alt="" />
                    <h1 className='font-magmawave text-3xl md:text-4xl lg:text-5xl bg-gradient-to-r from-based to-based-1 inline-block text-transparent bg-clip-text'>Kosmi Quest</h1>
                </div>

                <div className="px-4 md:px-16 mt-4 w-full">
                    <div className="flex flex-col xl:flex-row gap-10 xl:gap-2 w-full bg-quest rounded-3xl border-4 border-quest-1 p-4 md:p-8">
                        <div className='w-full xl:w-2/3'>
                            <div className="flex flex-col md:flex-row gap-4 md:gap-0 justify-between items-center mb-4 md:mb-8">
                                <div className="flex flex-row items-center gap-4">
                                    <img className='w-14 h-14 rounded-full' src={profile} alt="" />
                                    <h4 className='text-xl lg:text-2xl font-bold text-white'>Paduka Javier</h4>
                                </div>
                                <div className="flex flex-row items-center gap-4">
                                    <h4 className='text-xl lg:text-2xl font-bold text-white'>Skor</h4>
                                    <p className='border-4 border-quest-1 rounded-[360px] px-8 py-4 text-white font-bold'>0</p>
                                    <div><img className='w-10 h-10' src={help} alt="" /></div>
                                </div>
                            </div>
                            <div className="relative">
                                <div className="relative absolute w-fit top-8 m-auto bg-quest border-4 border-quest-1 rounded-[360px] py-4 px-8"><h2 className='font-magmawave text-xl md:text-[32px] bg-based-1 inline-block text-transparent bg-clip-text'>Pertanyaan</h2></div>
                                <form action="">
                                    <div className="border-4 border-quest-1 rounded-[32px] py-16 px-3 text-center">
                                        <p className='text-xl lg:text-2xl font-bold text-white'>Apa planet terbesar di tata surya?</p>
                                    </div>
                                    <div className="flex flex-col my-8 gap-4 md:gap-8">
                                        <div className="py-4 border-4 border-quest-1 rounded-[360px] w-full lg:w-1/2 m-auto text-xl lg:text-2xl font-bold text-white text-center hover:bg-gradient-to-r hover:from-based hover:to-based-1">Bumi</div>
                                        <div className="py-4 border-4 border-quest-1 rounded-[360px] w-full lg:w-1/2 m-auto text-xl lg:text-2xl font-bold text-white text-center hover:bg-gradient-to-r hover:from-based hover:to-based-1">Jupiter</div>
                                        <div className="py-4 border-4 border-quest-1 rounded-[360px] w-full lg:w-1/2 m-auto text-xl lg:text-2xl font-bold text-white text-center hover:bg-gradient-to-r hover:from-based hover:to-based-1">Saturnus</div>
                                        <div className="py-4 border-4 border-quest-1 rounded-[360px] w-full lg:w-1/2 m-auto text-xl lg:text-2xl font-bold text-white text-center hover:bg-gradient-to-r hover:from-based hover:to-based-1">Merkurius</div>
                                    </div>
                                    <h4 className='text-xl lg:text-2xl font-bold text-white text-center mb-4'>Bantuan</h4>
                                    <div className="flex flex-row items-center justify-center gap-8">
                                        <button className='relative border-4 border-quest-1 rounded-full p-4'>
                                            <div className="absolute -top-4 -right-2 px-4 py-2 bg-quest-1 rounded-full text-base lg:text-2xl font-bold text-white">3</div>
                                            <img className='w-10 md:w-16' src={idea} alt="" />
                                        </button>
                                        <button className='relative border-4 border-quest-1 rounded-full p-4'>
                                            <div className="absolute -top-4 -right-2 px-4 py-2 bg-quest-1 rounded-full text-base lg:text-2xl font-bold text-white">3</div>
                                            <img className='w-10 md:w-16' src={shield} alt="" />
                                        </button>
                                    </div>
                                    <div className="flex justify-center mt-8">
                                        <Link to={'/quest/selected'} className='rounded-[360px] w-full lg:w-1/2 bg-quest-1 py-4 text-center text-lg lg:text-2xl font-bold text-white hover:bg-gradient-to-r hover:from-based hover:to-based-1'>SELANJUTNYA</Link>
                                    </div>
                                </form>
                            </div>
                        </div>

                        <div className='w-[2px] bg-white mx-8'></div>

                        <div className='w-full xl:w-1/3'>
                            <div className="flex m-auto mb-8 w-fit bg-quest border-4 border-quest-1 rounded-[360px] py-4 px-8"><h2 className='font-magmawave text-xl md:text-[32px] bg-based-1 inline-block text-transparent bg-clip-text'>Peringkat</h2></div>
                            <div className="w-full flex flex-col gap-4 border-4 border-quest-1 rounded-[36px] py-8">
                                <div className="px-8 flex flex-row justify-between items-center">
                                    <div className="flex flex-row items-center gap-6">
                                        <img className='w-10 h-10' src={goldMedal} alt="" />
                                        <img className='hidden md:block w-10 h-10 rounded-full border-2 border-white' src={profile} alt="" />
                                        <p className='text-base font-bold text-white text-clip overflow-hidden'>Paduka Javier</p>
                                    </div>
                                    <p className='text-base font-bold text-quest-1'>3200</p>
                                </div>
                                <div className="px-8 flex flex-row justify-between items-center">
                                    <div className="flex flex-row items-center gap-6">
                                        <img className='w-10 h-10' src={silverMedal} alt="" />
                                        <img className='hidden md:block w-10 h-10 rounded-full border-2 border-white' src={profile} alt="" />
                                        <p className='text-base font-bold text-white text-clip overflow-hidden'>Paduka Javier</p>
                                    </div>
                                    <p className='text-base font-bold text-quest-1'>3200</p>
                                </div>
                                <div className="px-8 flex flex-row justify-between items-center">
                                    <div className="flex flex-row items-center gap-6">
                                        <img className='w-10 h-10' src={bronzeMedal} alt="" />
                                        <img className='hidden md:block w-10 h-10 rounded-full border-2 border-white' src={profile} alt="" />
                                        <p className='text-base font-bold text-white text-clip overflow-hidden'>Paduka Javier</p>
                                    </div>
                                    <p className='text-base font-bold text-quest-1'>3200</p>
                                </div>
                                <div className="px-8 flex flex-row justify-between items-center">
                                    <div className="flex flex-row items-center gap-6">
                                        <div className='w-10 h-10 text-base font-bold text-white text-center content-center'>4</div>
                                        <img className='hidden md:block w-10 h-10 rounded-full border-2 border-white' src={profile} alt="" />
                                        <p className='text-base font-bold text-white text-clip overflow-hidden'>Paduka Javier</p>
                                    </div>
                                    <p className='text-base font-bold text-quest-1'>3200</p>
                                </div>
                                <div className="px-8 flex flex-row justify-between items-center">
                                    <div className="flex flex-row items-center gap-6">
                                        <div className='w-10 h-10 text-base font-bold text-white text-center content-center'>5</div>
                                        <img className='hidden md:block w-10 h-10 rounded-full border-2 border-white' src={profile} alt="" />
                                        <p className='text-base font-bold text-white text-clip overflow-hidden'>Paduka Javier</p>
                                    </div>
                                    <p className='text-base font-bold text-quest-1'>3200</p>
                                </div>
                                <div className="px-8 flex flex-row justify-between items-center">
                                    <div className="flex flex-row items-center gap-6">
                                        <div className='w-10 h-10 text-base font-bold text-white text-center content-center'>6</div>
                                        <img className='hidden md:block w-10 h-10 rounded-full border-2 border-white' src={profile} alt="" />
                                        <p className='text-base font-bold text-white text-clip overflow-hidden'>Paduka Javier</p>
                                    </div>
                                    <p className='text-base font-bold text-quest-1'>3200</p>
                                </div>
                                <div className="px-8 flex flex-row justify-between items-center">
                                    <div className="flex flex-row items-center gap-6">
                                        <div className='w-10 h-10 text-base font-bold text-white text-center content-center'>7</div>
                                        <img className='hidden md:block w-10 h-10 rounded-full border-2 border-white' src={profile} alt="" />
                                        <p className='text-base font-bold text-white text-clip overflow-hidden'>Paduka Javier</p>
                                    </div>
                                    <p className='text-base font-bold text-quest-1'>3200</p>
                                </div>
                                <div className="px-8 flex flex-row justify-between items-center">
                                    <div className="flex flex-row items-center gap-6">
                                        <div className='w-10 h-10 text-base font-bold text-white text-center content-center'>8</div>
                                        <img className='hidden md:block w-10 h-10 rounded-full border-2 border-white' src={profile} alt="" />
                                        <p className='text-base font-bold text-white text-clip overflow-hidden'>Paduka Javier</p>
                                    </div>
                                    <p className='text-base font-bold text-quest-1'>3200</p>
                                </div>
                                <div className="px-8 flex flex-row justify-between items-center">
                                    <div className="flex flex-row items-center gap-6">
                                        <div className='w-10 h-10 text-base font-bold text-white text-center content-center'>9</div>
                                        <img className='hidden md:block w-10 h-10 rounded-full border-2 border-white' src={profile} alt="" />
                                        <p className='text-base font-bold text-white text-clip overflow-hidden'>Paduka Javier</p>
                                    </div>
                                    <p className='text-base font-bold text-quest-1'>3200</p>
                                </div>
                                <div className="px-8 flex flex-row justify-between items-center">
                                    <div className="flex flex-row items-center gap-6">
                                        <div className='w-10 h-10 text-base font-bold text-white text-center content-center'>10</div>
                                        <img className='hidden md:block w-10 h-10 rounded-full border-2 border-white' src={profile} alt="" />
                                        <p className='text-base font-bold text-white text-clip overflow-hidden'>Paduka Javier</p>
                                    </div>
                                    <p className='text-base font-bold text-quest-1'>3200</p>
                                </div>
                                <div className="bg-white/10">
                                    <div className="px-8 py-2 flex flex-row justify-between items-center">
                                        <div className="flex flex-row items-center gap-6">
                                            <div className='w-10 h-10 text-base font-bold text-white text-center content-center'>???</div>
                                            <img className='hidden md:block w-10 h-10 rounded-full border-2 border-white' src={profile} alt="" />
                                            <p className='text-base font-bold text-white text-clip overflow-hidden'>Saya</p>
                                        </div>
                                        <p className='text-base font-bold text-quest-1'>0</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </BasedLayout>
    )
}
