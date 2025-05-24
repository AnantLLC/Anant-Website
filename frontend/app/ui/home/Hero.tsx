import Image from 'next/image';
import React from 'react'
import heroAsset from '../../images/homepage/hero.jpg';
import { BiDownArrow } from 'react-icons/bi';
import Link from 'next/link';

export default function Hero() {
  return (
    <section id="hero" className="relative w-full mx-auto bg-gray-900">
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
        <div className="w-full py-36">
          <h1 className="text-6xl lg:text-8xl font-bold text-white mb-2">
            Building Wealth
          </h1>
          <h2 className="text-4xl lg:text-7xl font-semibold mb-2 text-white">
            Securing Futures
          </h2>
          <p className="text-2xl lg:text-5xl text-gray-200 mb-4">Growing Together </p>
          <Link
            href="#about"
            className="flex items-center gap-2 text-2xl  py-3 text-white font-medium rounded-md"
          >
            <div>
              <BiDownArrow />
            </div>
            Anant LLC
          </Link>
        </div>
      </div>
    </section>
  );
}
