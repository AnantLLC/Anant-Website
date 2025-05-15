import React from "react";
import Image from "next/image";
import financial from "../../images/homepage/financial.svg";
import health from "../../images/homepage/health.png";
import life from "../../images/homepage/life.svg";
import annuities from "../../images/homepage/annuities.svg";
import education from "../../images/homepage/education.svg";
import estate from "../../images/homepage/estate.svg";
import tax from "../../images/homepage/tax.svg";
import mortgage from "../../images/homepage/mortgage.svg";


const serviceItems = [
  {
    title: "Financial Planning",
    description: "Strategic money management tailored to you.",
    icon: financial,
  },
  {
    title: "Health Insurance",
    description: "Affordable coverage to protect your family",
    icon: health,
  },
  {
    title: "Life Insurance",
    description: "Protect your loved ones with flexible options.",
    icon: life,
  },
  {
    title: "Annuities",
    description: "Create guaranteed income streams for retirement.",
    icon: annuities,
  },
  {
    title: "Education Planning",
    description: "Use 529 plans to fund your child's future.",
    icon: education,
  },
  {
    title: "Estate Planning",
    description: "Ensure your legacy is passed down smoothly.",
    icon: estate,
  },
  {
    title: "Tax Diversification",
    description: "Work with our partners to minimize your tax impact.",
    icon: tax,
  },
  {
    title: "Mortgage Protection",
    description: "Protect your home and family with peace of mind.",
    icon: mortgage,
  },
];

export default function Services() {
  return (
    <section className="relative flex flex-col items-center py-28 px-4 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800 mb-12 relative">
        <span className="relative z-10">Our Services</span>
      </h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-7xl">
        {serviceItems.map((service, index) => (
          <div 
            key={index}
            className="bg-[#333333] rounded-lg shadow-md p-6 transition-transform duration-300 hover:transform hover:scale-105 flex flex-col items-center text-center"
          >
            <div className="w-16 h-16 mb-4 rounded-full flex items-center justify-center">
              <div className="text-[#333333] text-2xl font-bold">
                <Image src={service.icon} alt={service.title} width={48} height={48} />
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-white">{service.title}</h3>
            <p className="text-white">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
