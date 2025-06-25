"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { Linkedin, Mail } from "lucide-react";
import yugamImage from "../../images/teams/yugam.png";
import tarunImage from "../../images/teams/tarun.png";
import coreyImage from "../../images/teams/Corey Chiu TMDSAS Headshot Photo.png";
import Link from "next/link";

interface TeamMember {
  name: string;
  role: string;
  image: string;
  summary: string;
  certifications: string[];
  linkedin?: string;
  email?: string;
  scheduleLink?: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Yugam Goyal",
    role: "CEO & Co-Founder",
    image: yugamImage.src,
    summary:
      "Yugam is a visionary CEO and co-founder dedicated to transforming financial services through innovative strategies and client-focused solutions. With deep industry expertise, he drives sustainable growth and empowers clients to achieve long-term financial success.",
    certifications: ["TX: License #123456", "CA: License #987654"],
    linkedin: "https://www.linkedin.com/in/yugam-goyal/",
    email: "yug.goyal46@gmail.com",
    scheduleLink: "https://calendly.com/yug-goyal46/1-1-meet-with-yugam",
  },
  {
    name: "Tarun Kumar Somisetty",
    role: "COO & Co-Founder",
    image: tarunImage.src,
    summary:
      "Tarun oversees daily operations and implements strategic initiatives to ensure seamless service delivery and business growth. His leadership drives efficiency and operational excellence across the company.",
    certifications: ["NY: License #654321", "NJ: License #192837"],
    linkedin: "https://www.linkedin.com/in/tarun-kumar-somisetty-531001228/",
    email: "tarunsk2002@gmail.com",
    scheduleLink: "https://calendly.com/yug-goyal46/1-1-meet-with-yugam",
  },
  {
    name: "Corey Chiu",
    role: "Vice President",
    image: coreyImage.src,
    summary:
      "As Vice President, Corey leads key financial initiatives and client relations, ensuring strong performance and innovative solutions that drive the company’s success.",
    certifications: ["IL: License #456789"],
    linkedin: "https://www.linkedin.com/in/corey-chiu-167294264/",
    email: "coreychiu002@gmail.com",
    scheduleLink: "https://calendly.com/coreychiu002",
  },
];


export default function TeamPage() {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
    const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        closePopup();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closePopup();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  const openPopup = (member: TeamMember) => {
    setSelectedMember(member);
  };

  const closePopup = () => {
    setSelectedMember(null);
  };

  return (
    <div className="bg-white py-20">
      <main className="py-10 px-4 text-center">
        <section id="meet_our_team">
          <h1 className="text-4xl font-semibold mb-4 mt-12">MEET OUR TEAM</h1>
          <p className="text-gray-600 mb-6 text-xl max-w-4xl mx-auto">
            Our team of passionate professionals is committed to helping you
            grow wealth and secure your future.
          </p>

          <div className="relative inline-block mb-10">
            <h2 className="text-xl font-semibold">Financial Consultants</h2>
            <div className="absolute left-1/2 transform -translate-x-1/2 mt-3 w-10 h-1 bg-[#C4A35A] rounded"></div>
          </div>

          {/* Team Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                onClick={() => openPopup(member)}
                className="bg-transparent p-4 cursor-pointer text-center rounded-2xl border-2 border-transparent hover:border-gray-200 hover:scale-105 transition-all duration-300"
              >
                <div className="w-48 h-48 rounded-full bg-gradient-to-b from-white to-[#C4A35A] flex items-end justify-center mx-auto mb-4 overflow-hidden">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    width={160}
                    height={150}
                    className="object-cover"
                  />
                </div>
                <div className="font-bold text-lg mb-1">{member.name}</div>
                <div className="text-gray-600 mb-2">{member.role}</div>
                <div className="flex justify-center space-x-3">
                  {member.linkedin && (
                    <Link
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="text-[#C4A35A] hover:text-[#d6a85b] hover:scale-125 transition-all duration-200"
                    >
                      <Linkedin size={20} />
                    </Link>
                  )}
                  {member.email && (
                    <Link
                      href={`mailto:${member.email}`}
                      onClick={(e) => e.stopPropagation()}
                      className="text-[#C4A35A] hover:text-[#d6a85b] hover:scale-125 transition-all duration-200"
                    >
                      <Mail size={20} />
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>

          <button className="bg-[#C7A25A] text-white px-4 py-3 rounded-lg mb-0 mt-3 font-bold hover:bg-[#b8893e] transition-colors duration-300 cursor-pointer">
            JOIN OUR TEAM
          </button>
        </section>
      </main>

      {/* Popup Modal */}
      {selectedMember && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[9999] p-4">
          <div ref={modalRef} className="bg-gray-900 text-white p-6 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative">
            <button
              onClick={closePopup}
              className="absolute top-4 right-4 text-white hover:text-[#C4A35A] hover:scale-125 transition-all duration-200 z-10 cursor-pointer"
            >
              {/* <X size={24} /> */}
              x
            </button>

            <h2 className="text-2xl font-bold text-center mb-6 mt-6">
              {selectedMember.name}
            </h2>

            <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
              <div className="flex-shrink-0">
                <div className="w-40 h-40 rounded-full bg-gradient-to-b from-white to-[#C4A35A] flex items-end justify-center overflow-hidden">
                  <Image
                    src={selectedMember.image || "/placeholder.svg"}
                    alt={selectedMember.name}
                    width={160}
                    height={160}
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="flex-1 text-center md:text-left">
                <h3 className="text-xl font-semibold mb-2">
                  {selectedMember.role}
                </h3>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {selectedMember.summary}
                </p>
                <div>
                  {/* <strong className="text-white">State Certifications:</strong>
                  <ul className="list-disc list-inside mt-2 text-gray-300">
                    {selectedMember.certifications.map((cert, index) => (
                      <li key={index}>{cert}</li>
                    ))}
                  </ul> */}
                </div>
              </div>
            </div>

            <div className="text-center gap-2 mt-6">
              {selectedMember.scheduleLink && (
                <div className="text-center gap-2 mt-6">
                  <Link
                    href={selectedMember.scheduleLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block"
                  >
                    <button className="bg-[#C7A25A] text-white px-6 py-3 rounded-lg hover:bg-[#a18345] transition-colors duration-300 cursor-pointer">
                      Schedule a Call
                    </button>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
