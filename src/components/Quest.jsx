import React from "react";
import kosmiQuest from "../assets/hero/kosmiQuest.png";
import Button from "./Button";

export default function Quest({ link }) {
  return (
    <section id="kosmiQuest" className="kosmiQuest flex justify-center py-12 md:py-16 relative">
      <div className="w-4/5 md:w-3/4 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div className="flex justify-center items-center order-first lg:order-none z-10">
          <img className="w-40 lg:w-72" src={kosmiQuest} alt="" />
        </div>
        <div className="text-white z-10">
          <h1 className="font-magmawave text-center lg:text-left text-2xl md:text-3xl lg:text-4xl leading-normal w-full bg-gradient-to-r from-based-2 to-based-3 inline-block text-transparent bg-clip-text">
            KOSMI QUEST
          </h1>
          <p className="my-4 text-center lg:text-left lg:my-9 text-sm lg:text-base leading-relaxed">
            Tantang dirimu dalam Kosmi Quest! Rasakan keseruan memecahkan setiap tantangannya dan temukan permainan yang sesuai dengan minatmu. Bergabunglah sekarang dan mulailah petualanganmu!
          </p>
          <div className="flex flex-col justify-center items-center text-center">
            <Button className={"self-stretch z-10"} children={"Kosmi Quest"} link={link} />
          </div>
        </div>
      </div>
    </section>
  );
}
