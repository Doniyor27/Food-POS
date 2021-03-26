import './SettingsHeader.scss';

const SetHeader = () => {
  return (
    <div className="set-header-wrap">
      <div className="set-header-top">
        <p className="set-header-top-title">Products Management</p>
        <button className="order-header-btn">Manage Categories</button>
      </div>

      <div className="set-header-bottom">
        <a href="javascript:void(0)" className="dish-link">Hot Dishes</a>
        <a href="javascript:void(0)" className="dish-link">Cold Dishes</a>
        <a href="javascript:void(0)" className="dish-link">Soup</a>
        <a href="javascript:void(0)" className="dish-link">Grill</a>
        <a href="javascript:void(0)" className="dish-link">Appetizer</a>
        <a href="javascript:void(0)" className="dish-link">Dessert</a>
      </div>
    </div>
  )
}

export default SetHeader;