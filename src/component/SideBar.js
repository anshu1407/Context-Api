import { Avatar } from '@material-ui/core'
import React from 'react'
import Image from '../image/download.jpeg'
import UserImage from '../image/Cute-Girl-Dp-Images-Pictures-77.jpg'
import './Sidebar.css';

const SideBar = ({userDetails}) => {
  const recentHashTags=(topic)=>(
  topic.map(element => 
    <div className="hashtags">
    <span>#</span>
  <span>{element}</span>
 </div>   
)
  );

  const hashtags=["reactjs", "programming", "developer", "designer"];
    return (
        <div className="main_content">
            <div className="sidebar_card">
              <div className="sidebar">
              <img src={Image} alt="loading background"/>
              <Avatar src={userDetails.profile} style={{ width: 80, height: 80}}></Avatar>
              <h5>{`${userDetails.firstName} ${userDetails.lastName}`}</h5>
              <h6>{userDetails.email}</h6>
              </div>
            </div>

            <div className="sidebar_card margin">
              <div className="sidebar_stat">
                <p>Who viewed you?</p>
                <span>2,345</span>
              </div>
              <div className="sidebar_stat">
                <p>Views on posts</p>
                <span>2,190</span>
              </div>
            </div>

            <div className="sidebar_card margin">
            <p>Recent</p>
            {recentHashTags(hashtags)}
            </div>
        </div>
    )
}

export default SideBar;