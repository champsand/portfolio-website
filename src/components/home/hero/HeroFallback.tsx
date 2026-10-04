export default function HeroFallback() {
  return (
    <svg className="hero-fallback" viewBox="0 0 600 600" fill="none" aria-hidden="true">
      <g stroke="#ab92c3" strokeWidth="1">
        <path d="M280 150 405 235 370 365 240 400 175 275Z" fill="#665477" fillOpacity=".65" />
        <path d="m280 150 25 145 100-60m-100 60 65 70m-65-70-65 105m65-105-130-20m105-125-105 125m130 20-65 105" opacity=".8" />
        <path d="m140 105 70 45 15 95-100-40Z m0 0 5 85 65-40m-65 40 80 55" fill="#62556f" fillOpacity=".25" />
        <path d="m435 140 75 135-130-60Z m0 0-10 85 85 50" fill="#746780" fillOpacity=".3" />
        <path d="m395 335 65 75-80 95-50-100Z m65 75-85 10-45-15m45 15 5 85m-5-85 20-85" fill="#9782b0" fillOpacity=".65" />
        <ellipse cx="300" cy="300" rx="260" ry="90" transform="rotate(-25 300 300)" opacity=".4" />
        <ellipse cx="300" cy="300" rx="240" ry="85" transform="rotate(48 300 300)" opacity=".25" />
        <path d="m90 230 50-125 170-35 180 120 30 190-110 140-210-20-110-110Z" opacity=".22" />
      </g>
      {[[90,230],[140,105],[310,70],[490,190],[520,380],[410,520],[200,500],[90,390],[175,275],[405,235],[240,400],[380,505]].map(([x,y], i) => <circle key={i} cx={x} cy={y} r={i % 4 === 0 ? 4 : 2.5} fill="#b993db" />)}
    </svg>
  );
}
