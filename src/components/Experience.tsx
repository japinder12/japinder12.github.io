import Image from "next/image";

type Exp = {
  company: string;
  role: string;
  period: string;
  bullets: string[];
  logo?: string;
};

export default function Experience() {
  const items: Exp[] = [
    {
      company: 'Calectra',
      role: 'Data Scientist / Data Engineer (Contract)',
      period: 'October 2025 – February 2026 · Oakland, CA',
      bullets: [
        'Built end-to-end cost modeling pipeline (electricity vs. gas, EU ETS carbon pricing) for EU and US markets; processed large-scale plant capacity, energy intensity, and pricing data with reusable Python modules; produced per-plant savings metrics (€/t, €/day).',
        'Delivered market-level summary tables and comparisons across cement, lime, steel, and glass; structured analysis notebooks for repeatable research workflows.',
      ],
      logo: '/logos/calectra.png',
    },
    {
      company: 'LegalZoom',
      role: 'Software Engineer',
      period: 'May 2024 – Aug 2024 · Mountain View, CA',
      bullets: [
        'Built and deployed Spring Boot REST API endpoints to fix filing data accuracy, cutting support calls by 15%+.',
        'Integrated APIs into customer UI and refined schemas so backend and front end stay in sync across thousands of daily filings.',
      ],
      logo: '/logos/legalzoom.png',
    },
    {
      company: 'Pienomial',
      role: 'Software Engineer',
      period: 'Jun 2022 – Aug 2022 · Remote',
      bullets: [
        'Implemented Merkle tree data structures in Go/Rust with MongoDB for tamper-proof validation in distributed systems.',
        'Automated operational task workflows with scripts, cutting maintenance time by ~30%.',
      ],
      logo: '/logos/pienomial.png',
    },
    {
      company: 'UC Berkeley - EECS (CS61B)',
      role: 'Data Structures Course Staff',
      period: 'Jan 2023 – May 2023 · Berkeley, CA',
      bullets: [
        '1:1 guidance and debugging for 50+ students in data structures and algorithms; lab completion rates improved ~25%.',
      ],
      logo: '/logos/cs61bee.png',
    },
    {
      company: 'University of California Police Dept.',
      role: 'Community Service Officer',
      period: 'Nov 2022 – Jun 2024 · Berkeley, CA',
      bullets: [
        'Built a shift scheduling tool for 80+ staff, cutting scheduling time by >30% and reducing errors from manual planning.',
      ],
      logo: '/logos/ucpd_safewalk.png',
    },
  ];

  return (
    <section id="experience" className="section experience">
      <div className="container">
        <div className="experience-head">
          <span className="bar" aria-hidden />
          <h2>Experience</h2>
        </div>

        <div className="timeline">
          {items.map((x, i) => (
            <div
              className="tl-item reveal"
              style={{ transitionDelay: `${80 + i * 80}ms` }}
              key={x.company}
            >
              <div className="tl-card">
                {/* Header row with inline logo (no absolute/z-index issues) */}
                <div className="tl-head">
                  <div className="tl-titleblock">
                    <div className="tl-company">{x.company}</div>
                    <div className="tl-role">{x.role}</div>
                    <div className="tl-meta">{x.period}</div>
                  </div>

                  {x.logo && (
                    <Image
                      src={x.logo}
                      alt={`${x.company} logo`}
                      width={240}
                      height={96}
                      className="tl-logo-inline"
                      priority={false}
                    />
                  )}
                </div>

                {/* Bullets */}
                <ul className="tl-list">
                  {x.bullets.map((b, j) => (
                    <li key={j}>{b}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}