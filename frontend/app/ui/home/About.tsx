import React from 'react'
import Image from 'next/image'
import aboutImage from "../../images/AboutUs.jpg"

// import Link from 'next/link'

export default function About() {
  return (
    <section id="about" className="relative py-28 px-4 md:px-12 bg-blue-50 overflow-hidden">
      {/* Background split */}
      <div className="absolute inset-0 z-0 flex">
        <div className="w-1/3 bg-white"></div>
        <div className="w-2/3 bg-blue-50"></div>
      </div>

      {/* Content container */}
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Image */}
          <div className="relative h-96 rounded-xl w-full overflow-hidden">
            <Image 
              src={aboutImage}
              alt="About Us Image"
              fill
              className="object-cover"
            />
          </div>

          {/* Content column */}
          <div className="order-1 md:order-2 flex flex-col space-y-6">
            <h2 className="text-md font-bold text-gray-700">
              ABOUT US
            </h2>

            <h2 className="text-4xl md:text-4xl font-bold text-gray-800">
              We&apos;re With You — <br/> Every Step of the Way<br/>
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed">
              <br/>We are headquartered in Austin, TX, but we serve clients
              nationwide. Whether you&apos;re looking for financial consulting,
              life insurance, or career opportunities in the financial services
              industry, we invite you to explore how Anant Financial Consulting
              can help you secure a brighter future.
            </p>

            <div className="pt-4">
              {/* <Link href="/about" passHref>
              <button className="px-6 py-3 bg-[#C4A35A] text-white font-medium rounded-md transition-all duration-300 transform hover:scale-105 hover:shadow-lg inline-flex items-center">
              Learn More About Us
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 ml-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </Link> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
