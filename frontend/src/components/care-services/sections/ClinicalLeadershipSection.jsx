import { UserRound } from "lucide-react";
import Reveal from "../../Reveal";

/**
 * ClinicalLeadershipSection — "Meet Our Clinical Leadership".
 * Portea doctor-sec: ivory #faf7f1 band; doctor-card radius 8px, padding
 * 28px (16px mobile), shadow 0 2px 20px rgba(13,34,34,.039); avatar circle
 * bg rgba(0,151,158,.1) / 2px border rgba(0,151,158,.25) / text #00767c.
 * [PENDING FROM CLIENT] — real doctor photos, names, titles, and credentials
 * must be supplied by the client. No fake doctor bios are fabricated.
 */

const LEADERSHIP_PLACEHOLDERS = [
  { name: "[Doctor name]", title: "[Title / Credentials]", credentials: "[Specialty / degrees]" },
  { name: "[Doctor name]", title: "[Title / Credentials]", credentials: "[Specialty / degrees]" },
  { name: "[Doctor name]", title: "[Title / Credentials]", credentials: "[Specialty / degrees]" },
  { name: "[Doctor name]", title: "[Title / Credentials]", credentials: "[Specialty / degrees]" },
];

const ClinicalLeadershipSection = ({ members = LEADERSHIP_PLACEHOLDERS, className = "" }) => {
  return (
    <section className={`care-band py-14 md:py-[88px] ${className}`}>
      <Reveal>
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-11">
            <p className="care-eyebrow mb-4">
              Our experts
            </p>
            <h2 className="care-h2 font-display">
              Meet our clinical leadership
            </h2>
            <p className="care-lead mt-4 max-w-2xl">
              [PENDING FROM CLIENT] — doctor photos, names, and credentials are
              awaited from the client before launch.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
            {members.map((member, index) => (
              <article
                key={index}
                className="flex flex-col items-center gap-3 rounded-lg border border-transparent bg-white p-4 text-center shadow-[0_2px_20px_rgba(13,34,34,0.039)] md:p-7"
              >
                <span className="flex h-20 w-20 items-center justify-center rounded-full border-2 border-[rgba(0,151,158,0.25)] bg-[rgba(0,151,158,0.1)] text-[#00767c]">
                  <UserRound size={36} strokeWidth={1.5} aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-base font-semibold text-neutral-900">{member.name}</h3>
                  <p className="mt-1 text-sm text-neutral-600">{member.title}</p>
                  <p className="text-xs text-neutral-600">{member.credentials}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
};

export default ClinicalLeadershipSection;