import './SidebarButton.scss';

const SidebarButton = ({icon,active}) => {
  return (
    <div className="btn-wrap">
      <button className={`sidebar-btn ${active ? 'active' : ""}`}>
          <div className="btn-icon">
            {icon}
          </div>
      </button>
    </div>
  )
}

export default SidebarButton;