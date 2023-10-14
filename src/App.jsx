import React, {useState} from "react";


import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";
import Timeline from "./Components/Timeline/Timeline";

export default function App() {
  const [showSide, setShowSide] = useState(false);

  function onNavClickHandle() {
    setShowSide(true);
  }

  function onNavClickHideHandle() {
    setShowSide(false);
  }
  return (
    <>
      <Navbar showSide={showSide} onNavClickHandle={onNavClickHandle} onNavClickHideHandle={onNavClickHideHandle} />
      <Hero />
      <Timeline/>
    </>
  );
}
