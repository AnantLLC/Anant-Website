import React, { useEffect, useState } from "react";
import MemberCard from "./MemberCard";
import MemberPopup from "./MemberPopup";

interface Member {
  name: string;
  role: string;
  image: string;
  linkedin: string;
  email: string;
  summary: string;
  certifications: string[];
}

const TeamSection: React.FC = () => {
  const [team, setTeam] = useState<Member[]>([]);
  const [selected, setSelected] = useState<Member | null>(null);

  useEffect(() => {
    fetch("/static/teamdetails.json")
      .then((res) => res.json())
      .then(setTeam)
      .catch(console.error);
  }, []);

  return (
    <section id="meet_our_team" className="text-center px-4 py-20">
      <h1 className="text-2xl font-bold mb-2">MEET OUR TEAM</h1>
      <p className="subtitle text-gray-600 mb-8 text-lg">
        Our team of passionate professionals is committed to helping you grow wealth and secure your future.
      </p>
      <h2 className="relative inline-block text-xl font-semibold mb-4">
        Financial Consultants
        <span className="block w-10 h-1 bg-[#C4A35A] mx-auto mt-2 rounded" />
      </h2>

      <div className="team grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto mt-6">
        {team.map((member, idx) => (
          <MemberCard key={idx} member={member} onClick={() => setSelected(member)} />
        ))}
      </div>

      <button className="join-btn mt-10 bg-[#C7A25A] text-white px-6 py-3 rounded hover:bg-[#b8893e]">
        JOIN OUR TEAM!
      </button>

      <MemberPopup isOpen={!!selected} member={selected} onClose={() => setSelected(null)} />
    </section>
  );
};

export default TeamSection;
