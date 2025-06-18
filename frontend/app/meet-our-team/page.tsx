'use client';

import { useState, useEffect } from 'react';

export default function TeamPage() {
  const [team, setTeam] = useState([]);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    fetch(`/static/teamdetails.json?ts=${Date.now()}`)
      .then(res => res.json())
      .then(setTeam)
      .catch(err => console.error('Failed to load team data:', err));
  }, []);

  return (
    <main className="px-4 py-12">
      <h1 className="text-3xl font-medium text-center mt-13 mb-4">Meet Our Team</h1>

      <p className="text-center text-gray-600 text-lg max-w-2xl mx-auto mb-6">
        Our team of passionate professionals is committed to helping you grow wealth and secure your future.
      </p>

      {/* Financial Consultants with underline and exact styling */}
      <div className="max-w-xs mx-auto mb-6">
        <p className="text-center font-semibold tracking-wide capitalize text-5x1 relative pb-2">
          Financial Consultants
          <span
            className="block h-[2px] bg-yellow-600 w-16 mt-1 mx-auto"
            aria-hidden="true"
          />
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {team.map((member: any) => (
          <div
            key={member.id} // <---- use unique id here
            onClick={() => setSelected(member)}
            className="cursor-pointer text-center border border-gray-200 rounded-xl p-6 hover:shadow-lg transition"
          >
            <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-to-b from-white to-yellow-500 overflow-hidden flex items-center justify-center">
              <img src={member.image} alt={member.name} className="w-3/4 h-3/4 object-contain" />
            </div>
            <h3 className="text-lg font-bold">{member.name}</h3>
            <p className="text-gray-500">{member.role}</p>
            <div className="mt-2 flex justify-center gap-4 text-yellow-600">
              <a href={member.linkedin} onClick={(e) => e.stopPropagation()}><i className="fab fa-linkedin" /></a>
              <a href={`mailto:${member.email}`} onClick={(e) => e.stopPropagation()}><i className="fas fa-envelope" /></a>
            </div>
          </div>
        ))}
      </div>

      {selected && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
          onClick={() => setSelected(null)}
        >
          <div
            className="bg-zinc-900 text-white p-6 rounded-xl max-w-xl w-full relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelected(null)}
              className="absolute top-2 right-2 text-white text-2xl"
            >
              &times;
            </button>
            <div className="text-center mb-4">
              <div className="w-28 h-28 mx-auto rounded-full bg-gradient-to-b from-white to-yellow-500 overflow-hidden flex items-center justify-center mb-4">
                <img src={selected.image} alt={selected.name} className="w-3/4 h-3/4 object-contain" />
              </div>
              <h3 className="text-xl font-bold">{selected.name}</h3>
              <p className="text-sm text-gray-300">{selected.role}</p>
            </div>
            <p className="text-sm mb-4">{selected.summary}</p>
            <h4 className="font-semibold mb-2">Certifications:</h4>
            <ul className="list-disc list-inside text-sm text-gray-300">
              {selected.certifications.map((cert: string, idx: number) => (
                <li key={idx}>{cert}</li>
              ))}
            </ul>
            <div className="mt-6 text-center">
              <a
                href="https://calendly.com/yug-goyal46/1-1-meet-with-yugam"
                target="_blank"
                className="inline-block bg-yellow-600 text-white px-4 py-2 rounded hover:bg-yellow-700"
                rel="noopener noreferrer"
              >
                Schedule a Call
              </a>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
