import './Order-bottom.scss';

const OrderBottom = () => {
  return (
    <div className="order-agregator">
      <div className="order-bottom-top">
        <p className="discunt-title">Discunt</p>
        <p className="discont-amount">$0</p>
      </div>
      <div className="order-bottom-bottom">
        <p className="discunt-title">Sub total</p>
        <p className="discont-amount">$21.03</p>
      </div>
      <button className="order-btn">Continue to Payment</button>
    </div>
  )
}

export default OrderBottom;