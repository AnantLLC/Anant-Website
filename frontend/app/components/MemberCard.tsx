import Image from 'next/image';
import React from 'react';

type MemberProps = {
  member: {
    name: string;
    role: string;
    image: string;
    linkedin?: string;
    email?: string;
  };
  onClick: () => void;
};

const MemberCard: React.FC<MemberProps> = ({ member, onClick }) => {
  return (
    <div
      className="bg-transparent p-4 rounded-lg border hover:border-gray-300 transition cursor-pointer text-center"
      onClick={onClick}
    >
      <div className="w-48 h-48 mx-auto mb-4 rounded-full bg-gradient-to-b from-white to-[#C4A35A] flex items-center justify-center overflow-hidden">
        <Image src={member.image} alt={member.name} className="w-3/4 h-3/4 object-contain" />
      </div>
      <div className="font-bold">{member.name}</div>
      <div className="text-gray-600">{member.role}</div>
      <div className="mt-2">
        {member.linkedin && (
          <a href={member.linkedin} target="_blank" rel="noreferrer">
            <i className="fab fa-linkedin text-[#C4A35A] mx-1 hover:scale-125 transition" />
          </a>
        )}
        {member.email && (
          <a href={`mailto:${member.email}`}>
            <i className="fas fa-envelope text-[#C4A35A] mx-1 hover:scale-125 transition" />
          </a>
        )}
      </div>
    </div>
  );
};

export default MemberCard;
