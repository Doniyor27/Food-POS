import SetBtn from '../components/Setting-left';
import SetHeader from '../components/SettingsHeader';
import SetMain from '../components/SettingsMain';

import {
  Like,
  House,
  Discount,
  Notification,
  Secur,
  Info
} from '../assets/icons/icons2';

import './SettingsPage.scss';

const SettingsPage = function() {
  return (
    <div className="set-wrap">
      <h2 className="sp-title">Settings</h2>
      <div className="set-sides">
        <div className="settings-left">
        <div className="setbtn-wrap">
          <SetBtn icons={<Like/>} title={'Appereance'} subtitle={'Dark and Light mode, Font size'} />
          <SetBtn icons={<House/>} title={'Your Restaurant'} subtitle={'Dark and Light mode, Font size'} />
          <SetBtn icons={<Discount/>} title={'Products Management'} subtitle={'Manage your product, pricing, etc'} />
          <SetBtn icons={<Notification/>} title={'Notifications'} subtitle={'Customize your notifications'} />
          <SetBtn icons={<Secur/>} title={'Security'} subtitle={'Configure Password, PIN, etc'} />
          <SetBtn icons={<Info/>} title={'About Us'} subtitle={'Find out more about Posly'} />
        </div>
      </div>
      <div className="settings-right">
        <div className="settings-right-top">
          <SetHeader/>
        </div>
        <div className="settings-right-middle">
          <SetMain/>
        </div>
        <div className="settings-right-bottom">
          <a href="javascript:void(0)" className="left-btn">Discard Changes</a>
          <a href="javascript:void(0)" className="right-btn">Save Changes</a>
        </div>
      </div>
      </div>
    </div>
  )
}

export default SettingsPage;