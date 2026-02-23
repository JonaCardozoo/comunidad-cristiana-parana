export function MarqueeBanner() {
  const items = [
    "Domingos 10:00 hs - Reunion General",
    "Sabados 19:00 hs - Jovenes",
  ];

  const repeated = [...items, ...items, ...items, ...items];

  return (
    <div className="overflow-hidden bg-primary py-3">
      <div className="animate-marquee flex w-max items-center gap-12 ">
        {repeated.map((item, i) => (
          <span key={i} className="flex items-center gap-12 whitespace-nowrap text-sm font-medium tracking-wide text-primary-foreground ">
            {item}
            <span className="text-warm" aria-hidden="true">&#9830;</span>
          </span>
        ))}
      </div>
    </div>
  );
}
