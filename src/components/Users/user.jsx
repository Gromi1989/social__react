import React from "react";
import classes from "./users.module.css";
import userPhoto from "../../assets/images/users.png";
import {NavLink} from "react-router-dom";


let User = ({user, followingInProgress, unfollow, follow}) => {
    return <div>
        <div className={classes.usersContainer}>
            <div className={classes.userClick}>
                <div>
                    <NavLink to={'./../profile/' + user.id}>
                        <img src={user.photos.small != null ? user.photos.small : userPhoto}
                             className={classes.userPhoto}/>
                    </NavLink>
                </div>
                <div>
                    {user.followed
                        ? <button disabled={followingInProgress.some(id => id === user.id)}
                                  className={classes.great_btn_un} onClick={() => {
                            unfollow(user.id)
                        }}>
                            Підписатися</button>
                        : <button disabled={followingInProgress.some(id => id === user.id)}
                                  className={classes.great_btn} onClick={() => {
                            follow(user.id)
                        }}>
                            Відписатися</button>}
                </div>
            </div>
            <div className={classes.userInfo}>
                <div className={classes.nameStatus}>
                    <div>{user.name}</div>
                    <div>{user.status}</div>
                </div>
                <div className={classes.location}>
                    <div>{"user.location.country"}</div>
                    <div>{"user.location.city"}</div>
                </div>
            </div>

        </div>
    </div>
}


export default User