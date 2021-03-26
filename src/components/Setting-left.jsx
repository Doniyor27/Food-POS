import './Setting-left.scss'

const SetBtn = ({icons,title,subtitle}) => {
  return (
    <div className="settings-btn">
      <div className="btn-icons">
        {icons}
      </div>
      <div>
        <p className="btn-title">{title}</p>
        <p className="btn-subtitle">{subtitle}</p>
      </div>
      
    </div>
  )
}

export default SetBtn;