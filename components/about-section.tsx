import { Download } from 'lucide-react'

const skillGroups = [
  {
    title: 'Languages',
    items: ['JavaScript', 'Java', 'SQL', 'C++', 'Python'],
  },
  {
    title: 'Frontend',
    items: ['React.js', 'HTML5', 'CSS3'],
  },
  {
    title: 'Backend',
    items: ['Node.js', 'Express.js', 'RESTful APIs', 'Spring Boot'],
  },
  {
    title: 'Auth & Security',
    items: ['JWT', 'OAuth 2.0', 'RBAC'],
  },
  {
    title: 'Database',
    items: ['PostgreSQL', 'MongoDB', 'MySQL', 'Sequelize ORM', 'Redis'],
  },
  {
    title: 'Cloud & DevOps',
    items: ['AWS', 'Docker', 'Git', 'GitHub', 'GitLab', 'Postman'],
  },
]

export function AboutSection() {
  return (
    <section id="about" className="border-t border-border px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 md:grid-cols-[0.8fr_1.2fr] md:gap-16">
          <div>
            <span className="font-mono text-sm text-primary">01 — About</span>
            <h2 className="mt-4 text-balance text-4xl font-bold tracking-tighter sm:text-5xl">
              Engineering products that scale.
            </h2>

            <a
              href="/resume/Rahul-Jangid-Resume.pdf"
              download
              className="group mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 font-mono text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5"
            >
              <Download className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
              Download résumé
            </a>
          </div>

          <div className="space-y-6 text-pretty text-lg leading-relaxed text-muted-foreground">
            <p>
              I&apos;m a Full-Stack Developer with hands-on experience building scalable SaaS
              applications using React.js, Node.js, Express.js and PostgreSQL. I care about clean
              architecture, secure APIs, and shipping features that hold up in production.
            </p>
            <p>
              Recently at Prismberry Technologies I engineered enterprise SaaS modules for{' '}
              <span className="text-foreground">~150 users</span>, integrated third-party services
              like Google Calendar and Salesforce, and delivered production-ready features in Agile
              teams. I graduated with a{' '}
              <span className="text-foreground">B.Tech in Computer Science</span> from Chitkara
              University with an 8.87 CGPA.
            </p>
          </div>
        </div>

        <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <div key={group.title} className="bg-background p-6">
              <h3 className="font-mono text-xs uppercase tracking-widest text-primary">
                {group.title}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-border px-3 py-1 text-sm text-foreground"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
