import axios from "axios";

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
      return   instance.get( `/profile/` + userId );

    }
}

export const authAPI = {
    me()  {
        return     instance.get(`/auth/me` )
    }
}

