import React from "react";

import {ImQuotesLeft} from "react-icons/im"

export default function Hero() {
  return (
    <div className="mt-24 font-gideonRoman mx-auto w-fit mb-96">
      <div
        className="rounded-lg w-fit mx-auto relative"
        style={{ backgroundImage: "url('./src/assets/pattern.jpg')" }}
      >
        <div
          className="rounded-full w-20 h-20 bg-red-500 absolute -top-5 -right-5 bg-cover"
          style={{ backgroundImage: "url('./src/assets/whitePattern.jpg')" }}
        ></div>
        <img
          src="./src/assets/hero.png"
          width={300}
          className="block"
          alt="Muhammad Ali"
        />
      </div>
      <div className="mt-4">
        <h2 className="font-bold text-2xl">American Professional Boxer</h2>
        <h3 className="font-bold text-xl text-right">the Greatest</h3>
        <blockquote
          cite="https://www.espn.com/boxing/story/_/id/15930888/muhammad-ali-10-best-quotes"
          className="font-bold text-base text-center mt-4 relative"
        >
            <span className="absolute -top-5 -left-4 text-2xl">
                <ImQuotesLeft />
            </span>
            The Will Must Be Stronger Than the Skill
        </blockquote>
      </div>
    </div>
  );
}
