import { Link } from 'react-router-dom';

import './dishes-link.scss';


const DishesLink = () => {

  return (
    <div className="links-wrap">
      <Link>
      <button className={`dish-link`}>Hot Dishes</button>
      </Link>
      <Link>
      <button className={`dish-link`}>Cold Dishes</button>
      </Link>
      <Link>
      <button className={`dish-link`}>Soup</button>
      </Link>
      <Link>
      <button className={`dish-link`}>Grill</button>
      </Link>
      <Link>
      <button className={`dish-link`}>Appetizer</button>
      </Link>
      <Link>
      <button className={`dish-link`}>Dessert</button>
      </Link>
    </div>
  )
}

export default DishesLink