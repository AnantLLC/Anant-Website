import React from 'react'
import Image from 'next/image'
import briefImage from '../../images/homepage/brief.svg'
import introduction from "../../images/homepage/introduction.svg"
import sales from "../../images/homepage/sales.svg"
import contracts from "../../images/homepage/contracts.svg"

export default function HowItWork() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            How We Work
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our streamlined process ensures that we deliver exceptional results
            for every client.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Step 1: Introduction */}
          <div className="bg-white rounded-lg shadow-lg p-6 transition-transform hover:scale-105">
            <div className="relative h-[200px] w-full mb-6">
              <Image
                src={introduction}
                alt="Introduction"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="bg-[#C4A35A] rounded-full w-12 h-12 flex items-center justify-center text-white font-bold text-xl mb-4 mx-auto">1</div>
            <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">Introduction</h3>
            <p className="text-gray-600 text-center">
              We begin with understanding your financial background and goals to establish a strong foundation.
            </p>
          </div>

          {/* Step 2: Free Consultation */}
          <div className="bg-white rounded-lg shadow-lg p-6 transition-transform hover:scale-105">
            <div className="relative h-[200px] w-full mb-6">
              <Image
                src={briefImage}
                alt="Free Consultation"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="bg-[#C4A35A] rounded-full w-12 h-12 flex items-center justify-center text-white font-bold text-xl mb-4 mx-auto">2</div>
            <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">Free Consultation</h3>
            <p className="text-gray-600 text-center">
              Our experts provide a comprehensive consultation to analyze your financial situation.
            </p>
          </div>

          {/* Step 3: Personalized Plan */}
          <div className="bg-white rounded-lg shadow-lg p-6 transition-transform hover:scale-105">
            <div className="relative h-[200px] w-full mb-6">
              <Image
                src={sales}
                alt="Personalized Plan"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="bg-[#C4A35A] rounded-full w-12 h-12 flex items-center justify-center text-white font-bold text-xl mb-4 mx-auto">3</div>
            <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">Personalized Plan</h3>
            <p className="text-gray-600 text-center">
              We develop a customized financial strategy tailored to your specific needs and objectives.
            </p>
          </div>

          {/* Step 4: Ongoing Support */}
          <div className="bg-white rounded-lg shadow-lg p-6 transition-transform hover:scale-105">
            <div className="relative h-[200px] w-full mb-6">
              <Image
                src={contracts}
                alt="Ongoing Support"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="bg-[#C4A35A] rounded-full w-12 h-12 flex items-center justify-center text-white font-bold text-xl mb-4 mx-auto">4</div>
            <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">Ongoing Support</h3>
            <p className="text-gray-600 text-center">
              We provide continuous monitoring and adjustments to ensure your financial strategy remains aligned with your goals.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
