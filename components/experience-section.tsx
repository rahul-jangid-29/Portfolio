const experience = [
  {
    role: 'Software Developer Intern',
    company: 'Prismberry Technologies',
    location: 'Noida, Uttar Pradesh',
    period: 'Oct 2024 — Oct 2025',
    points: [
      'Engineered full-stack SaaS features using React.js, Node.js, Express.js, PostgreSQL and Sequelize ORM.',
      'Delivered 3 Trackier modules — Meeting Management, Employee Feedback and Salesforce Integration — over a four-month cycle.',
      'Developed 25+ RESTful APIs following MVC architecture for scalable frontend-backend communication.',
      'Implemented JWT, OAuth 2.0 and RBAC to secure workflows for ~150 employees.',
      'Containerized services with Docker, participated in AWS deployments and validated APIs with Postman in Agile sprints.',
    ],
  },
  {
    role: 'Full-Stack Developer Intern',
    company: 'Bharat Intern',
    location: 'Remote',
    period: 'Aug 2022 — Nov 2023',
    points: [
      'Built full-stack applications including Text Utils and a Video Conferencing app using React.js, Node.js and Express.js.',
      'Integrated frontend components with backend APIs while collaborating through Git workflows.',
    ],
  },
]

const certifications = [
  'Salesforce Certified Associate — Salesforce',
  'Salesforce UI/UX Designer/Developer — Salesforce',
  'Software Engineering, C++ — Infosys',
]

export function ExperienceSection() {
  return (
    <section id="experience" className="border-t border-border px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 md:grid-cols-[0.8fr_1.2fr] md:gap-16">
          <div className="md:sticky md:top-28 md:self-start">
            <span className="font-mono text-sm text-primary">03 — Experience</span>
            <h2 className="mt-4 text-balance text-4xl font-bold tracking-tighter sm:text-5xl">
              Where I&apos;ve worked.
            </h2>

            <div className="mt-10 rounded-2xl border border-border bg-card p-6">
              <h3 className="font-mono text-xs uppercase tracking-widest text-primary">
                Education
              </h3>
              <p className="mt-3 font-semibold">B.Tech, Computer Science &amp; Engineering</p>
              <p className="text-sm text-muted-foreground">
                Chitkara University, Baddi, Himachal
              </p>
              <p className="mt-1 font-mono text-xs text-muted-foreground">2025 · CGPA 8.87</p>
            </div>

            <div className="mt-6 rounded-2xl border border-border bg-card p-6">
              <h3 className="font-mono text-xs uppercase tracking-widest text-primary">
                Certifications
              </h3>
              <ul className="mt-4 space-y-3">
                {certifications.map((cert) => (
                  <li key={cert} className="flex gap-2 text-sm text-muted-foreground">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />
                    {cert}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <ol className="relative border-l border-border">
            {experience.map((job) => (
              <li key={job.company} className="relative pb-12 pl-8 last:pb-0">
                <span className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full bg-primary" />
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-xl font-bold tracking-tight">{job.role}</h3>
                  <span className="font-mono text-xs text-muted-foreground">{job.period}</span>
                </div>
                <p className="mt-1 font-mono text-sm text-primary">
                  {job.company} <span className="text-muted-foreground">· {job.location}</span>
                </p>
                <ul className="mt-4 space-y-3">
                  {job.points.map((point) => (
                    <li key={point} className="flex gap-3 text-pretty leading-relaxed text-muted-foreground">
                      <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-primary" />
                      {point}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
