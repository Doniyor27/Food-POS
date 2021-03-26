import './Order.scss';

const Order = () => {
  return (
    <div className="agregator">
      <p className="title">Orders #34562</p> <br/>
      <div className="link-wrap">
        <a href="javascript:void(0)" className="order-link actived">Dine In</a>
        <a href="javascript:void(0)" className="order-link">To Go</a>
        <a href="javascript:void(0)" className="order-link">Delivery</a>
      </div>

      <div className="title-item">
        <p className="item">Item</p>
        <div className="right-item">
          <p className="item">Qty</p>
          <p className="item last">Price</p>
        </div>
      </div>
    </div>
  )
}

export default Order;