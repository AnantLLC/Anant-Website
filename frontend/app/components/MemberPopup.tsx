import Image from 'next/image';
import React from 'react';

type Member = {
  name: string;
  role: string;
  summary: string;
  image: string;
  certifications: string[];
};

type Props = {
  member: Member;
  onClose: () => void;
};

const MemberPopup: React.FC<Props> = ({ member, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-[#1a1a1a] text-white p-6 rounded-xl max-w-xl w-full relative">
        <button onClick={onClose} className="absolute top-4 right-4 text-white text-xl hover:text-[#C4A35A]">
          <i className="fas fa-times"></i>
        </button>
        <h2 className="text-center font-bold text-xl mb-4">{member.name}</h2>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex justify-center">
            <div className="w-32 h-32 rounded-full overflow-hidden bg-gradient-to-b from-white to-[#C4A35A] flex items-center justify-center">
              <Image src={member.image} alt={member.name} className="w-3/4 h-3/4 object-contain" />
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-lg">{member.role}</h3>
            <p className="text-sm text-gray-300">{member.summary}</p>
            <h4 className="mt-2 font-semibold">State Certifications:</h4>
            <ul className="list-disc list-inside text-sm text-gray-300">
              {member.certifications.map((cert, i) => (
                <li key={i}>{cert}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-6 text-center">
          <button className="bg-[#C7A25A] text-white px-4 py-2 rounded hover:bg-[#a18345]">
            Schedule a Call
          </button>
        </div>
      </div>
    </div>
  );
};

export default MemberPopup;
