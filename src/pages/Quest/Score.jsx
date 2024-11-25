import rocket from '../../assets/decoration/rocket.png'
import profile from '../../assets/decoration/profile.png'
import goldMedal from '../../assets/decoration/goldMedal.svg'
import silverMedal from '../../assets/decoration/silverMedal.svg'
import bronzeMedal from '../../assets/decoration/bronzeMedal.svg'
import BasedLayout from '../../layout/BasedLayout'
import { Link } from 'react-router-dom'

export default function Score() {
    return (
        <BasedLayout>
            <section className='quest flex flex-col justify-center pb-12 pt-4 md:py-16 relative items-center'>
                <div className="flex flex-row items-center gap-4 xl:gap-9">
                    <img className='w-20 h-20 xl:w-40 xl:h-40' src={rocket} alt="" />
                    <h1 className='font-magmawave text-3xl md:text-4xl lg:text-5xl bg-gradient-to-r from-based to-based-1 inline-block text-transparent bg-clip-text'>Kosmi Quest</h1>
                </div>

                <div className="px-4 md:px-16 mt-4 w-full">
                    <div className="flex flex-col xl:flex-row gap-10 xl:gap-2 w-full bg-quest rounded-3xl border-4 border-quest-1 p-4 md:p-8">
                        <div className='w-full xl:w-2/3 flex flex-col justify-center items-center'>
                            <img className='w-20 h-20 md:w-40 md:h-40 rounded-full' src={profile} alt="" />
                            <h4 className='mt-4 mb-16 text-2xl lg:text-[32px] font-bold text-white'>Paduka Javier</h4>
                            <p className='text-xl lg:text-2xl font-bold text-white'>Skor</p>
                            <h4 className='mt-4 mb-16 text-[76px] md:text-[128px] font-bold text-quest-1'>100</h4>

                            <Link to={'/quest'} className='rounded-[360px] w-full lg:w-1/2 bg-quest-1 py-4 text-center text-lg lg:text-2xl font-bold text-white hover:bg-gradient-to-r hover:from-based hover:to-based-1'>Coba Lagi</Link>
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
