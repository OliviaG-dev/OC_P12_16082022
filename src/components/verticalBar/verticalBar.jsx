import "./verticalBar.css";
import Dumbbells from "../../assets/Dumbbells.svg";
import Yoga from "../../assets/Yoga.svg";
import Swim from "../../assets/Swim.svg";
import Velo from "../../assets/Velo.svg";

const VerticalBar = () => (
  <div className="bar">
    <div className="bar__container" >
      <img className="bar__icone" src={Dumbbells} alt={Dumbbells} />
      <img className="bar__icone" src={Yoga} alt={Yoga} />
      <img className="bar__icone" src={Swim} alt={Swim} />
      <img className="bar__icone" src={Velo} alt={Velo} />
    </div>
    <p className="bar__text">Copiryght, SportSee 2020</p>
  </div>
);

export default VerticalBar;
