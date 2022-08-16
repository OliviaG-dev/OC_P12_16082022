import "./header.css"
import Logo from "../../assets/Logo.svg"


const Header = () => (
    <div className="header">
      <img className="header__logo" src={Logo} alt={Logo} />
      <ul className="header__list">
        <li className="header__list__item">Accueil</li>
        <li className="header__list__item">Profil</li>
        <li className="header__list__item">Réglage</li>
        <li className="header__list__item">Communauté</li>
      </ul>
    </div>
  );


export default Header