export function Footer() {
  return (
    <footer className="border-t border-slate-800/60 py-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="relative w-7 h-7">
              <div className="absolute inset-0 rounded-full border border-cyan-500/40" />
              <div className="absolute inset-1.5 rounded-full bg-cyan-500/15" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-1 h-1 rounded-full bg-cyan-400" />
              </div>
            </div>
            <span className="font-semibold text-white text-sm">
              Retention<span className="text-gradient-blue">Radar</span>
            </span>
          </div>

          <p className="text-xs text-slate-500 text-center">
            AI relationship intelligence for service businesses.
          </p>

          <p className="text-xs text-slate-600">
            contact@retentionradar.com
          </p>
        </div>

        <div className="mt-8 pt-6 border-t border-slate-800/40 text-center">
          <p className="text-xs text-slate-600">
            © {new Date().getFullYear()} Retention Radar. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
