import './Crud.scss';

import Food1 from '../assets/images/food1.png';
import Food2 from '../assets/images/food2.png';
import Food3 from '../assets/images/food3.png';
import Food4 from '../assets/images/food4.png';
import Delete from '../assets/images/delete.svg';

const Crud = () => {
  return (
    <div className="crud-wrap">
      <div className="crud-top-part">
        <img src={Food1} alt="" className="crud-img"/>
        <div className="crud-info">
          <p className="title">Spicy seasoned sea...</p>
          <p className="cost">$ 2.29</p>
        </div>
        <div className="crud-count">2</div>
        <p className="total-cost">$ 4,58</p>
      </div>

      <div className="crud-bottom-part">
        <textarea className="crud-textarea" name="area" id="1" placeholder="Order Note..."></textarea>
        <a href="javascript:void(0)" className="crud-delete"> <img src={Delete} alt="delete" className="delete-icon"/></a>
      </div>
      <div className="crud-top-part">
        <img src={Food2} alt="" className="crud-img"/>
        <div className="crud-info">
          <p className="title">Spicy seasoned sea...</p>
          <p className="cost">$ 2.29</p>
        </div>
        <div className="crud-count">2</div>
        <p className="total-cost">$ 4,58</p>
      </div>

      <div className="crud-bottom-part">
        <textarea className="crud-textarea" name="area" id="1" placeholder="Order Note..."></textarea>
        <a href="javascript:void(0)" className="crud-delete"> <img src={Delete} alt="delete" className="delete-icon"/></a>
      </div>
      <div className="crud-top-part">
        <img src={Food3} alt="" className="crud-img"/>
        <div className="crud-info">
          <p className="title">Spicy seasoned sea...</p>
          <p className="cost">$ 2.29</p>
        </div>
        <div className="crud-count">2</div>
        <p className="total-cost">$ 4,58</p>
      </div>

      <div className="crud-bottom-part">
        <textarea className="crud-textarea" name="area" id="1" placeholder="Order Note..."></textarea>
        <a href="javascript:void(0)" className="crud-delete"> <img src={Delete} alt="delete" className="delete-icon"/></a>
      </div>
      <div className="crud-top-part">
        <img src={Food4} alt="" className="crud-img"/>
        <div className="crud-info">
          <p className="title">Spicy seasoned sea...</p>
          <p className="cost">$ 2.29</p>
        </div>
        <div className="crud-count">2</div>
        <p className="total-cost">$ 4,58</p>
      </div>

      <div className="crud-bottom-part">
        <textarea className="crud-textarea" name="area" id="1" placeholder="Order Note..."></textarea>
        <a href="javascript:void(0)" className="crud-delete"> <img src={Delete} alt="delete" className="delete-icon"/></a>
      </div>
      <div className="crud-top-part">
        <img src={Food1} alt="" className="crud-img"/>
        <div className="crud-info">
          <p className="title">Spicy seasoned sea...</p>
          <p className="cost">$ 2.29</p>
        </div>
        <div className="crud-count">2</div>
        <p className="total-cost">$ 4,58</p>
      </div>

      <div className="crud-bottom-part">
        <textarea className="crud-textarea" name="area" id="1" placeholder="Order Note..."></textarea>
        <a href="javascript:void(0)" className="crud-delete"> <img src={Delete} alt="delete" className="delete-icon"/></a>
      </div>
      <div className="crud-top-part">
        <img src={Food3} alt="" className="crud-img"/>
        <div className="crud-info">
          <p className="title">Spicy seasoned sea...</p>
          <p className="cost">$ 2.29</p>
        </div>
        <div className="crud-count">2</div>
        <p className="total-cost">$ 4,58</p>
      </div>

      <div className="crud-bottom-part">
        <textarea className="crud-textarea" name="area" id="1" placeholder="Order Note..."></textarea>
        <a href="javascript:void(0)" className="crud-delete"> <img src={Delete} alt="delete" className="delete-icon"/></a>
      </div>
      <div className="crud-top-part">
        <img src={Food4} alt="" className="crud-img"/>
        <div className="crud-info">
          <p className="title">Spicy seasoned sea...</p>
          <p className="cost">$ 2.29</p>
        </div>
        <div className="crud-count">2</div>
        <p className="total-cost">$ 4,58</p>
      </div>

      <div className="crud-bottom-part">
        <textarea className="crud-textarea" name="area" id="1" placeholder="Order Note..."></textarea>
        <a href="javascript:void(0)" className="crud-delete"> <img src={Delete} alt="delete" className="delete-icon"/></a>
      </div>
      <div className="crud-top-part">
        <img src={Food2} alt="" className="crud-img"/>
        <div className="crud-info">
          <p className="title">Spicy seasoned sea...</p>
          <p className="cost">$ 2.29</p>
        </div>
        <div className="crud-count">2</div>
        <p className="total-cost">$ 4,58</p>
      </div>

      <div className="crud-bottom-part">
        <textarea className="crud-textarea" name="area" id="1" placeholder="Order Note..."></textarea>
        <a href="javascript:void(0)" className="crud-delete"> <img src={Delete} alt="delete" className="delete-icon"/></a>
      </div>
    </div>
  )
}

export default Crud;