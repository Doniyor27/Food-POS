import Diagramma from '../assets/images/diagramm.svg';
import './Diagram.scss';

const Diagram = () => {
  return (
    <div className="diagram-wrap">
      <div className="diagram-top">
        <div className="most-ordered-tops">
          <p className="most-title">Most Type of Order</p>
          <select name="1" id="2" className="most-select">
            <option value="1">Today</option>
            <option value="1">Today</option>
            <option value="1">Today</option>
          </select>
        </div>
      </div>
      <div className="diagram-bottom">
        <img className="diagram-side" src={Diagramma} alt="img"/>
        <div className="diagram-right">
          <div className="first-row">
            <div className="color-div"></div>
            <div>
              <p className="diagram-info">Dine In</p>
              <p className="diagram-info2">200 customers</p>
            </div>
          </div>

          <div className="first-row">
            <div className="color-div novvot"></div>
            <div>
              <p className="diagram-info">To Go</p>
              <p className="diagram-info2">122 customers</p>
            </div>
          </div>

          <div className="first-row">
            <div className="color-div blue"></div>
            <div>
              <p className="diagram-info">Delivery</p>
              <p className="diagram-info2">264 customers</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Diagram;