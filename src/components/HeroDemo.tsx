"use client";
import React from "react";
import { HeroParallax } from "@/components/ui/hero-parallax";
import { heroImages } from "@/utils/constants";

export function HeroParallaxDemo() {
  return <HeroParallax products={heroImages} />;
}
