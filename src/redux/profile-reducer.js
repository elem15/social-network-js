import {profileAPI, usersAPI} from "../api/api";

const ADD_POST = 'social_network/profile/ADD_POST';
const SET_USER_PROFILE = 'social_network/profile/SET_USER_PROFILE';
const SET_USER_FOLLOW = 'social_network/profile/SET_USER_FOLLOW';
const SET_USER_STATUS = 'social_network/profile/SET_USER_STATUS';
const DELETE_POST = 'social_network/profile/DELETE_POST';

let initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likeCount: 11},
        {id: 2, message: 'Okay', likeCount: 13},
        {id: 3, message: 'Right', likeCount: 15}
    ],
    newPostState: 'YOY',
    profile: null,
    follow: true,
    status: ''
};

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case  ADD_POST:
            let countId = state.posts.length + 1;

            return {
                ...state,
                posts: [...state.posts,
                    {
                        id: countId,
                        message: action.text,
                        likeCount: 17
                    }]
            };

        case DELETE_POST:
            return {
                ...state,
                posts: [...state.posts.filter(p => p.id !== action.postId)]
            }

        case SET_USER_PROFILE:
            return {...state, profile: action.profile}

        case SET_USER_FOLLOW:
            return {...state, follow: action.follow}

        case SET_USER_STATUS:
            return {...state, status: action.status}

        default:
            return state;
    }
}

export const addPostActionCreator = (text) => ({type: ADD_POST, text});
export const deletePostActionCreator = (postId) => ({type: DELETE_POST, postId});

const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
const setUserFollow = (follow) => ({type: SET_USER_FOLLOW, follow})
const setUserStatus = (status) => ({type: SET_USER_STATUS, status})

export const getUserProfile = (userId) =>
   async (dispatch) => {
       let response = await profileAPI.getProfile(userId);
            dispatch(setUserProfile(response.data));
    }

export const getUserFollow = (userId) =>
    async (dispatch) => {
        let response = await usersAPI.getFollow(userId);
            dispatch(setUserFollow(response.data));
    }

export const getStatus = (userId) =>
    async (dispatch) => {
        let response = await profileAPI.getStatus(userId);
            dispatch(setUserStatus(response.data))
}

export const updateStatus = (status) =>
    async (dispatch) => {
       await profileAPI.updateStatus(status);
       dispatch(setUserStatus(status))
    }

export default profileReducer;