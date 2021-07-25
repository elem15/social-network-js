import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import ProfileHead from './ProfileHead/ProfileHead';
import s from './Profile.module.css';
import MyPostsContainer from "./MyPosts/MyPostsContainer";


const Profile = (props) => {

    return (
      <div> 
      <ProfileHead />
      <div className={s.main}>  
      <ProfileInfo profile={props.profile} follow={props.follow} id={props.id}
                   status={props.status} updateStatus={props.updateStatus}
                    isOwner={props.isOwner} savePhoto={props.savePhoto}
      />
      <MyPostsContainer  />
      </div>
    </div>
    )
}

export default Profile;