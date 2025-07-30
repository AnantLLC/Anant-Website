'use client';
import React from 'react';
import { inriaSans } from '../lib/fonts';
import CustomSelect from "../components/customSelect";
import HeaderComponent from "../components/HeaderComponent";
import { useForm, Controller } from "react-hook-form";

type Option = {
  value: string;
  label: string;
};

type FormData = {
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
  spouse: boolean;
  kids: Option | null;
  service: Option | null;
};

const serviceOptions: Option[] = [
  { value: "Financial_Planning", label: "Financial Planning" },
  { value: "Health_Insurance", label: "Health Insurance" },
  { value: "Life_Insurance", label: "Life Insurance" },
  { value: "Annuities", label: "Annuities" },
  { value: "Education_Planning", label: "Education Planning" },
  { value: "Estate_Planning", label: "Estate Planning" },
  { value: "Tax_Diversification", label: "Tax Diversification" },
  { value: "Mortgage_Protection", label: "Mortgage Protection" },
  { value: "General_Inquiry", label: "General Inquiry/Not Sure" },
];

const kidsOptions: Option[] = [
  { value: "0", label: "0" },
  { value: "1", label: "1" },
  { value: "2", label: "2" },
  { value: "3", label: "3" },
  { value: "4+", label: "4+" },
];

const formStyles =
  "[&_input[type='text']]:bg-[#eeeeee] [&_input[type='text']]:border-2 [&_input[type='text']]:border-solid [&_input[type='text']]:rounded-sm [&_input[type='text']]:border-black [&_input[type='email']]:bg-[#eeeeee] [&_input[type='email']]:border-2 [&_input[type='email']]:border-solid [&_input[type='email']]:rounded-sm [&_input[type='email']]:border-black [&_input[type='tel']]:bg-[#eeeeee] [&_input[type='tel']]:border-2 [&_input[type='tel']]:border-solid [&_input[type='tel']]:rounded-sm [&_input[type='tel']]:border-black space-y-6";



export default function SchedulePage() {

  const {
    register,
    handleSubmit,
    control,
  } = useForm<FormData>({
    defaultValues: {
      firstname: "",
      lastname: "",
      email: "",
      phone: "",
      spouse: false,
      kids: kidsOptions[0],
      service: null,
    },
  });


  const onSubmit = async (data: FormData) => {
    const firstName = data.firstname.trim();
    const lastName = data.lastname.trim();
    const fullName = `${firstName} ${lastName}`;
    const email = data.email.trim();
    const spouse = data.spouse || 'N/A';
    const kids = data.kids?.value || '0';
    const service = data.service?.label || 'Not specified';

    let note = '';
    if (spouse !== 'N/A') {
      note = `Married and with ${kids} Kid${kids === '1' ? '' : 's'} consulting regarding ${service}`;
    } else {
      note = `With ${kids} Kid${kids === '1' ? '' : 's'} consulting regarding ${service}`;
    }

    const url = new URL('https://calendly.com/contact-anantllc/30min');
    url.searchParams.append('name', fullName);
    url.searchParams.append('email', email);
    url.searchParams.append('a1', note); // Goes into the Calendly textarea

    window.location.href = url.toString();
  };


  return (
    <main className={`min-h-screen flex items-center justify-center px-6 py-50 ${inriaSans.className} text-lg`}>
      <section className="w-full max-w-3xl p-8">

        {/* Heading */}
        <HeaderComponent
          title="SCHEDULE A CONSULTATION"
          subtitle="Our team of passionate professionals is committed to helping you grow wealth and secure your future."
        />

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className={formStyles} autoComplete="on">
          {/* Name Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-center">
              <input
                {...register("firstname")}
                type="text"
                placeholder="First Name"
                className="w-full px-4 py-3"
                required
              />
              <span className="text-red-500 text-xl ml-1">*</span>
            </div>
            <div className="flex items-center">
              <input
                {...register("lastname")}
                type="text"
                placeholder="Last Name"
                className="w-full px-4 py-3"
                required
              />
              <span className="text-red-500 text-xl ml-1">*</span>
            </div>
          </div>

          <div className="flex items-center">
            <input
              {...register("email")}
              type="email"
              placeholder="Email Address"
              className="w-full px-4 py-3"
              required
            />
            <span className="text-red-500 text-xl ml-1">*</span>
          </div>

          <div className="flex items-center">
            <input
              {...register("phone")}
              pattern="^\d{10}$"
              title="Please enter a valid 10-digit phone number with no spaces or symbols."
              type="tel"
              placeholder="Phone Number"
              className="w-full px-4 py-3"
              required
            />
            <span className="text-red-500 text-xl ml-1">*</span>
          </div>

          {/* Spouse & Kids */}
          <div className="flex flex-wrap md:flex-row gap-6 md:gap-2 md:items-center justify-between">
            <div className="flex items-center gap-7 w-full md:w-auto">
              <label htmlFor="spouse">Do You Have a Spouse?</label>
              <input
                id="spouse"
                type="checkbox"
                {...register("spouse")}
                className="scale-300 border-black accent-[#caa658]"
              />
            </div>

            <div className="flex items-center gap-2 w-full md:w-auto">
              <label htmlFor="kids-select" className="text-nowrap">Number of Kids</label>
              <Controller
                name="kids"
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                  <CustomSelect
                    instanceId="kids-select"
                    options={kidsOptions}
                    value={field.value}
                    onChange={field.onChange}
                  />
                )}
              />
              <span className="text-red-500 text-xl ml-1">*</span>
            </div>
          </div>

          {/* Service Dropdown */}
          <div className="flex items-center">
            <Controller
              name="service"
              control={control}
              rules={{
                required: true,
              }}
              render={({ field }) => (
                <CustomSelect
                  instanceId="service-select"
                  options={serviceOptions}
                  value={field.value}
                  onChange={field.onChange}
                  placeholder="Pick a Service"
                />
              )}
            />
            <span className="text-red-500 text-xl ml-1">*</span>
          </div>

          {/* Submit */}
          <div className="text-center pt-6">
            <button
              type="submit"
              className="bg-[#C7A25A] text-white font-bold px-8 py-4 rounded-md z-10 hover:bg-[#b5914a] transition-colors duration-300 cursor-pointer"
            >
              GET IN TOUCH
            </button>
          </div>
        </form>
      </section>
    </main>
  );
}
