import Image from 'next/image'
import { ArrowUpRight, MapPin } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '@/components/brand-icons'

export function HeroSection() {
  return (
    <section id="top" className="relative overflow-hidden px-6 pt-32 pb-20 md:pt-44 md:pb-28">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 md:grid-cols-[1.5fr_1fr] md:items-center">
          <div>
            <div className="mb-8 flex items-center gap-3 font-mono text-sm text-muted-foreground">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-primary" />
              </span>
              Available for full-stack roles &amp; freelance
            </div>

            <h1 className="text-balance text-6xl font-bold leading-[0.95] tracking-tighter sm:text-7xl md:text-8xl">
              Rahul
              <br />
              <span className="text-primary">Jangid.</span>
            </h1>

            <p className="mt-8 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl">
              Full-Stack Developer building scalable SaaS applications with{' '}
              <span className="text-foreground">React.js, Node.js, Express.js</span> and{' '}
              <span className="text-foreground">PostgreSQL</span>. I ship secure REST APIs and
              production-ready features in fast-moving Agile teams.
            </p>

            <div className="mt-8 flex flex-col gap-4 font-mono text-sm">
              <span className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary" />
                Ajmer, Rajasthan, India
              </span>
              <div className="flex flex-wrap gap-3">
                <a
                  href="#work"
                  className="group inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 font-medium text-primary-foreground transition-transform hover:-translate-y-0.5"
                >
                  View work
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
                <a
                  href="https://github.com/rahul-jangid-29"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border transition-colors hover:border-primary hover:text-primary"
                >
                  <GithubIcon className="h-4 w-4" />
                </a>
                <a
                  href="https://linkedin.com/in/rahul-jangid-2b9845212"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border transition-colors hover:border-primary hover:text-primary"
                >
                  <LinkedinIcon className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-xs md:max-w-none">
            <div className="absolute -inset-3 rounded-3xl border border-primary/30" aria-hidden="true" />
            <div className="relative aspect-[3/4] overflow-hidden rounded-2xl border border-border bg-card">
              <Image
                src="/images/profile.png"
                alt="Portrait of Rahul Jangid"
                fill
                priority
                sizes="(max-width: 768px) 20rem, 24rem"
                className="object-cover"
              />
            </div>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-4">
          {[
            { value: '25+', label: 'REST APIs built' },
            { value: '150', label: 'Users served' },
            { value: '3', label: 'SaaS modules shipped' },
            { value: '8.87', label: 'B.Tech CGPA' },
          ].map((stat) => (
            <div key={stat.label} className="bg-background px-6 py-8">
              <div className="text-4xl font-bold tracking-tight text-primary">{stat.value}</div>
              <div className="mt-1 font-mono text-xs text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
