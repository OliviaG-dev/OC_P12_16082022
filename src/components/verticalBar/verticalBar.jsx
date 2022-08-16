import "./verticalBar.css";
import Dumbbells from "../../assets/Dumbbells.svg";
import Yoga from "../../assets/Yoga.svg";
import Swim from "../../assets/Swim.svg";
import Velo from "../../assets/Velo.svg";

const VerticalBar = () => (
  <div className="bar">
    <div className="bar__icone" >
      <img className="bar__icone__Dumbbells" src={Dumbbells} alt={Dumbbells} />
      <img className="bar__icone__Yoga" src={Yoga} alt={Yoga} />
      <img className="bar__icone__Swim" src={Swim} alt={Swim} />
      <img className="bar__icone__Velo" src={Velo} alt={Velo} />
    </div>
    <p>Copiryght, SportSee 2020</p>
  </div>
);

export default VerticalBar;
