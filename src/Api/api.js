import axios from "axios";
import {updateStatus} from "../Redax/profile-reducer";

const instance = axios.create({
    withCredentials: true,
    baseURL:'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY" : "6a83ef03-62ec-4a3d-800a-cf4ca7430fd9"
    }
})

export const usersAPI = {
    getUsers  (currentPage = 1 , pageSize = 10)  {
        return  instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            });
    },
    follow(userId) {
      return   instance.post(`follow/${userId}`)
    },
    unfollow(userId) {
       return  instance.delete(`follow/${userId}`)
    },
    getProfile (userId) {
        console.warn('Obsolete method. Please profileAPI object.')
      return   profileAPI.getProfile(userId);

    }
}

export const profileAPI = {
    getProfile (userId) {
        return   instance.get( `profile/` + userId );
    },
    getStatus(userId){
        return   instance.get( `profile/status/` + userId );
    },
    updateStatus(status){
        return   instance.put( `profile/status`,{status : status});
    }
}

export const authAPI = {
    me()  {
        return     instance.get(`/auth/me` );
    },
    login(email,password, rememberMe = false)  {
        return     instance.post(`/auth/login`, {email,password, rememberMe} );
    },
    logout()  {
        return     instance.delete(`/auth/login`);
    },
}

