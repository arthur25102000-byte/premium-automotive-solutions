export function Logo({ compact = false }: { compact?: boolean }) {
  return <svg viewBox={compact ? '225 0 150 95' : '0 0 380 112'} className={compact ? 'vf-logo' : 'brand-logo'} role="img" aria-label="AUTO/VF Premium Cars">
    {!compact && <g fill="none" stroke="currentColor" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round"><path d="M8 64 38 20 68 64 M83 22v28q0 14 15 14h27q15 0 15-14V22 M153 23h63 M184 23v41 M230 24h-2q-12 0-12 13v14q0 13 12 13h20q12 0 12-13V37q0-13-12-13h-18" /></g>}
    <path className="logo-slash" d="m283 5-22 92" strokeWidth="3" fill="none" />
    <path fill="currentColor" d="m284 25 21 0 22 30 31-34h22l-51 56h-12z M337 58h29l-12 13h-29z" />
    {!compact && <text x="57" y="105" fill="currentColor" fontSize="11" fontFamily="Montserrat, sans-serif">P R E M I U M / C A R S</text>}
  </svg>;
}