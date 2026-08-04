import { ArrowUpRight, Mail, Phone } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '@/components/brand-icons'

const socials = [
  { label: 'Email', value: 'rahuljangid4380@gmail.com', href: 'mailto:rahuljangid4380@gmail.com', icon: Mail },
  { label: 'Phone', value: '+91 70141 38964', href: 'tel:+917014138964', icon: Phone },
  { label: 'GitHub', value: 'github.com/rahul-jangid-29', href: 'https://github.com/rahul-jangid-29', icon: GithubIcon },
  { label: 'LinkedIn', value: 'linkedin.com/in/rahul-jangid', href: 'https://linkedin.com/in/rahul-jangid-2b9845212', icon: LinkedinIcon },
]

export function ContactSection() {
  return (
    <section id="contact" className="border-t border-border px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <span className="font-mono text-sm text-primary">04 — Contact</span>
        <h2 className="mt-4 max-w-3xl text-balance text-5xl font-bold leading-[0.95] tracking-tighter sm:text-6xl md:text-7xl">
          Let&apos;s build something{' '}
          <span className="text-primary">together.</span>
        </h2>
        <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
          I&apos;m open to full-stack roles, freelance projects and collaborations. Drop me a
          message and I&apos;ll get back to you soon.
        </p>

        <a
          href="mailto:rahuljangid4380@gmail.com"
          className="group mt-10 inline-flex items-center gap-3 rounded-full bg-primary px-8 py-4 text-lg font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
        >
          Say hello
          <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>

        <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2">
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target={social.href.startsWith('http') ? '_blank' : undefined}
              rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="group flex items-center gap-4 bg-background p-6 transition-colors hover:bg-card"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-border text-primary transition-colors group-hover:border-primary">
                <social.icon className="h-4 w-4" />
              </span>
              <span className="min-w-0">
                <span className="block font-mono text-xs uppercase tracking-widest text-muted-foreground">
                  {social.label}
                </span>
                <span className="block truncate font-medium text-foreground">{social.value}</span>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
