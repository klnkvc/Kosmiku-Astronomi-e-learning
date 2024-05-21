import React from 'react'
import BasedLayout from '../../layout/BasedLayout'
import Button from '../../components/Button'
import hero from '../../assets/hero/hero.png'
import explore from '../../assets/hero/explore.png'
import sources from '../../assets/hero/sources.png'
import saturnus from '../../assets/hero/saturnus.jpeg'
import mars from '../../assets/hero/mars.jpeg'
import gerhana from '../../assets/hero/gerhana.jpeg'
import Card from '../../components/Card'
import Chatbot from '../../components/Chatbot'
import Quest from '../../components/Quest'

export default function index() {
    return (
        <BasedLayout>
            <Chatbot />
            <section id='hero' className='hero flex justify-center py-12 md:py-16 relative'>
                <div className="w-4/5 md:w-3/4 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                    <div className='text-white z-10'>
                        <h1 className='font-magmawave text-3xl md:text-4xl lg:text-5xl bg-gradient-to-r from-based-2 to-based-3 inline-block text-transparent bg-clip-text'>Eksplorasi Alam Semesta</h1>
                        <p className='my-9 text-base'>Menemukan keajaiban langit dan memecahkan misteri mitos di satu tempat, petualangan luar biasa melintasi tata surya dan jauh ke angkasa.</p>
                        <div className='flex flex-col justify-center items-center text-center'>
                            <Button className={'self-stretch z-10'} children={'Jelajahi'} link={'/'} />
                        </div>
                    </div>
                    <div className='flex justify-center items-center order-first lg:order-none'>
                        <img className='w-96 animate-[hero_5s_linear_infinite]' src={hero} alt="" />
                    </div>
                </div>
                <div className="absolute w-[900px] h-[900px] -bottom-96 -left-72 bg-white/10 rounded-full blur-3xl -z-0"></div>
            </section>

            <section id='homeExplore' className='homeExplore flex justify-center py-12 md:py-16 relative'>
                <div className="w-4/5 md:w-3/4 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                    <div className='flex justify-center items-center order-first lg:order-none z-10'>
                        <img className='w-96' src={explore} alt="" />
                    </div>
                    <div className='text-white z-10'>
                        <h1 className='font-magmawave text-3xl md:text-4xl lg:text-5xl bg-gradient-to-r from-based-2 to-based-3 inline-block text-transparent bg-clip-text'>Eksplorasi Tata Surya</h1>
                        <p className='my-9 text-base'>Mari kita mulai petualangan kita di alam semesta yang luas. Kamu akan menemukan pintu gerbang menuju eksplorasi tata surya yang menakjubkan. Siapkan dirimu untuk terpesona oleh keindahan dan misteri planet-planet, bulan, dan benda langit lainnya yang menghiasi langit malam kita.</p>
                    </div>
                </div>
            </section>

            <section id='homeSources' className='homeSources flex justify-center py-12 md:py-16 relative'>
                <div className="w-4/5 md:w-3/4 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                    <div className='text-white z-10'>
                        <h1 className='font-magmawave text-3xl md:text-4xl lg:text-5xl bg-gradient-to-r from-based-2 to-based-3 inline-block text-transparent bg-clip-text'>SUMBER RELIABEL</h1>
                        <p className='my-9 text-base'>Dengan panduan para ahli astronomi dan sains, kami membawa Anda dalam perjalanan yang mendebarkan melintasi galaksi, memecahkan misteri mitos lama, dan menjelajahi rahasia yang tersembunyi di antara bintang-bintang.</p>
                    </div>
                    <div className='flex justify-center items-center order-first lg:order-none z-10'>
                        <img className='w-96' src={sources} alt="" />
                    </div>
                </div>
                <div className="absolute w-[900px] h-[900px] -bottom-96 -right-72 bg-white/10 rounded-full blur-3xl"></div>
            </section>

            <section id='homePopular' className='homePopular flex flex-col justify-center py-12 md:py-16 relative items-center'>
                <div className='text-white text-center w-4/5 md:w-3/4 grid grid-cols-1 gap-8'>
                    <h1 className='font-magmawave text-3xl md:text-4xl lg:text-5xl bg-gradient-to-r from-based to-based-1 inline-block text-transparent bg-clip-text'>Topik Populer</h1>
                    <p className='text-base mb-16'>Yuk, kita cek apa yang sebenarnya terjadi di balik cerita-cerita langit yang sering kita dengar. Apakah benar bintang jatuh itu keinginan yang dikabulkan? Temukan jawabannya di sini!</p>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 z-10">
                        <Card link={'/topic'} type={'materi'} image={saturnus} category={'Astronomi'} title={'Saturnus: Cincin dan Masa Lalu yang Tersembunyi'} description={'Telusuri rahasia tersembunyi di balik cincin yang memukau serta menjelajahi jejak masa lalu planet gas raksasa yang penuh teka-teki ini.'} />
                        <Card link={'/topic'} type={'materi'} image={mars} category={'Astronomi'} title={'Mars: Planet Merah yang Menarik'} description={'Jelajahi misteri dan keindahan planet Mars, planet merah yang penuh dengan rahasia dan potensi penelitian masa depan.'} />
                        <Card link={'/topic'} type={'materi'} image={gerhana} category={'Mitos / fakta ?'} title={'Matahari dan Bulan: Legenda di Balik Sinar'} description={'Bagaimana pengetahuan modern kita mengenai dua benda langit ini memengaruhi keyakinan dan cerita-cerita kuno.'} />
                    </div>
                </div>
            </section>

            <Quest link={'/explore'} />

            <section id='hubungi' className='hubungi flex flex-col justify-center py-12 md:py-16 relative items-center'>
                <div className='text-white text-center w-4/5 md:w-3/4 grid grid-cols-1 gap-8 z-10'>
                    <h1 className='font-magmawave text-3xl md:text-4xl lg:text-5xl bg-gradient-to-r from-based to-based-1 inline-block text-transparent bg-clip-text'>TERHUBUNG DENGAN KOSMOS</h1>
                    <p className='text-base mb-8'>Memiliki pertanyaan?, ingin bekerja sama dengan kami? hubungi kami sekarang juga untuk kolaborasi yang menakjubkan!</p>
                    <div className='flex flex-col justify-center items-center text-center'>
                        <Button className={'self-stretch z-10'} children={'Hubungi Kami'} link={'/'} />
                    </div>
                </div>
                <div className="absolute w-[900px] h-[900px] -bottom-96 -left-72 bg-white/10 rounded-full blur-3xl -z-0"></div>
            </section>
        </BasedLayout>
    )
}
