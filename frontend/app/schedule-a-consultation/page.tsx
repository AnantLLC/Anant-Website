'use client';
import React from 'react';
import { inriaSans } from '../lib/fonts';

export default function SchedulePage() {
  return (
    <main className={`min-h-screen flex items-center justify-center px-6 py-50 ${inriaSans.className} text-lg`}>
      <section className="w-full max-w-2xl">
        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="text-2xl md:text-4xl font-bold text-black">SCHEDULE A CONSULTATION</h1>
          <p className="mt-4 max-w-md mx-auto">
            Our team of passionate professionals is committed to helping you grow wealth and secure your future.
          </p>
          <div className="mt-6 w-10 h-1 bg-[#caa658] mx-auto" />
        </div>

        {/* Form */}
        <form className=" [&_input]:bg-[#eeeeee] [&_input]:border-2 [&_input]:border-solid [&_input]:rounded-sm [&_input]:border-black space-y-6">
          {/* Name Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-row">
              <input type="text" placeholder="First Name" className="w-full px-4 py-2" />
              <span className="text-red-500 text-sm ml-1">*</span>
            </div>
            <div className="flex flex-row">
              <input type="text" placeholder="Last Name" className="w-full px-4 py-2" />
              <span className="text-red-500 text-sm ml-1">*</span>
            </div>
          </div>


          <div className="flex flex-row">
            <input type="email" placeholder="Email Address" className="w-full px-4 py-2" />
            <span className="text-red-500 text-sm ml-1">*</span>
          </div>
          <div className="flex flex-row">
            <input type="tel" placeholder="Phone Number" className="px-4 py-2 w-full" />
            <span className="text-red-500 text-sm ml-1">*</span>
          </div>
          {/* Spouse and Kids */}
          <div className="flex flex-wrap items-center gap-4">
            <label className="flex items-center gap-2">
              Do You Have a Spouse? <span className="text-red-500 text-sm">*</span>
              <input type="checkbox" className="w-5 h-5 border-2 border-black rounded-sm" />
            </label>

            <label className="flex items-center gap-2">
              Number of Kids <span className="text-red-500 text-sm">*</span>
              <select className="rounded-sm border-2 border-black bg-[#eeeeee] px-4 py-2">
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2+">2+</option>
              </select>
            </label>
          </div>

          {/* Service Dropdown */}
          <div className="flex flex-row">
            <select defaultValue="" className="rounded-sm border-2 border-black bg-[#eeeeee] px-4 py-2 w-full [&_option]: {hover:bg-[#C4A35A1C]}">
              <option disabled value="">Pick a Service</option>
              <option value="financial-planning">Financial Planning</option>
              <option value="health-insurance">Health Insurance</option>
              <option value="life-insurance">Life Insurance</option>
              <option value="annuities">Annuities</option>
              <option value="education-planning">Education Planning</option>
              <option value="estate-planning">Estate Planning</option>
              <option value="tax-diversification">Tax Diversification</option>
              <option value="mortgage-protection">Mortgage Protection</option>
              <option value="general-inquiry">General Inquiry/Not Sure</option>
            </select>
            <span className="text-red-500 text-sm ml-1">*</span>
          </div>

          {/* Submit Button */}
          <div className="text-center pt-6">
            <button
              type="submit"
              className="bg-[#C7A25A] text-[#FFFFFF] font-bold px-6 py-3 rounded-sm"
            >
              GET IN TOUCH
            </button>
          </div>
        </form>
      </section>
    </main>

  );
}