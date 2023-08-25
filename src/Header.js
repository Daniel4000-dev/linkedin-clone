import React from 'react';
import './Header.css';
import './HeaderOption';
import HeaderOption from './HeaderOption';
import SearchIcon from '@mui/icons-material/Search';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import HomeIcon from '@mui/icons-material/Home';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
function Header() {
  return (
    <div className="header">

        <div className="header__left">
            <img
             src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"
             alt=""
            />
            <div className="header__search">
                <SearchIcon />
                <input type="text" />
            </div>   
        </div>  

        <div className="header__right">
          <HeaderOption Icon={HomeIcon} title="Home" />
          <HeaderOption Icon={SupervisorAccountIcon } title="My Network" />
          <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
          <HeaderOption Icon={ChatIcon } title="messaging" />
          <HeaderOption Icon={NotificationsIcon} title="Notifications" />
          <HeaderOption avatar='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE3oDY4-5-qlUFD7tuP5HpnmvWMGrk6c1E6w&usqp=CAU'
           title='me' />
        </div> 
    </div>
  );
}

export default Header