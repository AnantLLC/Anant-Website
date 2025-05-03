import React from 'react'
import Link from 'next/link'

export default function Schedule() {
  return (
    <section className="bg-blue-600 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">
          Committed to every client, <br className="hidden sm:block" />
          every step of the way.
        </h2>
        
        <Link href="/contact" passHref>
          <button className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-md hover:bg-gray-100 transition-colors duration-300 text-lg shadow-lg">
            Schedule a Consultation
          </button>
        </Link>
      </div>
    </section>
  )
}
