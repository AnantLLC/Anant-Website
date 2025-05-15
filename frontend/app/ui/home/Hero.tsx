import Image from 'next/image';
import React from 'react'
import heroAsset from '../../images/homepage/hero.jpg';
import { BiDownArrow } from 'react-icons/bi';

export default function Hero() {
  return (
    <section className="relative w-full mx-auto bg-gray-900">
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
          <h1 className="text-5xl font-bold text-white mb-2">
            Building Wealth
          </h1>
          <h2 className="text-3xl font-semibold mb-2 text-white">
            Securing Futures
          </h2>
          <p className="text-lg text-gray-200 mb-4">Growing Together </p>
          <a
            href="#services"
            className="flex items-center gap-2 text-2xl  py-3  text-white font-medium rounded-md"
          >
            <div>
              <BiDownArrow />
            </div>
            Anant LLC
          </a>
        </div>
      </div>
    </section>
  );
}
