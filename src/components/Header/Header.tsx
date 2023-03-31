import { Info } from "../../models/PetStore";
import "./Header.css";

const Header = ({ info }: { info: Info }) => {
  return (
    <header className="Header">
      <img src="logo.png" className="Header__logo" alt="logo" />
      <h1 className="Header__title">
        {info.title} {info.version}
      </h1>
    </header>
  );
};

export default Header;
