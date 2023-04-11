import Button from "../Button";
import "./index.css";

const Header = () => {
  return (
    <header className="header">
      <img className="logo" src="/public/assets/images/logo.png" alt="Logo do AluraFlix" />
      <Button text="Novo vídeo"/>
    </header>
  );
};

export default Header;