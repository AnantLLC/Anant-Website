import Image from 'next/image';
import React from 'react'
import heroAsset from '../../images/homepage/hero.jpg';

export default function Hero() {
  return (
    <section className="relative w-full">
      <div className="absolute inset-0">
        <Image
          src={heroAsset}
          alt="Hero background"
          fill
          priority
          className="object-cover object-center w-full h-full"
          quality={100}
        />
      </div>
      <div className="relative z-10 flex flex-col min-h-screen py-36 px-24">
  
      </div>
    </section>
  );
}
