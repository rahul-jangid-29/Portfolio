import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'

const freelanceProjects = [
  {
    name: 'GymPro',
    image: '/images/gympro.png',
    href: 'https://gympro-24aca.web.app/',
    description:
      'An innovative fitness tracking platform designed to help users maintain a healthy lifestyle with workout plans and progress tracking.',
    tech: ['React.js', 'Firebase', 'CSS3'],
  },
  {
    name: 'DreamAbode',
    image: '/images/dreamabode.png',
    href: 'https://rahul-jangid-29.github.io/DreamAbode/',
    description:
      'A modern real estate platform that helps users find their dream home with rich property listings and an intuitive browsing experience.',
    tech: ['HTML5', 'CSS3', 'JavaScript'],
  },
  {
    name: 'SavoryBites',
    image: '/images/savorybites.png',
    href: 'https://rahul-jangid-29.github.io/SavoryBites/',
    description:
      'A restaurant website featuring online ordering, reservations and a digital menu experience for a modern dining brand.',
    tech: ['HTML5', 'CSS3', 'JavaScript'],
  },
]

const projects = [
  {
    index: '01',
    name: 'Trackier',
    tag: 'Enterprise SaaS',
    description:
      'Delivered production modules — Meeting Management, Employee Feedback and Salesforce Integration — for ~150 internal users. Designed hierarchical feedback workflows over secure REST APIs and integrated Google Calendar and Salesforce with reusable backend services.',
    tech: ['React.js', 'Node.js', 'Express.js', 'PostgreSQL', 'Sequelize', 'Salesforce API'],
    highlights: ['25+ REST APIs', 'JWT · OAuth 2.0 · RBAC', 'MVC architecture'],
  },
  {
    index: '02',
    name: 'Video Conferencing App',
    tag: 'Full-Stack',
    description:
      'A real-time video conferencing application built during my time at Bharat Intern. Integrated frontend components with backend APIs and collaborated through structured Git workflows.',
    tech: ['React.js', 'Node.js', 'Express.js', 'WebRTC'],
    highlights: ['Real-time communication', 'API integration'],
  },
  {
    index: '03',
    name: 'Text Utils',
    tag: 'Frontend',
    description:
      'A utility-first text manipulation tool for transforming, analyzing and cleaning up text. Built as a full-stack application with a focus on responsive, component-driven UI.',
    tech: ['React.js', 'JavaScript', 'CSS3'],
    highlights: ['Component-driven UI', 'Live text analysis'],
  },
  {
    index: '04',
    name: 'INBA',
    tag: 'Enterprise Forms',
    description:
      'Implemented a variety of frontend and backend forms for a large-scale project. Gained deep insight into GitLab and professional collaboration workflows on enterprise codebases.',
    tech: ['C#', 'MySQL', 'GitLab'],
    highlights: ['Full-stack forms', 'Team collaboration'],
  },
]

export function ProjectsSection() {
  return (
    <section id="work" className="border-t border-border px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <span className="font-mono text-sm text-primary">02 — Selected Work</span>
            <h2 className="mt-4 text-balance text-4xl font-bold tracking-tighter sm:text-5xl">
              Things I&apos;ve built.
            </h2>
          </div>
          <p className="max-w-sm font-mono text-sm text-muted-foreground">
            A selection of production and personal projects spanning SaaS, real-time apps and
            developer tooling.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.name}
              className="group flex flex-col rounded-2xl border border-border bg-card p-8 transition-colors hover:border-primary/60"
            >
              <div className="flex items-start justify-between">
                <span className="font-mono text-sm text-muted-foreground">{project.index}</span>
                <span className="rounded-full border border-border px-3 py-1 font-mono text-xs text-primary">
                  {project.tag}
                </span>
              </div>

              <h3 className="mt-6 flex items-center gap-2 text-2xl font-bold tracking-tight">
                {project.name}
                <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary" />
              </h3>

              <p className="mt-3 flex-1 text-pretty leading-relaxed text-muted-foreground">
                {project.description}
              </p>

              <ul className="mt-5 flex flex-wrap gap-x-5 gap-y-1 font-mono text-xs text-foreground">
                {project.highlights.map((h) => (
                  <li key={h} className="flex items-center gap-1.5">
                    <span className="h-1 w-1 rounded-full bg-primary" />
                    {h}
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-wrap gap-2 border-t border-border pt-6">
                {project.tech.map((t) => (
                  <span key={t} className="font-mono text-xs text-muted-foreground">
                    {t}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="mt-20">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <span className="font-mono text-sm text-primary">Freelance</span>
              <h3 className="mt-4 text-balance text-3xl font-bold tracking-tighter sm:text-4xl">
                Client &amp; freelance work.
              </h3>
            </div>
            <p className="max-w-sm font-mono text-sm text-muted-foreground">
              Shipped, live websites built for real clients and independent projects.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {freelanceProjects.map((project) => (
              <a
                key={project.name}
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-colors hover:border-primary/60"
              >
                <div className="relative aspect-video overflow-hidden border-b border-border">
                  <Image
                    src={project.image || '/placeholder.svg'}
                    alt={`Screenshot of the ${project.name} website`}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h4 className="flex items-center gap-2 text-xl font-bold tracking-tight">
                    {project.name}
                    <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary" />
                  </h4>
                  <p className="mt-2 flex-1 text-pretty text-sm leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2 border-t border-border pt-4">
                    {project.tech.map((t) => (
                      <span key={t} className="font-mono text-xs text-muted-foreground">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
