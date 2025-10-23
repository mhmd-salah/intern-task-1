import "./section.css";

interface ISectionProps {
  children: React.ReactNode;
  className?: string;
  background?: string;
  padding?: string;
}

const Section = ({
  children,
  className = "",
  background,
  padding,
}: ISectionProps) => {
  return (
    <section
      className={`section-wrapper ${className}`}
      style={{ background, padding }}
    >
      <div className="container">{children}</div>
    </section>
  );
};

export default Section;
