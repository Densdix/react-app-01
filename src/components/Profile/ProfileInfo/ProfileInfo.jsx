import React from "react";
import s from './ProfileInfo.module.css'
import noAvatar from "../../../assets/images/noavatar.png";
import headerBG from "../../../assets/images/Header-Background.jpg"
import Preloader from "../../common/Preloader/Preloader";
import Status from "./Status";
import StatusWithHooks from "./StatusWithHooks";

const ProfileInfo = (props) => {
    //console.log(props.profileUsersData.photos.small)

    if(!props.profileUsersData){
        return <Preloader/>

    }
    else{
        //console.log(props.profileUsersData)
        return (
            <div>
                <div>
                    <img src={headerBG} width={"100%"} />
                </div>
                <div className={s.description}>
                    {/*avatar + descrip*/}
                    <div><img className={s.avatar} src={props.profileUsersData.photos.small != null ? props.profileUsersData.photos.small : noAvatar} alt="photo"/> </div>
                    <div>{props.profileUsersData.fullName}</div>
                    <div>{props.profileUsersData.aboutMe}</div>
                    <StatusWithHooks profileUserStatus={props.profileUserStatus}
                            statusTextChange={props.statusTextChange}
                            isCurrentUserProfile={props.isCurrentUserProfile}/>
                </div>

            </div>
        )
    }

}

export default ProfileInfo;