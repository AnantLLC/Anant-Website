"use client";
import React, { useEffect, useState } from "react";

// Types for your team member data
interface TeamMember {
  name: string;
  role: string;
  image: string;
  summary: string;
  certifications: string[];
  linkedin?: string;
  email?: string;
}

// Navbar component
const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Smooth scroll handler for anchor links
  useEffect(() => {
    const handleAnchorClick = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      if (target.tagName === "A" && target.hash.startsWith("#")) {
        e.preventDefault();
        const elem = document.querySelector(target.hash);
        if (elem) {
          const navbarHeight = document.getElementById("navbar")?.offsetHeight || 0;
          const elementTop = elem.getBoundingClientRect().top + window.scrollY;
          const offsetPosition = elementTop - navbarHeight;
          window.scrollTo({ top: offsetPosition, behavior: "smooth" });
          setMobileMenuOpen(false);
        }
      }
    };
    document.addEventListener("click", handleAnchorClick);
    return () => document.removeEventListener("click", handleAnchorClick);
  }, []);

  return (
    <nav
      id="navbar"
      className="fixed w-full z-50 bg-zinc-900 shadow-md py-2 transition-all duration-300"
    >
      <div className="flex items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="/" className="flex justify-center items-center">
          <div className="relative h-20 w-35 lg:h-30 lg:w-45 md:h-20 md:w-35">
            <img
              loading="lazy"
              src="/static/img/Screenshot 2025-06-04 170730.png"
              alt="Anant Logo"
              className="object-contain h-full w-full"
            />
          </div>
        </a>

        {/* Desktop navigation */}
        <div className="hidden lg:flex items-center space-x-6">
          <a href="#about" className="font-medium text-white hover:text-[#C4A35A] transition-colors duration-200">
            About
          </a>
          <a href="#services" className="font-medium text-white hover:text-[#C4A35A] transition-colors duration-200">
            Our Services
          </a>
          <a
            href="https://calendly.com/yug-goyal46/1-1-meet-with-yugam?month=2025-05"
            target="_blank"
            rel="noreferrer"
            className="font-medium text-white hover:text-[#C4A35A] transition-colors duration-200"
          >
            Schedule a Call
          </a>
          <a href="#meet_our_team" className="font-medium text-white hover:text-[#C4A35A] transition-colors duration-200">
            Meet Our Team
          </a>
        </div>

        {/* Mobile menu toggle */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            type="button"
            className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-gray-200"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden shadow-lg bg-zinc-900 flex flex-col">
          <a
            href="#about"
            className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-blue-600 transition-colors duration-200"
          >
            About
          </a>
          <a
            href="#services"
            className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-blue-600 transition-colors duration-200"
          >
            Our Services
          </a>
          <a
            href="https://calendly.com/yug-goyal46/1-1-meet-with-yugam?month=2025-05"
            target="_blank"
            rel="noreferrer"
            className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-blue-600 transition-colors duration-200"
          >
            Schedule a Call
          </a>
        </div>
      )}
    </nav>
  );
};

// TeamMemberCard component
interface TeamMemberCardProps {
  member: TeamMember;
  onClick: () => void;
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ member, onClick }) => {
  return (
    <div className="member cursor-pointer text-center p-4 rounded-xl border-2 border-transparent hover:border-black hover:border-opacity-10 hover:scale-105 transition-transform" onClick={onClick}>
      <div className="member-image w-[200px] h-[200px] rounded-full mx-auto mb-4 bg-gradient-to-b from-white to-[#C4A35A] flex items-center justify-center overflow-hidden">
        <img src={member.image} alt={member.name} className="w-3/4 h-[70%] object-contain" loading="lazy" />
      </div>
      <div className="name font-bold">{member.name}</div>
      <div className="role text-gray-600">{member.role}</div>
      <div className="socials mt-2">
        {member.linkedin && (
          <a href={member.linkedin} target="_blank" rel="noreferrer" title="LinkedIn Profile" onClick={(e) => e.stopPropagation()}>
            <i className="fab fa-linkedin text-[#C4A35A] text-xl mx-1 transition-transform hover:scale-125 hover:text-yellow-500"></i>
          </a>
        )}
        {member.email && (
          <a href={`mailto:${member.email}`} title="Send Email" onClick={(e) => e.stopPropagation()}>
            <i className="fas fa-envelope text-[#C4A35A] text-xl mx-1 transition-transform hover:scale-125 hover:text-yellow-500"></i>
          </a>
        )}
      </div>
    </div>
  );
};

// TeamPopup component
interface TeamPopupProps {
  member: TeamMember | null;
  onClose: () => void;
}

const TeamPopup: React.FC<TeamPopupProps> = ({ member, onClose }) => {
  if (!member) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4" onClick={onClose}>
      <div
        className="popup-content bg-[#1a1a1a] text-white p-6 rounded-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto relative flex flex-col gap-6"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="close-icon absolute top-4 right-4 text-white text-2xl hover:text-[#C4A35A] transition-transform hover:scale-110"
          onClick={onClose}
          aria-label="Close popup"
        >
          &times;
        </button>
        <h2 className="popup-name text-2xl font-bold text-center mt-6">{member.name}</h2>
        <div className="popup-body flex flex-wrap gap-6 justify-center items-start">
          <div className="popup-image w-[250px] h-[250px] rounded-xl bg-gradient-to-b from-white to-[#C4A35A] flex items-center justify-center overflow-hidden">
            <img src={member.image} alt={member.name} className="w-3/4 h-[70%] object-contain" loading="lazy" />
          </div>
          <div className="popup-info max-w-xl">
            <p className="popup-summary mb-6">{member.summary}</p>
            <div className="popup-certifications mb-6">
              <h3 className="mb-2 text-lg font-semibold">Certifications & Affiliations</h3>
              <ul className="list-disc pl-5 space-y-1">
                {member.certifications.map((cert, idx) => (
                  <li key={idx}>{cert}</li>
                ))}
              </ul>
            </div>
            <div className="popup-socials flex space-x-4 text-[#C4A35A]">
              {member.linkedin && (
                <a href={member.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn Profile">
                  <i className="fab fa-linkedin text-3xl hover:text-yellow-500 transition-colors"></i>
                </a>
              )}
              {member.email && (
                <a href={`mailto:${member.email}`} aria-label="Send Email">
                  <i className="fas fa-envelope text-3xl hover:text-yellow-500 transition-colors"></i>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const MeetOurTeamPage: React.FC = () => {
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);
  const [popupMember, setPopupMember] = useState<TeamMember | null>(null);

  useEffect(() => {
    // Replace with your actual API endpoint
    const url = "https://docs.google.com/spreadsheets/d/e/2PACX-1vTpB3_F4Nkn9-cjk-rHrJejaeAI6aEFc2OJxDDEhROZalx-LB3F2qSUZHs_5pZPfF2ZReKWGsWYmSvG/pub?gid=1900863820&single=true&output=csv";

    // Fetch CSV, parse it, and map to TeamMember[]
    fetch(url)
      .then((response) => response.text())
      .then((csvText) => {
        // Simple CSV parsing (replace with better parser if needed)
        const lines = csvText.split("\n").filter(Boolean);
        const headers = lines[0].split(",");

        // Map CSV to team members
        const members = lines.slice(1).map((line) => {
          const values = line.split(",");
          const obj: any = {};
          headers.forEach((h, i) => {
            obj[h.trim()] = values[i]?.trim() || "";
          });

          return {
            name: obj["Name"] || "",
            role: obj["Role"] || "",
            image: obj["Image URL"] || "",
            summary: obj["Summary"] || "",
            certifications: obj["Certifications"] ? obj["Certifications"].split(";").map((c: string) => c.trim()) : [],
            linkedin: obj["LinkedIn URL"] || "",
            email: obj["Email"] || "",
          };
        });

        setTeamMembers(members);
      })
      .catch((error) => {
        console.error("Error loading team members:", error);
      });
  }, []);

  return (
    <div>
      <Navbar />

      <section
        id="meet_our_team"
        className="team bg-[#1a1a1a] py-20 px-4 max-w-7xl mx-auto rounded-2xl shadow-2xl"
        style={{ marginTop: "9rem" }}
      >
        <h2 className="mb-16 font-bold text-5xl text-center text-[#C4A35A]">
          Meet Our Team
        </h2>
        <div className="team-members grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {teamMembers.map((member) => (
            <TeamMemberCard
              key={member.name}
              member={member}
              onClick={() => setPopupMember(member)}
            />
          ))}
        </div>
      </section>

      <TeamPopup member={popupMember} onClose={() => setPopupMember(null)} />
    </div>
  );
};

export default MeetOurTeamPage;
