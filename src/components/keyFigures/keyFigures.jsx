import './keyFigures.css';
import lipIcon from '../../assets/lipIcon.svg';
import gluIcon  from'../../assets/gluIcon.svg';
import proIcon from '../../assets/protIcon.svg';
import calIcon from '../../assets/calIcon.svg';


const KeyFigures = (icon) => {
    let formatedProps = [
        {
            img: calIcon,
            unit: "kCal",
            label: "Calories",
            data: icon.keyData.calorieCount,
        },
        {
            img: proIcon,
            unit: "g",
            label: "Proteines",
            data: icon.keyData.proteinCount,
        },
        {
            img: gluIcon,
            unit: "g",
            label: "Glucides",
            data: icon.keyData.carbohydrateCount,
        },
        {
            img: lipIcon,
            unit: "g",
            label: "Lipides",
            data: icon.keyData.lipidCount,
        },
    ];
    return (
        <div className='container'>
            {formatedProps.map((item) => {
                return (
                    <div key={item.label} className='keyFigure'>
                        <img className='keyFigure__img' src={item.img} alt={item.label} />
                        <div className='keyFigure__name'>
                            <span className='keyFigure__name__data'>
                                {item.data}
                                {item.unit}
                            </span>
                            <p className='keyFigure__name__label'>{item.label}</p>
                        </div>
                    </div>                    
                )
            })}
        </div>
    )
}

export default KeyFigures;