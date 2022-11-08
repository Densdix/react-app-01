import {
    axiosGetStatusText,
    axiosGetUserProfile,
    axiosPutStatusText
} from "../api/api";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const UPDATE_PROFILE_USER = "UPDATE_PROFILE_USER";
const STATUS_TEXT_CHANGE = "STATUS_TEXT_CHANGE";

let initState = {
    postData: [
        {
            id: 1,
            msg: "Hi, Hello from you",
            likesCount: 10,
            imgUrl: "https://www.pngall.com/" +
                "wp-content/uploads/12/Avatar-Profile-PNG-Photos.png"
        },
        {
            id: 2,
            msg: "See yaa",
            likesCount: 30,
            imgUrl: "https://img.freepik.com/" +
                "premium-vector/man-avatar-profile-on-round-icon_24640-14044.jpg?w=2000"
        },
        {
            id: 3,
            msg: "GGWP",
            likesCount: 60,
            imgUrl: "https://w7.pngwing.com/" +
                "pngs/481/915/png-transparent-computer-icons-user-avatar-woman-avatar-computer-business-conversation-thumbnail.png"
        }
    ],
    newPostText: "",
    profileUserData: null,
    profileUserStatus: null
}

const getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
}


const profileReducer = (state = initState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: state.postData.length,
                msg: action.newPostText,
                imgUrl: state.postData[getRandomInt(3)].imgUrl,
                likesCount: 10
            }
            return {
                ...state,
                postData: [...state.postData, newPost],
                newPostText:""
            }
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            }
        case UPDATE_PROFILE_USER:
            return {
                ...state,
                profileUserData: action.profileUserData
            }
        case STATUS_TEXT_CHANGE:
            return {
                ...state,
                profileUserStatus: action.profileUserStatus
            }
        default:
            return state
    }
}

export const addPostActionCreator = (newPostText) => {
    return {type: ADD_POST, newPostText: newPostText}
}

export const updateNewPostTextActionCreator = (text) => {
    return {type: UPDATE_NEW_POST_TEXT, newText: text}
}
export const updateProfileUserActionCreator = (data) => {
    return {type: UPDATE_PROFILE_USER, profileUserData: data}
}

export const statusTextChangeActionCreator = (profileUserStatus) => {
    return {type: STATUS_TEXT_CHANGE, profileUserStatus: profileUserStatus}
}

export const setUserProfileThunkCreator = (userId) => {
    return (dispatch) => {
        axiosGetUserProfile(userId).then(data => {
            dispatch(updateProfileUserActionCreator(data))
        })
    }
}

export const setUserStatusThunkCreator = (userId) => {
    return (dispatch) => {
        axiosGetStatusText(userId).then(data => {
            dispatch(statusTextChangeActionCreator(data))

        })
    }
}
export const updateStatusTextThunkCreator = (value) => {
    return (dispatch) => {
        axiosPutStatusText(value).then(data => {
            if(data.resultCode === 0)
                dispatch(statusTextChangeActionCreator(value))
        })
    }
}

export default profileReducer