import './SettingsMain.scss';

import Food1 from '../assets/images/food1.png';
import Food2 from '../assets/images/food2.png';
import Food3 from '../assets/images/food3.png';
import Food4 from '../assets/images/food4.png';

const SetMain = () => {
  return (
    <div className="set-main-wrap">
      <div className="add-card">
        <div className="add-card-content">
          <p className="plus">+</p>
          <p className="add-new">Add new dish</p>
        </div>
      </div>

      <div className="old-card">
        <img className="card-image" src={Food1} alt="img"/>
        <p className="food-names">Spicy seasoned seafood noodles</p>
        <p className="food-costs">$ 2.29 - 20 Bowls</p>
        <a href="javascript:void(0)" className="edit-dish">Edit dish</a>
      </div>
      <div className="old-card">
        <img className="card-image" src={Food2} alt="img"/>
        <p className="food-names">Salted Pasta with mushroom sauce</p>
        <p className="food-costs">$ 2.69 - 30 Bowls</p>
        <a href="javascript:void(0)" className="edit-dish">Edit dish</a>
      </div>
      <div className="old-card">
        <img className="card-image" src={Food3} alt="img"/>
        <p className="food-names">Salted Pasta with mushroom sauce</p>
        <p className="food-costs">$ 2.29 - 20 Bowls</p>
        <a href="javascript:void(0)" className="edit-dish">Edit dish</a>
      </div>
      <div className="old-card">
        <img className="card-image" src={Food4} alt="img"/>
        <p className="food-names">Salted Pasta with mushroom sauce</p>
        <p className="food-costs">$ 2.29 - 20 Bowls</p>
        <a href="javascript:void(0)" className="edit-dish">Edit dish</a>
      </div>
      <div className="old-card">
        <img className="card-image" src={Food4} alt="img"/>
        <p className="food-names">Salted Pasta with mushroom sauce</p>
        <p className="food-costs">$ 2.29 - 20 Bowls</p>
        <a href="javascript:void(0)" className="edit-dish">Edit dish</a>
      </div>
      <div className="old-card">
        <img className="card-image" src={Food4} alt="img"/>
        <p className="food-names">Salted Pasta with mushroom sauce</p>
        <p className="food-costs">$ 2.29 - 20 Bowls</p>
        <a href="javascript:void(0)" className="edit-dish">Edit dish</a>
      </div>
    </div>
  )
}

export default SetMain;