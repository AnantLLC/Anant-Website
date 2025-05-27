import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import consultationBanner from "../../images/ConsultationBanner.jpg"

export default function Schedule() {
  return (
    <section className="relative text-white py-32">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src={consultationBanner}
          alt="Consultation Banner"
          fill
          className="object-cover object-center"
        />    
        {/* Black overlay */}
        <div className="absolute inset-0 bg-black opacity-60 z-0"></div>
      </div>
  
    {/* Content */}
    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-8">
        Committed to every client, <br className="hidden sm:block" />
        every step of the way.
      </h2>
  
      <Link href="https://calendly.com/yug-goyal46/1-1-meet-with-yugam?month=2025-05" passHref>
        <button className="px-8 py-4 bg-[#C4A35A] text-white font-semibold rounded-md transition-all duration-300 transform hover:scale-105 hover:shadow-lg text-lg shadow-lg cursor-pointer">
          Schedule a Consultation
        </button>
      </Link>
    </div>
  </section>
  )
}
