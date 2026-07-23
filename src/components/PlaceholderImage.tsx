import { type LucideIcon } from 'lucide-react'
import ServiceIcon from './ServiceIcon'

interface Props {
  icon: LucideIcon
  gradient: string
  label: string
  className?: string
}

export default function PlaceholderImage({ icon, gradient, label, className = '' }: Props) {
  return (
    <div className={`relative overflow-hidden rounded-2xl glass ${className}`}>
      <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-10`} />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(245,158,11,0.08),transparent_70%)]" />
      <div className="absolute -top-8 -right-8 h-32 w-32 rounded-full bg-gradient-to-br from-gold-400/20 to-transparent blur-2xl" />
      <div className="relative flex h-full min-h-[200px] flex-col items-center justify-center gap-4 p-8">
        <ServiceIcon icon={icon} gradient={gradient} size={40} />
        <p className="text-sm font-semibold text-white/70">{label}</p>
      </div>
    </div>
  )
}
