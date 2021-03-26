import Dollar from '../assets/images/dollar.png';
import Save from '../assets/images/save.png';
import User from '../assets/images/odam.png';
import Up from '../assets/images/arrow-up.svg';
import Down from '../assets/images/arrow-down.svg';

import './total-statistics.scss';

const TotalStatistics = () => {
  return (
    <div className="card-holder">
      <div className="st-wrapper">
        <div className="st-card">
          <div className="card-top">
            <img className="card-image" src={Dollar} alt="img"/>
            <p className="st-count">+32.40%</p>
            <img className="card-icon" src={Up} alt="img"/>
          </div>
          <p className="money-count">$10,243.00</p>
          <p className="count-title">Total Revenue</p>
        </div>
      </div>

      <div className="st-wrapper">
        <div className="st-card">
          <div className="card-top">
            <img className="card-image" src={Save} alt="img"/>
            <p className="st-count st-count-down">-12.40%</p>
            <img className="card-icon" src={Down} alt="img"/>
          </div>
          <p className="money-count">23,456</p>
          <p className="count-title">Total Dish Ordered</p>
        </div>
      </div>

      <div className="st-wrapper">
        <div className="st-card">
          <div className="card-top">
            <img className="card-image" src={User} alt="img"/>
            <p className="st-count">+2.40%</p>
            <img className="card-icon" src={Up} alt="img"/>
          </div>
          <p className="money-count">1,234</p>
          <p className="count-title">Total Customer</p>
        </div>
      </div>
    </div>
    
  )
}

export default TotalStatistics;