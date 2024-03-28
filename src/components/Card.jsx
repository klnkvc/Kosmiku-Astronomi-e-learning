import React from 'react'
import Button from './Button'

export default function Card({ image, category, title, description, descClass, type, link }) {
    return (
        <>
            {type === 'materi' ? (
                <div className='border border-white rounded-[32px] backdrop-opacity-10 backdrop-invert bg-white/10 p-4 duration-200 hover:scale-105'>
                    <div className='relative pb-10'>
                        <div className="flex justify-center">
                            <div className='rounded-[32px] w-72 h-72 bg-cover bg-center' style={{ backgroundImage: `url(${image})` }} ></div>
                        </div>
                        {
                            category === "Astronomi" ? (
                                <div className='absolute top-0 left-[15%] min-[375px]:left-[20%] min-[425px]:left-[25%] min-[638px]:left-[34%] md:left-[37%] lg:left-[15%] xl:left-[20%] w-40 xl:w-48 h-[50px] bg-gradient-to-r from-category-1 to-category-2 rounded-b-[53px]'>
                                    <p className='text-white text-center py-2 text-xl italic'>{category}</p>
                                </div>
                            ) : (
                                <div className='absolute top-0 left-[15%] min-[375px]:left-[20%] min-[425px]:left-[25%] min-[638px]:left-[34%] md:left-[37%] lg:left-[15%] xl:left-[20%] w-40 xl:w-48 h-[50px] bg-gradient-to-r from-category-3 to-category-4 rounded-b-[53px]'>
                                    <p className='text-white text-center py-2 text-xl italic'>{category}</p>
                                </div>
                            )
                        }
                        <h3 className='text-3xl font-bold text-left mt-8 line-clamp-2'>{title}</h3>
                        <p className='text-base text-left mt-3 mb-8 line-clamp-4'>{description}</p>
                        <div className="relative h-full"></div>
                        <Button className={'self-stretch flex flex-col justify-center items-center text-center absolute left-0 right-0 bottom-0'} children={'Baca'} link={link} />
                        <div className=''>
                        </div>
                    </div>
                </div>
            ) : (
                <div className='w-full border border-white rounded-[32px] backdrop-opacity-10 backdrop-invert bg-white/10 p-8 duration-200 hover:scale-105'>
                    <div className="flex justify-center">
                        <img className='h-[135px]' src={image} alt="" />
                    </div>
                    <p className='text-base font-bold text-center mt-3'>{title}</p>
                    <p className={`text-base font-medium text-center mt-1 ${descClass}`}>{description}</p>
                </div>
            )
            }
        </>
    )
}
