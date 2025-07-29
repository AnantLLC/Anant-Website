'use client';

import React, { useState, useEffect } from 'react';
import Select, { type SingleValue, type ClassNamesConfig, type StylesConfig } from "react-select";


type Option = {
  value: string;
  label: string;
};

type CustomSelectProps = {
  options: Option[];
  value: Option | null;
  onChange: (option: SingleValue<Option>) => void;
  placeholder?: string;
  className?: string; 
  classNames?: ClassNamesConfig<Option, false>; 
  styles?: StylesConfig<Option, false>; 
  instanceId?: string; 
};

const CustomSelect = ({
  options,
  value,
  onChange,
  placeholder = "Select...",
  className = "",
  classNames: customClassNames,
  styles: customStyles,
  instanceId
}: CustomSelectProps) => {

const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const defaultClassNames: ClassNamesConfig<Option, false> = {
    control: () => "border-black border-2 bg-[#eeeeee] rounded-sm flex flex-row py-1 overflow-hidden",
    menu: () => "w-full border-2 border-black z-10 absolute mt-1 bg-[#eeeeee]",
    option: ({ isSelected, isFocused }) =>
        `cursor-pointer px-3 py-2 ${isSelected || isFocused ? "bg-[#C4A35A1C]" : ""} text-black`,
    singleValue: () => "text-black min-w-[1.5rem]",
    dropdownIndicator: () => "text-black",
    ...customClassNames, 
    
  };

  const defaultStyles: StylesConfig<Option, false> = {
    control: (base, state) => ({ ...base, boxShadow: 'none', '&:hover': { borderColor: '#caa658' }, ...customStyles?.control }),
    menu: (base) => ({ ...base, ...customStyles?.menu }),
    option: (base, state) => ({ ...base, ...customStyles?.option }),
  };


  if (!isMounted) {
    return (
      <div className="border-black border-2 bg-[#eeeeee] rounded-sm w-full flex items-center h-[46px] px-3">
        <span className="text-gray-500">{placeholder}</span>
      </div>
    );
  }

  return (
    <Select
      instanceId={instanceId}
      options={options}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`w-full ${className}`}
      classNames={defaultClassNames}
      styles={{
                    control: () => ({}),
                    menu: () => ({}),
                    option: () => ({}),
      }}
      
    />
  );
};

export default CustomSelect;