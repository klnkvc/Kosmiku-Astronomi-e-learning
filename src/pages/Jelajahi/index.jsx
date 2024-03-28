import React from 'react'
import BasedLayout from '../../layout/BasedLayout'
import Card from '../../components/Card'
import saturnus from '../../assets/hero/saturnus.jpeg'
import mars from '../../assets/hero/mars.jpeg'
import gerhana from '../../assets/hero/gerhana.jpeg'
import sun from '../../assets/decoration/sun.png'
import planets from '../../assets/decoration/planets.png'

export default function index() {
    return (
        <BasedLayout>
            <img className='hidden lg:block absolute -z-0 top-[300px] right-0 h-[400px]' src={sun} alt="" />
            <img className='hidden lg:block absolute -z-0 top-1 xl:top-0 -right-[600px] h-[1000px] animate-spin-slow' src={planets} alt="" />

            <section id='hero' className='hero flex justify-center py-12 md:py-16 relative'>
                <div className="w-4/5 md:w-3/4 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                    <div className='text-white z-10'>
                        <h1 className='font-magmawave mb-9 text-3xl md:text-4xl lg:text-5xl bg-gradient-to-r from-based-2 to-based-3 inline-block text-transparent bg-clip-text'>Eksplorasi Alam Semesta</h1>
                        <form action="" method="post">
                            <div class="relative text-gray-600 focus-within:text-gray-400">
                                <span class="absolute inset-y-0 left-0 flex items-center pl-6">
                                    <button type="submit" class="p-1 focus:outline-none focus:shadow-outline">
                                        <svg fill="none" stroke="rgb(107 114 128)" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" class="w-6 h-6"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                                    </button>
                                </span>
                                <div className='bg-gradient-to-r from-based to-based-1 rounded-[60px] p-1'>
                                <input type="search" name="q" class="py-3 px-6 w-full rounded-[60px] text-base text-white bg-landing pl-14 focus:outline-none focus:bg-landing focus:text-gray-900" placeholder="Telusuri Topik" autocomplete="off" />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="absolute w-[900px] h-[900px] -bottom-96 -left-72 bg-white/10 rounded-full blur-3xl -z-0"></div>
            </section>

            <section id='astronomi' className='astronomi flex flex-col justify-center py-12 md:py-16 relative items-center'>
                <div className='text-white text-center w-4/5 md:w-3/4 grid grid-cols-1 gap-8'>
                    <h1 className='font-magmawave text-3xl md:text-4xl lg:text-5xl bg-gradient-to-r from-based to-based-1 inline-block text-transparent bg-clip-text'>ASTRONOMI</h1>
                    <p className='text-base mb-16'>Yuk, kita cek apa yang sebenarnya terjadi di balik cerita-cerita langit yang sering kita dengar. Apakah benar bintang jatuh itu keinginan yang dikabulkan? Temukan jawabannya di sini!</p>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                        <Card type={'materi'} image={saturnus} category={'Astronomi'} title={'Saturnus: Cincin dan Masa Lalu yang Tersembunyi'} description={'Telusuri rahasia tersembunyi di balik cincin yang memukau serta menjelajahi jejak masa lalu planet gas raksasa yang penuh teka-teki ini.'} />
                        <Card type={'materi'} image={mars} category={'Astronomi'} title={'Mars: Planet Merah yang Menarik'} description={'Jelajahi misteri dan keindahan planet Mars, planet merah yang penuh dengan rahasia dan potensi penelitian masa depan.'} />
                        <Card type={'materi'} image={gerhana} category={'Astronomi'} title={'Matahari dan Bulan: Legenda di Balik Sinar'} description={'Bagaimana pengetahuan modern kita mengenai dua benda langit ini memengaruhi keyakinan dan cerita-cerita kuno.'} />
                    </div>
                </div>
            </section>

            <section id='mitos' className='mitos flex flex-col justify-center py-12 md:py-16 relative items-center'>
                <div className='text-white text-center w-4/5 md:w-3/4 grid grid-cols-1 gap-8'>
                    <h1 className='font-magmawave text-3xl md:text-4xl lg:text-5xl bg-gradient-to-r from-based to-based-1 inline-block text-transparent bg-clip-text'>MITOS? FAKTA!</h1>
                    <p className='text-base mb-16'>Kamu pernah dengar mitos? apakah yakin itu sebuah mitos? <br /> Yuk telusuri penjelasannya!</p>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                        <Card type={'materi'} image={saturnus} category={'Mitos / Fakta ?'} title={'Saturnus: Cincin dan Masa Lalu yang Tersembunyi'} description={'Telusuri rahasia tersembunyi di balik cincin yang memukau serta menjelajahi jejak masa lalu planet gas raksasa yang penuh teka-teki ini.'} />
                        <Card type={'materi'} image={mars} category={'Mitos / Fakta ?'} title={'Mars: Planet Merah yang Menarik'} description={'Jelajahi misteri dan keindahan planet Mars, planet merah yang penuh dengan rahasia dan potensi penelitian masa depan.'} />
                        <Card type={'materi'} image={gerhana} category={'Mitos / Fakta ?'} title={'Matahari dan Bulan: Legenda di Balik Sinar'} description={'Bagaimana pengetahuan modern kita mengenai dua benda langit ini memengaruhi keyakinan dan cerita-cerita kuno.'} />
                    </div>
                </div>
            </section>
        </BasedLayout>
    )
}
