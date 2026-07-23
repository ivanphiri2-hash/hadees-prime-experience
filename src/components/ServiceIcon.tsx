import { type LucideIcon } from 'lucide-react'

interface Props {
  icon: LucideIcon
  gradient: string
  size?: number
  className?: string
}

export default function ServiceIcon({ icon: Icon, gradient, size = 28, className = '' }: Props) {
  return (
    <div
      className={`relative inline-flex items-center justify-center rounded-2xl bg-gradient-to-br ${gradient} p-3 shadow-lg ${className}`}
      style={{ width: size + 24, height: size + 24 }}
    >
      <Icon size={size} className="text-white" strokeWidth={1.8} />
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/20 to-transparent opacity-30" />
    </div>
  )
}
