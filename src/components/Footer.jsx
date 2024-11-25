import logo from '../assets/decoration/logo.png'
import instagram from '../assets/decoration/instagram.png'
import linkedIn from '../assets/decoration/linkedIn.png'
import twitter from '../assets/decoration/twitter.png'
import facebook from '../assets/decoration/facebook.png'
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <section id='footer' className="footer">
            <div className='max-w-[1700px] mx-auto px-6 md:px-9 lg:px-32 py-6 pt-12 md:pt-16 md:pb-6 text-white'>
                <div className="flex flex-col md:flex-row gap-y-9 md:gap-x-12 md:gap-y-0">
                    <Link to={'/'} className='w-full md:w-2/5 z-10'>
                        <img className='mb-6 w-[250px]' src={logo} alt="" />
                    </Link>
                    <div className='w-full md:w-1/5 flex flex-col'>
                        <h4 className='text-base md:text-xl font-bold mb-3 bg-gradient-to-r from-based to-based-1 inline-block text-transparent bg-clip-text'>Navigasi</h4>
                        <div className='flex flex-col gap-y-1'>
                            <Link className='text-base z-10' to={'/'}>Beranda</Link>
                            <Link className='text-base z-10' to={'/'}>Jelajahi</Link>
                            <Link className='text-base z-10' to={'/'}>Tata Surya</Link>
                        </div>
                    </div>
                    <div className='w-full md:w-1/5 flex flex-col'>
                        <h4 className='text-base md:text-xl font-bold mb-3 bg-gradient-to-r from-based to-based-1 inline-block text-transparent bg-clip-text'>Tentang Kami</h4>
                        <div className='flex flex-col gap-y-1'>
                            <Link className='text-base z-10' to={'/'}>FAQ</Link>
                            <Link className='text-base z-10' to={'/'}>Perkenalan</Link>
                        </div>
                    </div>
                    <div className='w-full md:w-1/5 flex flex-col'>
                        <h4 className='text-base md:text-xl font-bold mb-3 bg-gradient-to-r from-based to-based-1 inline-block text-transparent bg-clip-text'>Hubungi Kami</h4>
                        <div className='flex flex-col gap-y-1'>
                            <Link className='text-base z-10' to={'/'}>085885502540</Link>
                            <Link className='text-base z-10' to={'/'}>kosmiku@team.com</Link>
                        </div>
                    </div>
                    <div className='w-full md:w-1/5 flex flex-col'>
                        <h4 className='text-base md:text-xl font-bold mb-3 bg-gradient-to-r from-based to-based-1 inline-block text-transparent bg-clip-text'>Ikuti Kami</h4>
                        <div className='flex flex-row gap-4'>
                            <Link className='text-base z-10' to={'/'}><img className='w-6 h-6' src={instagram} alt="" /></Link>
                            <Link className='text-base z-10' to={'/'}><img className='w-6 h-6' src={linkedIn} alt="" /></Link>
                            <Link className='text-base z-10' to={'/'}><img className='w-6 h-6' src={twitter} alt="" /></Link>
                            <Link className='text-base z-10' to={'/'}><img className='w-6 h-6' src={facebook} alt="" /></Link>
                        </div>
                    </div>
                </div>
                <hr className="relative h-px z-10 my-16 bg-white border-0"></hr>
                <p className='relative z-10 text-sm text-center mb-10'>© Copyright 2024, All Rights Reserved by Kosmiku</p>
            </div>
        </section>
    )
}
