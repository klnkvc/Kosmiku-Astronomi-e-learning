import { useState } from 'react'
import Button from './Button'
import reply from '../assets/decoration/reply.svg'
import comment from '../assets/decoration/comment.svg'
import like from '../assets/decoration/like.svg'
import { Link } from 'react-router-dom'

export default function Discussion() {
    const [openDiscussion, setOpenDiscussion] = useState(false);

    return (
        <section id='discussion' className='discussion flex justify-center py-12 md:py-16 relative'>
            <div className="w-4/5 md:w-3/4 grid grid-cols-1 items-center">
                <h1 className='font-magmawave mb-16 text-center text-3xl md:text-4xl lg:text-5xl bg-gradient-to-r from-based to-based-1 inline-block text-transparent bg-clip-text'>Ayo berdiskusi !</h1>

                <div className="grid grid-col-1 gap-8">
                    <div className='flex flex-col lg:flex-row gap-8 rounded-[32px] backdrop-opacity-10 backdrop-invert bg-white/10 p-8'>
                        <div className="flex items-center gap-4">
                            <div className='rounded-full w-[60px] h-[60px] bg-cover bg-center' style={{ backgroundImage: `url('https://media.suara.com/pictures/653x366/2024/02/27/18939-dpr-ian-instagramcomdprian.jpg')` }} ></div>
                            <p className='lg:hidden text-base md:text-xl font-bold text-white'>DPR Ian</p>
                        </div>
                        <form className='w-full flex flex-col md:flex-row gap-8' action="" method="post">
                            <input type="text" name="comment" className="p-8 w-full rounded-[60px] text-base text-white bg-transparent outline outline-white focus:bg-transparent focus:text-gray-900" placeholder="Tambahkan Komentar" autoComplete="off" />
                            <Button type={'button'} className={'h-fit w-fit'} children={'Kirim'} />
                        </form>
                    </div>

                    <div className='rounded-[32px] backdrop-opacity-10 backdrop-invert bg-white/10 p-8'>
                        <div className="flex flex-col lg:flex-row gap-1 lg:gap-0 justify-between lg:items-center">
                            <div className="flex items-center gap-4">
                                <div className='rounded-full w-[60px] h-[60px] bg-cover bg-center' style={{ backgroundImage: `url('https://media.suara.com/pictures/653x366/2024/02/27/18939-dpr-ian-instagramcomdprian.jpg')` }} ></div>
                                <p className='text-base md:text-xl font-bold text-white'>DPR Ian</p>
                            </div>
                            <p className='text-base font-light text-white/50'>1 month ago</p>
                        </div>
                        <p className='text-base my-8 text-white'>Wah, Saturnus selalu menjadi planet favoritku! Penasaran banget dengan cerita di balik cincinnya yang begitu spektakuler ini.</p>
                        <div className="flex justify-end gap-8">
                            <Link className='flex items-center gap-2' to={'/topic'}>
                                <img src={reply} alt="" />
                                <p className='text-base font-medium text-based-1'>Balas</p>
                            </Link>
                            <Link className='flex items-center gap-2' to={'/topic'}>
                                <img src={comment} alt="" />
                                <p className='text-base font-medium text-based-1'>3</p>
                            </Link>
                            <Link className='flex items-center gap-2' to={'/topic'}>
                                <img src={like} alt="" />
                                <p className='text-base font-medium text-based-1'>6</p>
                            </Link>
                        </div>
                    </div>

                    <div className='flex flex-col gap-8'>
                        <div className='rounded-[32px] backdrop-opacity-10 backdrop-invert bg-white/10 p-8'>
                            <div className="flex flex-col lg:flex-row gap-1 lg:gap-0 justify-between lg:items-center">
                                <div className="flex items-center gap-4">
                                    <div className='rounded-full w-[60px] h-[60px] bg-cover bg-center' style={{ backgroundImage: `url('https://media.suara.com/pictures/653x366/2024/02/27/18939-dpr-ian-instagramcomdprian.jpg')` }} ></div>
                                    <p className='text-base md:text-xl font-bold text-white'>DPR Ian</p>
                                </div>
                                <p className='text-base font-light text-white/50'>1 month ago</p>
                            </div>
                            <p className='text-base my-8 text-white'>Wah, Saturnus selalu menjadi planet favoritku! Penasaran banget dengan cerita di balik cincinnya yang begitu spektakuler ini.</p>
                            <div className="flex justify-end gap-8">
                                <Link className='flex items-center gap-2' to={'/topic'}>
                                    <img src={reply} alt="" />
                                    <p className='text-base font-medium text-based-1'>Balas</p>
                                </Link>
                                <Link className='flex items-center gap-2' to={'/topic'}>
                                    <img src={comment} alt="" />
                                    <p className='text-base font-medium text-based-1'>3</p>
                                </Link>
                                <Link className='flex items-center gap-2' to={'/topic'}>
                                    <img src={like} alt="" />
                                    <p className='text-base font-medium text-based-1'>6</p>
                                </Link>
                            </div>
                        </div>

                        {openDiscussion ? (
                            <div className="flex flex-row">
                                <div className='w-[2px] h-full bg-gradient-to-b from-based to-based-1 mx-8'></div>
                                <div className='flex flex-col gap-8'>
                                    <div className='rounded-[32px] backdrop-opacity-10 backdrop-invert bg-white/10 p-8'>
                                        <div className="flex flex-col lg:flex-row gap-1 lg:gap-0 justify-between lg:items-center">
                                            <div className="flex items-center gap-4">
                                                <div className='rounded-full w-[60px] h-[60px] bg-cover bg-center' style={{ backgroundImage: `url('https://media.suara.com/pictures/653x366/2024/02/27/18939-dpr-ian-instagramcomdprian.jpg')` }} ></div>
                                                <p className='text-base md:text-xl font-bold text-white'>DPR Ian</p>
                                            </div>
                                            <p className='text-base font-light text-white/50'>1 month ago</p>
                                        </div>
                                        <p className='text-base my-8 text-white'>Wah, Saturnus selalu menjadi planet favoritku! Penasaran banget dengan cerita di balik cincinnya yang begitu spektakuler ini.</p>
                                        <div className="flex justify-end gap-8">
                                            <Link className='flex items-center gap-2' to={'/topic'}>
                                                <img src={reply} alt="" />
                                                <p className='text-base font-medium text-based-1'>Balas</p>
                                            </Link>
                                            <Link className='flex items-center gap-2' to={'/topic'}>
                                                <img src={comment} alt="" />
                                                <p className='text-base font-medium text-based-1'>3</p>
                                            </Link>
                                            <Link className='flex items-center gap-2' to={'/topic'}>
                                                <img src={like} alt="" />
                                                <p className='text-base font-medium text-based-1'>6</p>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className='rounded-[32px] backdrop-opacity-10 backdrop-invert bg-white/10 p-8'>
                                        <div className="flex flex-col lg:flex-row gap-1 lg:gap-0 justify-between lg:items-center">
                                            <div className="flex items-center gap-4">
                                                <div className='rounded-full w-[60px] h-[60px] bg-cover bg-center' style={{ backgroundImage: `url('https://media.suara.com/pictures/653x366/2024/02/27/18939-dpr-ian-instagramcomdprian.jpg')` }} ></div>
                                                <p className='text-base md:text-xl font-bold text-white'>DPR Ian</p>
                                            </div>
                                            <p className='text-base font-light text-white/50'>1 month ago</p>
                                        </div>
                                        <p className='text-base my-8 text-white'>Wah, Saturnus selalu menjadi planet favoritku! Penasaran banget dengan cerita di balik cincinnya yang begitu spektakuler ini.</p>
                                        <div className="flex justify-end gap-8">
                                            <Link className='flex items-center gap-2' to={'/topic'}>
                                                <img src={reply} alt="" />
                                                <p className='text-base font-medium text-based-1'>Balas</p>
                                            </Link>
                                            <Link className='flex items-center gap-2' to={'/topic'}>
                                                <img src={comment} alt="" />
                                                <p className='text-base font-medium text-based-1'>3</p>
                                            </Link>
                                            <Link className='flex items-center gap-2' to={'/topic'}>
                                                <img src={like} alt="" />
                                                <p className='text-base font-medium text-based-1'>6</p>
                                            </Link>
                                        </div>
                                    </div>
                                    <Button type={'clickable'} variant={'primary'} onClick={() => setOpenDiscussion(!openDiscussion)} children={'Tutup Komentar'} />
                                </div>
                            </div>
                        ) :
                            <Button type={'clickable'} variant={'primary'} onClick={() => setOpenDiscussion(!openDiscussion)} children={'Muat Komentar Lainnya'} />
                        }

                        <Button type={'button'} variant={'outline'} children={'Simpan Topik'} />
                    </div>
                </div>
            </div>
        </section>
    )
}
