import React from 'react'
import BasedLayout from '../../layout/BasedLayout'
import saturn from '../../assets/topic/saturn.png'
import saturnus from '../../assets/topic/saturnus.png'
import Discussion from '../../components/Discussion'

export default function index() {
    return (
        <BasedLayout>
            <section id='materi' className='materi flex justify-center py-12 md:py-16 relative'>
                <div className="w-4/5 md:w-3/4 grid grid-cols-1 items-center">
                    <div className='text-white z-10'>
                        <h1 className='text-center font-magmawave text-3xl md:text-4xl lg:text-5xl bg-gradient-to-r from-based-2 to-based-3 inline-block text-transparent bg-clip-text'>Saturnus: Cincin dan Masa Lalu yang Tersembunyi</h1>
                        <div className="flex justify-center my-16">
                            <img className='max-w-[400px] animate-[hero_5s_linear_infinite]' src={saturn} alt="" />
                        </div>
                        <p className='text-center text-base lg:text-xl'>Saturnus adalah planet keenam di tata surya dengan jarak 1.434 miliar kilometer dari Matahari. Planet ini memiliki diameter 116.464 kilometer, kemudian Saturnus masuk ke dalam kelompok planet besar serta menjadi planet terbesar kedua di tata surya setelah Planet Jupiter. Beberapa tahun kemudian, para astronom dari Observatorium Leiden di Belanda menemukan sistem cincin masif dengan bintang beserta planet di dalamnya.</p>
                        <div className="flex justify-center my-16">
                            <img className='w-[500px] md:max-w-[600px] rounded-[36px]' src={saturnus} alt="" />
                        </div>
                        <p className='text-center text-base lg:text-xl'>Saturnus juga terkenal memiliki cincin yang besar. Dilansir dari laman nasa.gov, Saturnus juga disebut sebagai The Jewel of the Solar System atau “Permata Tata Surya”. Manusia telah mengamati planet Saturnus sejak lama. Bahkan, pengamatan jarak dekat pertama kali ini dilakukan pada tanggal 1 September 1971 dengan menggunakan pesawat ruang angkasa Pioneer 11 yang terbang di dekat Planet Saturnus.</p>
                    </div>
                </div>
                <div className="absolute w-[900px] h-[900px] -bottom-96 -left-72 bg-white/10 rounded-full blur-3xl -z-0"></div>
            </section>
            <Discussion />
        </BasedLayout>
    )
}
