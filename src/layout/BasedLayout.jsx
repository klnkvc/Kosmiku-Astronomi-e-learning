import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import background from "../assets/decoration/background.png";
import background2 from "../assets/decoration/background2.png";
import deco1 from "../assets/decoration/deco1.png";

export default function BasedLayout(props) {
  return (
    <div className="relative overflow-hidden bg-landing">
      <div className="bg-repeat-y bg-right lg:bg-left-top z-10" style={{ backgroundImage: `url(${background})` }}>
        <div className="bg-repeat-y bg-right lg:bg-left-top z-10" style={{ backgroundImage: `url(${background2})` }}>
          <img className="hidden lg:block absolute top-0 -z-0" src={deco1} alt="" />
          <img className="hidden lg:block absolute top-0 -z-0" src={background} alt="" />
          <img className="hidden lg:block absolute top-0 -z-0" src={background2} alt="" />
          <img className="hidden lg:block absolute top-[30%] -z-0" src={background} alt="" />
          <img className="hidden lg:block absolute top-[30%] -z-0" src={background2} alt="" />
          <div className="absolute w-96 h-96 -top-20 -right-20 bg-white/10 rounded-full blur-2xl -z-0"></div>

          <Navbar className={"z-10"} />

          <div className="max-w-[1700px] mx-auto">{props.children}</div>

          <Footer />
        </div>
      </div>
    </div>
  );
}
