"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { Linkedin, Mail } from "lucide-react";
import yugamImage from "../../images/teams/yugam.png";
import tarunImage from "../../images/teams/tarun.png";
import coreyImage from "../../images/teams/Corey Chiu TMDSAS Headshot Photo.png";
import yugamImagepop from "../../images/teams/Screenshot 2025-06-29 004848.png";
import tarunImagepop from "../../images/teams/Screenshot 2025-06-29 005056.png";
import coreyImagepop from "../../images/teams/Corey Chiu TMDSAS Headshot Photo(1).jpeg";
import Link from "next/link";

interface TeamMember {
  name: string;
  role: string;
  image: string;
  imagepop: string;
  summary: string;
  certifications: string[];
  linkedin?: string;
  email?: string;
  scheduleLink?: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Yugam Goyal",
    role: "Senior Financial Consultant",
    image: yugamImage.src,
    imagepop: yugamImagepop.src,
    summary:
      "Yugam is a visionary financial consultant dedicated to transforming financial services through innovative strategies and client-focused solutions. With deep industry expertise, he drives sustainable growth and empowers clients to achieve long-term financial success.",
    certifications: ["TX: License #123456", "CA: License #987654"],
    linkedin: "https://www.linkedin.com/in/yugam-goyal/",
    email: "yug.goyal46@gmail.com",
    scheduleLink: "https://calendly.com/yug-goyal46/1-1-meet-with-yugam",
  },
  {
    name: "Tarun Kumar Somisetty",
    role: "Financial Consultant",
    image: tarunImage.src,
    imagepop: tarunImagepop.src,
    summary:
      "Tarun oversees daily operations and implements strategic initiatives to ensure seamless service delivery and business growth. His leadership drives efficiency and operational excellence across the company.",
    certifications: ["NY: License #654321", "NJ: License #192837"],
    linkedin: "https://www.linkedin.com/in/tarun-kumar-somisetty-531001228/",
    email: "tarunsk2002@gmail.com",
    scheduleLink: "https://calendly.com/tarunsk2002",
  },
  {
    name: "Corey Chiu",
    role: "Financial Consultant",
    image: coreyImage.src,
    imagepop: coreyImagepop.src,
    summary:
      "As financial consultant, Corey leads key financial initiatives and client relations, ensuring strong performance and innovative solutions that drive the company’s success.",
    certifications: ["IL: License #456789"],
    linkedin: "https://www.linkedin.com/in/corey-chiu-167294264/",
    email: "coreychiu002@gmail.com",
    scheduleLink: "https://calendly.com/coreychiu002",
  },
];

function FloatingCloseButton({
  onClick,
  isWhite = true,
  className = "",
}: {
  onClick: () => void;
  isWhite?: boolean; // true = black border/text, false = white border/text
  className?: string;
}) {
  // Target position (mouse coords)
  const targetPos = useRef({ x: 0, y: 0 });
  // Current displayed position of button
  const [pos, setPos] = useState({ x: 0, y: 0 });
  
  // Lerp factor controls inertia strength (0 < factor < 1)
  const lerpFactor = 0.15; // smaller = slower movement

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      targetPos.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener("mousemove", handleMouseMove);

    let animationFrameId: number;

    const animate = () => {
      setPos((currentPos) => {
        // Calculate interpolated position
        const newX = currentPos.x + (targetPos.current.x - currentPos.x) * lerpFactor;
        const newY = currentPos.y + (targetPos.current.y - currentPos.y) * lerpFactor;
        return { x: newX, y: newY };
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate(); // start animation loop

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <button
      onClick={onClick}
      className={`hidden md:flex fixed z-[10000] w-25 h-25 border-2 bg-transparent text-black font-thin text-[60px] flex items-center justify-center rounded-full cursor-default leading-none pointer-events-auto transition-opacity duration-300 ${className}`}
      style={{
        transform: `translate(${pos.x - 50}px, ${pos.y - 70}px)`,
        position: "fixed",
        color: isWhite ? "black" : "white",
        border: `solid ${isWhite ? "black" : "white"}`,
      }}
    >
      ×
    </button>
  );
}


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
  const [hideCloseButton, setHideCloseButton] = useState(false);
  const [isOverImage, setIsOverImage] = useState(false);
  const popupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!selectedMember) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (!popupRef.current) return;
      const rect = popupRef.current.getBoundingClientRect();

      // Calculate relative X position of pointer inside popup
      const relativeX = e.clientX - rect.left;

      // Since popup is flex row with two halves, check if pointer is in right half
      if (relativeX > rect.width / 2) {
        setIsOverImage(true);
      } else {
        setIsOverImage(false);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [selectedMember]);

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
                    width={member.name === "Yugam Goyal" ? 180 : 160}
                    height={member.name === "Yugam Goyal" ? 180 : 150}
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

          <Link href="https://calendly.com/yug-goyal46/1-1-meet-with-yugam" target="_blank" rel="noopener noreferrer">
            <button className="bg-[#C7A25A] text-white px-4 py-3 rounded-lg mb-0 mt-3 font-bold hover:bg-[#b8893e] transition-colors duration-300 cursor-pointer">
              JOIN OUR TEAM
            </button>
          </Link>
        </section>
      </main>

      {/* Popup Modal */}
      {selectedMember && (
      <div ref={popupRef} className="fixed inset-0 bg-white flex flex-col md:flex-row z-[10001]">
        <FloatingCloseButton onClick={closePopup} className={hideCloseButton ? "opacity-0 pointer-events-none" : "opacity-100" } isWhite={!isOverImage}/>

        {/* Left Half (Info) */}
        <div className="w-full md:w-1/2 p-10 flex flex-col justify-center">
          <div className="w-[70%] ml-[15%] text-left">
            {/* Mobile close button - visible only on small screens */}
            <button
              onClick={closePopup}
              className="md:hidden text-black text-2xl mb-2 border-2 border-black rounded-full px-2 py-0 inline-block w-fit cursor-pointer"
            >
              ×
            </button>
            <h3 className="text-[15px] font-medium mb-3 text-gray-700 uppercase leading-tight">{selectedMember.role}</h3>
            <h2 className="text-4xl font-semibold mb-6">{selectedMember.name}</h2>
            <p className="text-gray-600 text-[20px] text-extralight mb-6">{selectedMember.summary}</p>

            {selectedMember.scheduleLink && (
              <Link href={selectedMember.scheduleLink} target="_blank" rel="noopener noreferrer">
                <button onMouseEnter={() => setHideCloseButton(true)}
    onMouseLeave={() => setHideCloseButton(false)} className="relative z-[50000] bg-[#C7A25A] text-white px-6 py-3 rounded-lg hover:bg-[#a18345] transition-colors duration-300 cursor-pointer">
                  Schedule a Call
                </button>
              </Link>
            )}
          </div>
        </div>

        {/* Right Half (Image) */}
        <div className="hidden md:block w-full md:w-1/2 relative">
          <Image
            src={selectedMember.imagepop || "/placeholder.svg"}
            alt={selectedMember.name}
            layout="fill"
            objectFit="cover"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    )}
    </div>
  );
}
