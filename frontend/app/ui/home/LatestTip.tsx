import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

// Sample tip data - in a real application, this would come from an API or CMS
const tips = [
  {
    id: 1,
    title: "5 Essential Financial Planning Tips for Young Professionals",
    image: "/images/tips/financial-planning.jpg",
    date: "June 15, 2023",
    category: "Financial Planning",
    slug: "financial-planning-tips"
  },
  {
    id: 2,
    title: "Understanding Life Insurance: What You Need to Know",
    image: "/images/tips/life-insurance.jpg",
    date: "May 28, 2023",
    category: "Insurance",
    slug: "understanding-life-insurance"
  }
]

export default function LatestTip() {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Section headers */}
        <div className="text-center mb-12">
          <p className="text-sm font-medium text-blue-600 uppercase tracking-wider mb-2">OUR SOCIAL MEDIA</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Latest Tips</h2>
        </div>
        
        {/* Tips grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {tips.map((tip) => (
            <div key={tip.id} className="bg-white rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">
              {/* Image container with fixed aspect ratio */}
              <div className="relative h-64 w-full">
                <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-400">Image placeholder</span>
                </div>
                {/* Uncomment when you have actual images */}
                {/* <Image 
                  src={tip.image} 
                  alt={tip.title}
                  fill
                  className="object-cover"
                /> */}
              </div>
              
              {/* Content */}
              <div className="p-6">
                {/* Category and date */}
                <div className="flex justify-between items-center mb-3 text-sm">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full font-medium">
                    {tip.category}
                  </span>
                  <span className="text-gray-500">
                    {tip.date}
                  </span>
                </div>
                
                {/* Title */}
                <h3 className="text-xl font-semibold mb-4 text-gray-800 line-clamp-2">
                  <Link href={`/tips/${tip.slug}`} className="hover:text-blue-600 transition-colors duration-200">
                    {tip.title}
                  </Link>
                </h3>
                
                {/* Read more link */}
                <Link href={`/tips/${tip.slug}`} className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800">
                  Read More
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
