import BasedLayout from "../../layout/BasedLayout";
import Card from "../../components/Card";
import saturnus from "../../assets/hero/saturnus.jpeg";
import mars from "../../assets/hero/mars.jpeg";
import gerhana from "../../assets/hero/gerhana.jpeg";
import sun from "../../assets/decoration/sun.svg";
import planets from "../../assets/decoration/planets.svg";

export default function index() {
  return (
    <BasedLayout>
      <img className=" absolute h-24 top-[190px] left-1/2 ml-[-48px] lg:left-auto lg:ml-0 -z-0 lg:top-[300px] lg:right-[-280px] lg:h-[400px]" src={sun} alt="" />
      <img className="absolute top-[118px] h-60 left-1/2 ml-[-120px] lg:left-auto lg:ml-0 -z-0 lg:top-auto lg:-right-[600px] lg:h-[1000px] animate-spin-slow" src={planets} alt="" />

      <section id="hero" className="hero h-screen flex justify-center py-12 md:py-16 relative">
        <div className="w-4/5 md:w-3/4 mt-72 lg:mt-32 grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-10 items-center">
          <div className="text-white z-10">
            <h1 className="font-magmawave mb-2 lg:mb-9 lg:text-left w-full text-center text-2xl md:text-3xl lg:text-4xl leading-normal bg-gradient-to-r from-based-2 to-based-3 inline-block text-transparent bg-clip-text">
              Eksplorasi Alam Semesta
            </h1>
            <form action="" method="post">
              <div className="relative text-gray-600 focus-within:text-gray-400">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3 lg:pl-6">
                  <button type="submit" className="p-1 focus:outline-none focus:shadow-outline">
                    <svg fill="none" stroke="rgb(107 114 128)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" className="w-6 h-6">
                      <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                    </svg>
                  </button>
                </span>
                <div className="bg-gradient-to-r from-based to-based-1 rounded-[60px] p-[3px] lg:p-1">
                  <input
                    type="search"
                    name="q"
                    className="py-3 px-6 w-full rounded-[60px] text-xs lg:text-base text-white bg-landing pl-14 focus:outline-none focus:bg-landing focus:text-gray-900"
                    placeholder="Telusuri Topik"
                    autoComplete="off"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="absolute w-[900px] h-[900px] -bottom-96 -left-72 bg-white/10 rounded-full blur-3xl -z-0"></div>
      </section>

      <section id="astronomi" className="astronomi flex flex-col justify-center py-12 md:py-16 relative items-center">
        <div className="text-white text-center w-4/5 md:w-3/4 grid grid-cols-1 gap-2 lg:gap-8">
          <h1 className="font-magmawave text-center text-2xl md:text-3xl lg:text-4xl leading-normal bg-gradient-to-r from-based to-based-1 inline-block text-transparent bg-clip-text">ASTRONOMI</h1>
          <p className="my-4 lg:my-9 text-sm lg:text-base leading-relaxed">
            Yuk, kita cek apa yang sebenarnya terjadi di balik cerita-cerita langit yang sering kita dengar. Apakah benar bintang jatuh itu keinginan yang dikabulkan? Temukan jawabannya di sini!
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <Card
              link={"/topic"}
              type={"materi"}
              image={saturnus}
              category={"Astronomi"}
              title={"Saturnus: Cincin dan Masa Lalu yang Tersembunyi"}
              description={"Telusuri rahasia tersembunyi di balik cincin yang memukau serta menjelajahi jejak masa lalu planet gas raksasa yang penuh teka-teki ini."}
            />
            <Card
              link={"/topic"}
              type={"materi"}
              image={mars}
              category={"Astronomi"}
              title={"Mars: Planet Merah yang Menarik"}
              description={"Jelajahi misteri dan keindahan planet Mars, planet merah yang penuh dengan rahasia dan potensi penelitian masa depan."}
            />
            <Card
              link={"/topic"}
              type={"materi"}
              image={gerhana}
              category={"Astronomi"}
              title={"Matahari dan Bulan: Legenda di Balik Sinar"}
              description={"Bagaimana pengetahuan modern kita mengenai dua benda langit ini memengaruhi keyakinan dan cerita-cerita kuno."}
            />
          </div>
        </div>
      </section>

      <section id="mitos" className="mitos flex flex-col justify-center py-12 md:py-16 relative items-center">
        <div className="text-white text-center w-4/5 md:w-3/4 grid grid-cols-1 gap-2 lg:gap-8">
          <h1 className="font-magmawave text-center text-2xl md:text-3xl lg:text-4xl leading-normal bg-gradient-to-r from-based to-based-1 inline-block text-transparent bg-clip-text">
            MITOS? FAKTA!
          </h1>
          <p className="my-4 lg:my-9 text-sm lg:text-base leading-relaxed">
            Kamu pernah dengar mitos? apakah yakin itu sebuah mitos? <br /> Yuk telusuri penjelasannya!
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <Card
              link={"/topic"}
              type={"materi"}
              image={saturnus}
              category={"Mitos / Fakta ?"}
              title={"Saturnus: Cincin dan Masa Lalu yang Tersembunyi"}
              description={"Telusuri rahasia tersembunyi di balik cincin yang memukau serta menjelajahi jejak masa lalu planet gas raksasa yang penuh teka-teki ini."}
            />
            <Card
              link={"/topic"}
              type={"materi"}
              image={mars}
              category={"Mitos / Fakta ?"}
              title={"Mars: Planet Merah yang Menarik"}
              description={"Jelajahi misteri dan keindahan planet Mars, planet merah yang penuh dengan rahasia dan potensi penelitian masa depan."}
            />
            <Card
              link={"/topic"}
              type={"materi"}
              image={gerhana}
              category={"Mitos / Fakta ?"}
              title={"Matahari dan Bulan: Legenda di Balik Sinar"}
              description={"Bagaimana pengetahuan modern kita mengenai dua benda langit ini memengaruhi keyakinan dan cerita-cerita kuno."}
            />
          </div>
        </div>
      </section>
    </BasedLayout>
  );
}
