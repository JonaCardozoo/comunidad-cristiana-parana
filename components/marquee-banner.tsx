export function MarqueeBanner() {
  const items = [
    "Domingos 10:00 hs - Reunion General",
    "Sábados 16:30 hs - Pre adolescentes",
    "Sábados 18:30 hs - Jóvenes",

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
