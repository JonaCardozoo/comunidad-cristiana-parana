import { cn } from "@/lib/utils";

export type SectionHeaderProps = {
  label?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
  titleId?: string;
};

export function SectionHeader({
  label,
  title,
  description,
  align = "center",
  className,
  titleId,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "section-header",
        align === "center" ? "text-center" : "text-left",
        className
      )}
    >
      {label && <p className="section-label">{label}</p>}
      <h2
        id={titleId}
        className="section-title"
        style={{ textWrap: "balance" }}
      >
        {title}
      </h2>
      {description && (
        <p className="section-description">{description}</p>
      )}
    </div>
  );
}

