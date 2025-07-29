import React from "react";

interface HeaderComponentProps {
  title: string;
  subtitle: string;
}

const HeaderComponent: React.FC<HeaderComponentProps> = ({ title, subtitle }) => {
  return (
    <div className="text-center mb-12">
      <h1 className="text-2xl md:text-4xl font-bold text-black">{title}</h1>
      <p className="mt-4 max-w-md mx-auto text-gray-600">{subtitle}</p>
      <div className="mt-6 w-10 h-1 bg-[#caa658] mx-auto" />
    </div>
  );
};

export default HeaderComponent;
