import "./section.css";

interface ISectionProps {
  children: React.ReactNode;
  className?: string;
  background?: string;
  paddingBlock?: string;
  marginBlockEnd?: string;
}

const Section = ({
  children,
  className = "",
  background,
  paddingBlock = "2rem",
  marginBlockEnd = "0",
}: ISectionProps) => {
  return (
    <section
      className={`section-wrapper ${className}`}
      style={{ background, paddingBlock, marginBlockEnd }}
    >
      <div className="container">{children}</div>
    </section>
  );
};

export default Section;
