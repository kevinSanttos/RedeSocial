import { Link } from "react-router-dom";
import { StyledHeader } from "./style";

interface IHeaderProps {
  link: string;
  text: string;
}

export const Header = ({ link, text }: IHeaderProps) => {
  const title = "< Dev Network />"
  return (
    <StyledHeader>
      <nav>
        <h1>{title}</h1>
        <Link to={link}>{text}</Link>
      </nav>
    </StyledHeader>
  );
};
