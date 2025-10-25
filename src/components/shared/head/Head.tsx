import { IoIosArrowForward } from "react-icons/io";
import Heading from "../heading/Heading";
import "./head.css";

interface IHeadProps {
  title: string;
  moreHref?: string;
}

const Head = ({ title, moreHref = "/" }: IHeadProps) => {
  return (
    <div className="head">
      <div className="container">
        <Heading>{title}</Heading>
        <a href={moreHref}>
          More <IoIosArrowForward />
        </a>
      </div>
    </div>
  );
};

export default Head;
