import React from "react";
import Typewriter from "typewriter-effect";
import { typeWriterString } from "./../Data";

function Type() {
  return (
    <Typewriter
      options={{
        strings: typeWriterString,
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
