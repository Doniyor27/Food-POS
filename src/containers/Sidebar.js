import { Link } from 'react-router-dom';

import SidebarButton from '../components/SidebarButton';

import {
  Home,
  Discount,
  Statistics,
  Messages,
  Notification,
  Settings,
  Quit
} from '../assets/icons/icons.js';

import Logo from '../assets/icons/logo.svg'

import { useState } from 'react';

import './Sidebar.scss'

const Sidebar = () => {

  const [activePage, setActivePage] = useState('');

  return (
    <div className="sidebar">

      <a href="javascript:void(0)" className="sidebar-logo">
        <img src={Logo} alt="logo" className="logo-icon"/>
      </a>

      <Link to="home" onClick={() => setActivePage('home')}>
        <SidebarButton icon={<Home/>} active={activePage == 'home'}/>
      </Link>
      <Link to="discount" onClick={() => setActivePage('discount')}>
        <SidebarButton icon={<Discount/>} active={activePage == 'discount'}/>
      </Link>
      <Link to="statistics" onClick={() => setActivePage('statistics')}>
        <SidebarButton icon={<Statistics/>} active={activePage == 'statistics'}/>
      </Link>
      <Link to="messages" onClick={() => setActivePage('messages')}>
        <SidebarButton icon={<Messages/>} active={activePage == 'messages'}/>
      </Link>
      <Link to="notification" onClick={() => setActivePage('notification')}>
        <SidebarButton icon={<Notification/>} active={activePage == 'notification'}/>
      </Link>
      <Link to="settings" onClick={() => setActivePage('settings')}>
        <SidebarButton icon={<Settings/>} active={activePage == 'settings'}/>
      </Link>
      <Link to="quit" onClick={() => setActivePage('quit')}>
        <SidebarButton icon={<Quit/>} active={activePage == 'quit'}/>
      </Link>
    </div>
  )
}

export default Sidebar;