import Food1 from '../assets/images/food1.png';
import Food2 from '../assets/images/food2.png';
import Food3 from '../assets/images/food3.png';

import './MostOrdered.scss';

const MostOrdered = () => {
  return (
    <div className="most-ordered-wrap">
      <div className="most-ordered-top">
        <p className="most-title">Most Ordered</p>
        <select name="1" id="2" className="most-select">
          <option value="1">Today</option>
          <option value="1">Today</option>
          <option value="1">Today</option>
        </select>
      </div>

      <div className="most-ordered-bottom">
        <div className="foods-row">
          <img className="foooods" src={Food1} alt="img"/>
          <div className="content">
            <p className="foods-name">
              Spicy seasoned seafood noodles
            </p>
            <p className="food-dish">
              200 dishes ordered
            </p>
          </div>
        </div>
        <div className="foods-row">
          <img className="foooods" src={Food2} alt="img"/>
          <div className="content">
            <p className="foods-name">
              Salted pasta with mushroom sauce
            </p>
            <p className="food-dish">
              120 dishes ordered
            </p>
          </div>
        </div>
        <div className="foods-row">
          <img className="foooods" src={Food3} alt="img"/>
          <div className="content">
            <p className="foods-name">
              Beef dumpling in hot and sour soup
            </p>
            <p className="food-dish">
              80 dishes ordered
            </p>
          </div>
        </div>
      </div>

      <button className="most-btn">View All</button>
    </div>
  )
}

export default MostOrdered;