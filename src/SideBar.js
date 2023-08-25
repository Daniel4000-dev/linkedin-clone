
import { Avatar } from '@mui/material';
import React from 'react';
import './SideBar.css';

function SideBar() {

    const recentItem = (topic) => (
        <div className="sidebar__recentItem">
            <span className="sidebar__hash">#</span>
            <p>{topic}</p>
        </div>
    )

  return (
    <div className='sidebar'>
        <div className="sidebar__top">
            <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/096a8d04-c78d-4e4c-9fb5-d9133da276e3/d55knut-a92f023a-4161-4f5f-bf39-aebb3be249cc.jpg/v1/crop/w_92,h_92,x_8,y_0,scl_0.081777777777778,q_70,strp/consonance_by_rsidwell_d55knut-92s.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTEyNSIsInBhdGgiOiJcL2ZcLzA5NmE4ZDA0LWM3OGQtNGU0Yy05ZmI1LWQ5MTMzZGEyNzZlM1wvZDU1a251dC1hOTJmMDIzYS00MTYxLTRmNWYtYmYzOS1hZWJiM2JlMjQ5Y2MuanBnIiwid2lkdGgiOiI8PTE1MDAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.4udL0RkSVrWONLkCLVueiZ-Fq704IUo-dOpYgVUXiSQ" alt="" />
            <Avatar className='sidebar__avatar'/>
            <h2>Daniel Adekunle</h2>
            <h4>dadekunle31@gmail.com</h4>
        </div>

        <div className='sidebar__stats'>
            <div className='sidebar__stat'>
                <p>who viewed you</p>
                <p className="sidebar__statNumber">2,543</p>
            </div>
            <div className='sidebar__stat'>
                <p>views on post</p>
                <p className="sidebar__statNumber">2,544</p>
            </div>
        </div>
        <div className="sidebar__bottom">
                <p>Recent</p>
                {recentItem('reactjs')}
                {recentItem('programming')}
                {recentItem('softwareengineering')}
                {recentItem('design')}
                {recentItem('developer')}
        </div>
    </div>
  )
}

export default SideBar