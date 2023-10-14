import React from "react";

import { ImQuotesLeft } from "react-icons/im";

export default function Hero() {
  return (
    <div className="mt-24 font-gideonRoman mx-auto w-fit md:flex gap-6">
      <div
        className="rounded-lg w-fit mx-auto relative flex"
        style={{ backgroundImage: "url('./src/assets/pattern.jpg')" }}
      >
        <div
          className="rounded-full w-20 h-20 bg-red-500 absolute -top-5 -right-5 bg-cover"
          style={{ backgroundImage: "url('./src/assets/whitePattern.jpg')" }}
        ></div>
        <img
          src="./src/assets/hero.png"
          className="block"
          width={300}
          alt="Muhammad Ali Hero Image"
        /> q
        <div className="triangle absolute -left-8 -bottom-5"></div>
      </div>
      <div className="mt-8 w-fit mx-auto">
        <div className="mx-auto w-full md:w-fit flex flex-col items-center">
          <h2 className="flex justify-end gap-2 font-bold text-2xl md:text-3xl">
            <span>American</span>
            <span>Professional</span>
            <span>Boxer</span>
          </h2>
          <h3 className="font-bold text-xl text-right self-end">
            the Greatest
          </h3>
        </div>
        <blockquote
          cite="https://www.espn.com/boxing/story/_/id/15930888/muhammad-ali-10-best-quotes"
          className="font-bold md:text-xl text-base text-center mt-4 relative w-fit mx-auto"
        >
          <span className="absolute -top-5 -left-4 text-2xl">
            <ImQuotesLeft />
          </span>
          The Will Must Be Stronger Than the Skill
        </blockquote>
        <p className="block md:max-w-md max-w-xs mx-auto text-justify mt-4 text-sm md:text-lg">
          Muhammad Ali, original name Cassius Marcellus Clay, Jr., (born January
          17, 1942, Louisville, Kentucky, U.S.—died June 3, 2016, Scottsdale,
          Arizona), American professional boxer and social activist. Ali was the
          first fighter to win the world heavyweight championship on three
          separate occasions; he successfully defended this title 19 times.
        </p>
      </div>
    </div>
  );
}
