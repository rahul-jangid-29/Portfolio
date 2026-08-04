export function SiteFooter() {
  return (
    <footer className="border-t border-border px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 font-mono text-xs text-muted-foreground sm:flex-row">
        <p>© {new Date().getFullYear()} Rahul Jangid. All rights reserved.</p>
        <p>
          Built with Next.js &amp; Tailwind CSS <span className="text-primary">·</span> Designed in v0
        </p>
      </div>
    </footer>
  )
}
