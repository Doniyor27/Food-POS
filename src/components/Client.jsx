import Ava1 from '../assets/images/Avatar 1.png';
import Ava2 from '../assets/images/Avatar 2.png';
import Ava3 from '../assets/images/Avatar 3.png';
import Ava4 from '../assets/images/Avatar 4.png';
import Ava5 from '../assets/images/Avatar 5.png';

import './Client.scss';

const Client = () => {
  return (
    <div className="clients-wrap">
      <div className="client-wrap">
        <img src={Ava1} alt="img" className="client-img"/>
        <p className="client-name">Eren Jaegar</p>
        <p className="food-name">Spicy seasoned seafood noodles </p>
        <p className="food-cost">$125</p>
        <p className="status">Completed</p>
      </div>
      {/* <div className="client-wrap">
        <img src={Ava2} alt="img" className="client-img"/>
        <p className="client-name">Reiner Braunn</p>
        <p className="food-name">Salted Pasta with mushroom sauce</p>
        <p className="food-cost">$145</p>
        <p className="status">Preparing</p>
      </div>
      <div className="client-wrap">
        <img src={Ava3} alt="img" className="client-img"/>
        <p className="client-name">Levi Ackerman</p>
        <p className="food-name">Beef dumpling in hot and sour soup</p>
        <p className="food-cost">$105</p>
        <p className="status">Pending</p>
      </div>
      <div className="client-wrap">
        <img src={Ava4} alt="img" className="client-img"/>
        <p className="client-name">Historia Reiss</p>
        <p className="food-name">Hot spicy fried rice with omelet</p>
        <p className="food-cost">$45</p>
        <p className="status">$45</p>
      </div>
      <div className="client-wrap">
        <img src={Ava5} alt="img" className="client-img"/>
        <p className="client-name">Hanji Zoe</p>
        <p className="food-name">Hot spicy fried rice with omelet</p>
        <p className="food-cost">$245</p>
        <p className="status">Completed</p>
      </div> */}
    </div>
  )
}

export default Client;