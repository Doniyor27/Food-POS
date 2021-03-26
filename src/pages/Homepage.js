import Search from '../components/search';
import DishesLink from '../components/dishes-link';
import FoodCards from '../components/food-card';
import Order from '../components/Order';
import Crud from '../components/Crud';
import OrderBottom from '../components/Order-bottom';


import './Homepage.scss';

const HomePage = function() {

  return (

    <div className="wrapper">
      <div className="left-side">
        <div className="top-part">
          <div className="top-part-left">
            <h1 className="home-title">
              Jaegar Resto
            </h1>
            <p className="home-date">
              Tuesday, 2 Feb 2021
            </p>
          </div>
          <div className="top-part-right">
            <Search/>
          </div>
        </div>

        <div className="link-part">
          <DishesLink/>
        </div>

        <div className="choose-part">
          <p className="choose-title">
            Choose Dishes
          </p>
          <select type="select" className="choose-input">
            <option value="1">Dine In</option>
            <option value="1">Dine In</option>
            <option value="1">Dine In</option>
          </select>
        </div>
      <FoodCards/>
      </div>

      <div className="right-side">
        <div className="right-top">
          <Order/>
        </div>
        <Crud/>
        <OrderBottom/>
      </div>
    </div>
  )
}

export default HomePage;