import { CheckCircle2 } from 'lucide-react'
import { trustBadges } from '../data/siteData'

export default function TrustBadges({ variant = 'row' }: { variant?: 'row' | 'grid' }) {
  if (variant === 'grid') {
    return (
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {trustBadges.map((badge) => (
          <div key={badge} className="glass rounded-xl px-4 py-3 flex items-center gap-2">
            <CheckCircle2 size={16} className="text-gold-400 shrink-0" />
            <span className="text-xs font-medium text-white/80">{badge}</span>
          </div>
        ))}
      </div>
    )
  }
  return (
    <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
      {trustBadges.map((badge) => (
        <div key={badge} className="flex items-center gap-1.5">
          <CheckCircle2 size={14} className="text-gold-400 shrink-0" />
          <span className="text-xs font-medium text-white/60">{badge}</span>
        </div>
      ))}
    </div>
  )
}
