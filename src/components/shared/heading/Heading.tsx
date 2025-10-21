import "./heading.css";

const Heading = ({ children }: { children: React.ReactNode }) => {
  return <h2 className="heading">{children}</h2>;
};

export default Heading;
