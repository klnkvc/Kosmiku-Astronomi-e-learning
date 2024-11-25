import BasedLayout from "../../layout/BasedLayout";
import hero from "../../assets/aboutUs/hero.png";
import explore from "../../assets/hero/explore.png";
import sources from "../../assets/hero/sources.png";
import avatar1 from "../../assets/aboutUs/avatar1.png";
import avatar2 from "../../assets/aboutUs/avatar2.png";
import avatar3 from "../../assets/aboutUs/avatar3.png";
import avatar4 from "../../assets/aboutUs/avatar4.png";
import avatar5 from "../../assets/aboutUs/avatar5.png";
import avatar6 from "../../assets/aboutUs/avatar6.png";
import avatar7 from "../../assets/aboutUs/Alhadi.png";
import avatar8 from "../../assets/aboutUs/Filza.png";
import avatar9 from "../../assets/aboutUs/Iqbal.png";
import avatar10 from "../../assets/aboutUs/Rahmad.png";
import Card from "../../components/Card";

export default function index() {
  return (
    <BasedLayout>
      <section id="about" className="about flex justify-center py-12 md:py-16 relative">
        <div className="w-4/5 md:w-3/4 mt-72 lg:mt-32 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="text-white z-10">
            <h1 className="font-magmawave mb-2 lg:mb-9 lg:text-left w-full text-center text-2xl md:text-3xl lg:text-4xl leading-normal bg-gradient-to-r from-based-2 to-based-3 inline-block text-transparent bg-clip-text">
              Eksplorasi Alam Semesta
            </h1>
            <p className="my-4 lg:my-9 text-sm lg:text-base">
              Selamat datang di kosmiku, tempat di mana pengetahuan tentang astronomi bertemu dengan keindahan alam semesta. Kami adalah pusat pengetahuan interaktif yang didedikasikan untuk
              memperluas pemahaman masyarakat tentang tata surya, bintang, dan fenomena luar angkasa lainnya.
            </p>
          </div>
          <div className="flex justify-center items-center order-first lg:order-none z-10">
            <img className="w-96 animate-[hero_5s_linear_infinite]" src={hero} alt="" />
          </div>
        </div>
        <div className="absolute w-[900px] h-[900px] -bottom-96 -left-72 bg-white/10 rounded-full blur-3xl -z-0"></div>
      </section>

      <section id="aboutExplore" className="aboutExplore flex justify-center py-12 md:py-16 relative">
        <div className="w-4/5 md:w-3/4 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="flex justify-center items-center order-first lg:order-none z-10">
            <img className="w-96" src={explore} alt="" />
          </div>
          <div className="text-white z-10">
            <h1 className="font-magmawave text-center text-2xl md:text-3xl lg:text-4xl leading-normal bg-gradient-to-r from-based-2 to-based-3 inline-block text-transparent bg-clip-text">
              Tata Surya
            </h1>
            <p className="my-4 lg:my-9 text-sm lg:text-base">
              Eksplorasi dan pemahaman tentang alam semesta adalah kunci untuk memahami tempat kita di dunia ini. Melalui konten edukatif kami yang mendalam dan terpercaya, kami bertujuan untuk
              menginspirasi dan mendidik pengunjung kami tentang keajaiban kosmos yang tak terbatas.
            </p>
          </div>
        </div>
      </section>

      <section id="aboutSources" className="aboutSources flex justify-center py-12 md:py-16 relative">
        <div className="w-4/5 md:w-3/4 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="text-white z-10">
            <h1 className="font-magmawave text-center text-2xl md:text-3xl lg:text-4xl leading-normal bg-gradient-to-r from-based-2 to-based-3 inline-block text-transparent bg-clip-text">
              SUMBER RELIABEL
            </h1>
            <p className="my-4 lg:my-9 text-sm lg:text-base leading-relaxed">
              Dengan panduan para ahli astronomi dan sains, kami membawa Anda dalam perjalanan yang mendebarkan melintasi galaksi, memecahkan misteri mitos lama, dan menjelajahi rahasia yang
              tersembunyi di antara bintang-bintang.
            </p>
          </div>
          <div className="flex justify-center items-center order-first lg:order-none z-10">
            <img className="w-96" src={sources} alt="" />
          </div>
        </div>
        <div className="absolute w-[900px] h-[900px] -bottom-96 -right-72 bg-white/10 rounded-full blur-3xl"></div>
      </section>

      <section id="team" className="team flex flex-col justify-center py-12 md:py-16 relative items-center">
        <div className="text-white text-center w-4/5 md:w-3/4 grid grid-cols-1 gap-8 z-10">
          <h1 className="font-magmawave text-center text-2xl md:text-3xl lg:text-4xl leading-normal bg-gradient-to-r from-based to-based-1 inline-block text-transparent bg-clip-text">TIM KAMI</h1>
          <p className="my-4 mb-16 text-sm lg:text-base leading-relaxed">
            Dibantu oleh desainer dan pengembang web yang berbakat, kami telah menciptakan pengalaman online yang menakjubkan dan mudah dinavigasi bagi pengunjung kami. Dengan perpaduan desain yang
            menarik dan fungsionalitas yang intuitif, mereka memastikan bahwa setiap pengguna merasa nyaman dan terinspirasi saat menjelajahi situs kami.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 content-center gap-10 text-white z-10">
          <Card image={avatar1} title={"Ramdani Tresno"} description={"Designer"} descClass={"text-white/50"} />
          <Card image={avatar2} title={"Lelinta Br Perangin Angin"} description={"Designer"} descClass={"text-white/50"} />
          <Card image={avatar3} title={"Azkhaladiva Febryolandra"} description={"Designer"} descClass={"text-white/50"} />
          <Card image={avatar4} title={"Charles Alexander Ririmasse"} description={"Developer"} descClass={"text-white/50"} />
          <Card image={avatar5} title={"Muhammad Habib Yusuf"} description={"Developer"} descClass={"text-white/50"} />
          <Card image={avatar6} title={"Meisha Afifah Putri"} description={"Developer"} descClass={"text-white/50"} />
          <Card image={avatar7} title={"Alhadi"} description={"Developer"} descClass={"text-white/50"} />
          <Card image={avatar8} title={"Filza Rizki Ramadhan"} description={"Developer"} descClass={"text-white/50"} />
          <div className="grid grid-cols-subgrid gap-10 md:col-span-2 lg:col-span-4">
            <div className="lg:col-start-2">
              <Card image={avatar9} title={"Iqbal Maulana Kholidi"} description={"Developer"} descClass={"text-white/50"} />
            </div>
            <div className="lg:col-start-3">
              <Card image={avatar10} title={"Rahmad Daniel Pardamean N"} description={"Developer"} descClass={"text-white/50"} />
            </div>
          </div>
        </div>

        <p className="z-10 text-xl font-extrabold mt-16 mb-4 bg-gradient-to-r from-based to-based-1 inline-block text-transparent bg-clip-text">Special Thanks To</p>
        <p className="z-10 text-xl text-white">
          Perancang Ilustrasi :{" "}
          <span>
            <a href="https://www.freepik.com/author/catalyststuff">catalystuff</a>
          </span>
        </p>

        <div className="absolute w-[900px] h-[900px] -bottom-96 -left-72 bg-white/10 rounded-full blur-3xl -z-0"></div>
      </section>
    </BasedLayout>
  );
}
