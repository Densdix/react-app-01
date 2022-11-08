import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {
    console.log("Profile")
    return (
        <div>
            <ProfileInfo profileUsersData = {props.profilePage.profileUserData}
                         statusTextChange={props.statusTextChange}
                         profileUserStatus={props.profilePage.profileUserStatus}
                         isCurrentUserProfile={props.match.params.userId === undefined}/>
            <MyPostsContainer />
        </div>
    )
}

export default Profile;