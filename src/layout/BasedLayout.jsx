import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import background from "../assets/decoration/background.png";
import background2 from "../assets/decoration/background2.png";
import deco1 from "../assets/decoration/deco1.png";

export default function BasedLayout(props) {
    return (
        <div className='relative overflow-hidden bg-landing'>
            <div className="bg-repeat-y z-10" style={{ backgroundImage: `url(${background})` }}>
                <div className="bg-repeat-y z-10" style={{ backgroundImage: `url(${background2})` }}>
                    <Navbar className={'z-10'} />
                    <div className='max-w-[1700px] mx-auto'>{props.children}</div>
                    <Footer />
                </div>
            </div>
        </div>
    )
}
