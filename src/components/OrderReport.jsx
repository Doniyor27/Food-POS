import Client from './Client';

import './OrderReport.scss';

const OrderReport = () => {
  return (
    <div className="order-wrap">
      <div className="order-header">
        <div className="title-wrap">
          <p className="order-title">Order Report</p>
          <button className="order-header-btn">Filter Order</button>
        </div>

        <div className="sub-titles-wrap">
          <p className="orders-subtitle">Customer</p>
          <p className="orders-subtitle">Menu</p>
          <p className="orders-subtitle">Total Payment</p>
          <p className="orders-subtitle">Status</p>
        </div>
      </div>
      <div className="order-main">
        <Client/>
        <Client/>
        <Client/>
        <Client/>
        <Client/>
        <Client/>
        <Client/>
        <Client/>
        <Client/>
        <Client/>
      </div>
    </div>
  )
}

export default OrderReport;