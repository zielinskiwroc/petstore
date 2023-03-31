import { Info } from "../../models/PetStore";
import "./Footer.css";

const Footer = ({ info }: { info: Info }) => {
  return (
    <footer className="Footer">
      <a className="Footer__contact" href={`mailto: ${info.contact.email}`}>
        Contact us
      </a>
    </footer>
  );
};

export default Footer;
