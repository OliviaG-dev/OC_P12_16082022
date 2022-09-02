import "./keyFigures.css";
import lipIcon from "../../assets/lipIcon.svg";
import gluIcon from "../../assets/gluIcon.svg";
import proIcon from "../../assets/protIcon.svg";
import calIcon from "../../assets/calIcon.svg";
import PropTypes from "prop-types";

const KeyFigures = ({ figureData }) => {
  return (
    <div className="container">
      <div className="keyFigure">
        <img src={calIcon} alt="calorie icon" className="keyFigure__img" />
        <div className="keyFigure__name">
          <span className="keyFigure__name__data">
            {figureData.calorieCount}kCal
          </span>
          <p className="keyFigure__name__label">Calories</p>
        </div>
      </div>

      <div className="keyFigure">
        <img src={proIcon} alt="calorie icon" className="keyFigure__img" />
        <div className="keyFigure__name">
          <span className="keyFigure__name__data">
            {figureData.proteinCount}g
          </span>
          <p className="keyFigure__name__label">Proteines</p>
        </div>
      </div>

      <div className="keyFigure">
        <img src={gluIcon} alt="glucides icon" className="keyFigure__img" />
        <div className="keyFigure__name">
          <span className="keyFigure__name__data">
            {figureData.carbohydrateCount}g
          </span>
          <p className="keyFigure__name__label">Glucides</p>
        </div>
      </div>

      <div className="keyFigure">
        <img src={lipIcon} alt="lipides icon" className="keyFigure__img" />
        <div className="keyFigure__name">
          <span className="keyFigure__name__data">
            {figureData.lipidCount}g
          </span>
          <p className="keyFigure__name__label">Lipides</p>
        </div>
      </div>
    </div>
  );
};

KeyFigures.propTypes = {
  figureData: PropTypes.object,
};

export default KeyFigures;
