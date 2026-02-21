"use client";

import { useState } from "react";

const jobs = [
  {
    company: "Shopaz",
    location: "Pristina, Kosovo",
    role: "Frontend Developer",
    period: "October 2024 – Present",
    points: [
      "Lead development of complex frontend features with collaboration with each team member involved.",
      "Picked up the project half-way with many refactoring additions to bring the project to the best state possible.",
      "Drive architectural decisions and enforce coding standards through structured code reviews.",
      "Mentor developers and contribute to leadership and infrastructure initiatives.",
      "Implement GraphQL solutions and advanced state management: Context, Redux, Zustand, React Query.",
      "Lead the redesign of the whole pages and refactored as much code needed to make the project as planned.",
      "Collaborated with external international teams for the best implementation methods of features required.",
      "Refactored and improved performance of the mobile and web app, to achieve the best results possible.",
    ],
    skills: "TypeScript, React, Next, React Native, GraphQL, React-Query, React Context, Zustand, Tailwind, Azure, CI/CD, Redis, VTEX",
  },
  {
    company: "Incodeks",
    location: "Pristina, Kosovo",
    role: "Software Engineer",
    period: "October 2023 – October 2024",
    points: [
      "Delivered frontend solution for both Web and Mobile (mobile focused) requirements and development.",
      "Built GraphQL integrations and collaborated with the backend teams (Elixir and Python).",
      "Started leading more features and releases to further develop my leading and organisational skills.",
      "Required and main code reviewer for all the new features developed and then of refactoring PR-s as well.",
    ],
    skills: "TypeScript, React, Next, React-Native, Tailwind, GraphQL, GraphQL Apollo, REST, React-query, Redux",
  },
  {
    company: "Attributy",
    location: "Pristina, Kosovo",
    role: "Software Developer",
    period: "January 2023 – October 2023",
    points: [
      "Developed modern TV and Marketing oriented web interfaces with React and Next.JS.",
      "Supported backend development with Node.js, Serverless and AWS (occasionally).",
      "Started to participate in code reviews and learn the importance of having good quality code written overall.",
      "Lead my first release ever, which would carve the path in front of me.",
    ],
    skills: "TypeScript, React, Next, Tailwind, Zustand, Chakra UI, Material UI, REST, Node, Serverless, AWS",
  },
  {
    company: "E-Solution",
    location: "Pristina, Kosovo",
    role: "Full Stack Developer",
    period: "January 2022 – January 2023",
    points: [
      "Designed RESTful APIs and optimized application performance.",
      "Implemented cross-platform features that were connected between web and mobile.",
    ],
    skills: "TypeScript, React, React Native, Next, Redux, React Context, Node, Express, SQLite, Prisma, REST",
  },
];

export default function Experience() {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <section id="experience" className="py-24 px-4 sm:px-6 max-w-4xl mx-auto min-w-0">
      <h2
        className="text-3xl font-bold mb-12 text-accent opacity-0 animate-fade-in-up"
        style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}
      >
        Work Experience
      </h2>
      <div className="space-y-4 min-w-0">
        {jobs.map((job, index) => {
          const isOpen = openId === job.company;
          return (
            <article
              key={job.company}
              className="border border-white/5 rounded-xl bg-card/50 overflow-hidden transition-all duration-300 hover:border-white/10 hover:shadow-[0_8px_30px_-12px_rgba(0,0,0,0.4)] sm:hover:-translate-y-0.5 opacity-0 animate-card-enter min-w-0"
              style={{
                animationDelay: `${0.15 + index * 0.1}s`,
                animationFillMode: "forwards",
              }}
            >
              <button
                type="button"
                onClick={() => setOpenId(isOpen ? null : job.company)}
                className="w-full text-left p-4 sm:p-6 flex flex-col sm:flex-row sm:flex-wrap sm:justify-between sm:items-center gap-3 cursor-pointer transition-colors hover:bg-white/[0.02]"
              >
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg sm:text-xl font-semibold">{job.company}</h3>
                  <p className="text-[#9a9691] text-sm">{job.location}</p>
                </div>
                <div className="flex items-center justify-between sm:justify-end gap-3 sm:gap-4 flex-shrink-0">
                  <div className="text-left sm:text-right min-w-0">
                    <p className="font-medium text-sm sm:text-base">{job.role}</p>
                    <p className="text-sm text-[#9a9691]">{job.period}</p>
                  </div>
                  <span
                    className={`inline-flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg border border-white/10 transition-all duration-300 ${isOpen ? "rotate-180 bg-accent/10 border-accent/20" : ""}`}
                    aria-hidden
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </span>
                </div>
              </button>
              {isOpen && (
                <div className="expand-content px-4 py-4 sm:px-6 sm:pb-6 border-t border-white/5">
                  <ul className="list-disc list-inside space-y-2.5 text-[#b8b5b0] mb-4 text-sm sm:text-base">
                    {job.points.map((point, i) => (
                      <li key={i} className="leading-relaxed break-words">
                        {point}
                      </li>
                    ))}
                  </ul>
                  <p className="text-xs sm:text-sm text-[#9a9691] pt-1 break-words">
                    <span className="text-accent/90 font-medium">Skills:</span> {job.skills}
                  </p>
                </div>
              )}
            </article>
          );
        })}
      </div>
    </section>
  );
}
