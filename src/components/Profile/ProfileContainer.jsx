import React from "react";
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {
    updateStatusTextThunkCreator,
    setUserProfileThunkCreator, setUserStatusThunkCreator,
    updateProfileUserActionCreator
} from "../../redux/profileReducer";
import {Navigate, useParams} from "react-router-dom";
import {axiosGetUserProfile, getUserProfile} from "../../api/api";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import Login from "../Login/Login";
import {getUserID, getUserIDSelector} from "../../redux/selectors/profileSelectors";

export function withRouter(Children){
    return(props)=>{

        const match  = {params: useParams()};
        return <Children {...props}  match = {match}/>
    }
}

// const PROFILE_API_URL = "https://social-network.samuraijs.com/api/1.0/profile/"

class ProfileAPIContainer extends React.Component {

    componentDidMount() {
        console.log("componentDidMount")
        let userId = this.props.match.params.userId
        //if(!userId) userId = 2

        if(!userId) {
            userId = this.props.userId
        }

        this.props.setUserProfile(userId)
        this.props.setUserStatus(userId)

        // axiosGetUserProfile(userId).then(data => {
        //     this.props.updateProfileUser(data)
        // })
    }

    render() {
        // if(!this.props.isAuth) return <Navigate to="/login"/>
        return <Profile {...this.props} />
    }
}

let mapStateToProps = (state) => {
    return{
        profilePage: state.profilePage,
        userId: getUserID(state)
    }
}

const ProfileContainer = connect(mapStateToProps,
    {
        updateProfileUser: updateProfileUserActionCreator,
        setUserProfile: setUserProfileThunkCreator,
        statusTextChange: updateStatusTextThunkCreator,
        setUserStatus: setUserStatusThunkCreator
    })(withAuthRedirect(withRouter(ProfileAPIContainer)))

export default ProfileContainer