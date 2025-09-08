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
      company: 'LegalZoom',
      role: 'Software Engineer',
      period: 'May 2024 – Aug 2024 · Mountain View, CA',
      bullets: [
        'Filing errors led to high customer support volume. Built and deployed Spring Boot REST API endpoints, improving data accuracy and reducing support calls by over 15%.',
        'Data inconsistencies between backend and UI disrupted workflows. Integrated APIs into customer-facing UI and refined schemas, ensuring reliable transactions across thousands of daily filings.',
      ],
      logo: '/logos/legalzoom.png',
    },
    {
      company: 'Pienomial',
      role: 'Software Engineer',
      period: 'Jun 2022 – Aug 2022 · Remote',
      bullets: [
        'Distributed systems required tamper-proof validation. Implemented Merkle tree data structures in Go/Rust with MongoDB integration, reinforcing backend security.',
        'Automated operational task workflows with secure scripts, cutting maintenance time by ~30%.'
      ],
      logo: '/logos/pienomial.png',
    },
    {
      company: 'UC Berkeley - EECS (CS61B)',
      role: 'Data Structures Course Staff',
      period: 'Jan 2023 – May 2023 · Berkeley, CA',
      bullets: [
        'Supported 50+ students mastering core data structures and algorithms via 1:1 guidance and debugging, improving lab completion rates by ~25%.',
      ],
      logo: '/logos/cs61bee.png',
    },
    {
      company: 'University of California Police Dept.',
      role: 'Community Service Officer',
      period: 'Nov 2022 – Jun 2024 · Berkeley, CA',
      bullets: [
        'Manual shift scheduling for 80+ staff was slow and error-prone.',
        'Took initiative to develop a shift scheduling tool, reducing scheduling time by >30% and boosting department efficiency.',
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