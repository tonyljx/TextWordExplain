"use client";
import React from "react";
import { TypeAnimation } from "react-type-animation";

type Props = {
  words: string[];
};

export default function HeroTypewriter({ words }: Props) {
  console.log(words);

  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        "We produce food for Mice",
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        "We produce food for Hamsters",
        1000,
      ]}
      wrapper="span"
      speed={50}
    />
  );
}
