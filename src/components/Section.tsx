interface SectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
}

export default function Section({
  id,
  className = "",
  children,
}: SectionProps) {
  return (
    <section id={id} className={`py-20 px-6 ${className}`}>
      <div className="container mx-auto">{children}</div>
    </section>
  );
}
