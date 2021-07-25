import React from 'react';
import s from './ProfileInfo.module.css'
import Preloader from "../../Common/Preloader/Preloader";
import userPhoto from "../../../assets/images/user.png";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = (props) => {
    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            props.savePhoto(e.target.files[0])
        }
    }

    if (!props.profile) {
        return <Preloader/>
    }

    else {
        return (
            <div>
                <div className={s.descriptionBlock}>
                    <div>
                        <img className={s.avatar} src={props.profile.photos.small || userPhoto}/>
                    </div>
                    {props.isOwner && <input type={'file'} onChange={onMainPhotoSelected}/> }
                    <ProfileStatusWithHooks userId={props.profile.userId} id={props.id}
                                   status={props.status} updateStatus={props.updateStatus}/>
                    <div>{props.profile.fullName}</div>
                    <div>Обо мне: {props.profile.aboutMe}</div>
                    <div>Мой id: {props.profile.userId}</div>
                    <div>{props.profile.lookingForAJob ? <span>У меня есть работа!</span> : <span>Я ищу работу!</span>}</div>
                    <div><a href="https://github.com">Мой GITHUB</a></div>
                    <div><br/> </div>
                    <div><br/>  </div>
                    <div>{ props.follow
                    ? <span>Подписан на {props.profile.fullName}</span>
                    : <span>Не подписан на {props.profile.fullName}</span> }
                    </div>
                </div>
            </div>
        )
    }
}

export default ProfileInfo;