import React from "react";
import classes from "./users.module.css";
import userPhoto from "../../assets/images/users.png";
import {NavLink} from "react-router-dom";

let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return <div>
        <div>
            {pages.map(p => {
                return <span className={props.currentPage === p && classes.selectedPage}
                             onClick={(e) => {
                                 props.onPageChanged(p);
                             }}>{p}</span>
            })}
        </div>
        {
            props.users.map(u => <div key={u.id} className={classes.usersContainer}>
                <div className={classes.userClick}>
                    <div>
                        <NavLink to={'./../profile/' + u.id}>
                            <img src={u.photos.small != null ? u.photos.small : userPhoto}
                                 className={classes.userPhoto}/>
                        </NavLink>
                    </div>
                    <div>
                        {u.followed
                            ? <button disabled={props.followingInProgress.some(id => id === u.id)}
                                      className={classes.great_btn_un} onClick={() => {
                                props.unfollow(u.id)
                            }}>
                                Підписатися</button>
                            : <button disabled={props.followingInProgress.some(id => id === u.id)}
                                      className={classes.great_btn} onClick={() => {
                                props.follow(u.id)
                            }}>
                                Відписатися</button>}
                    </div>
                </div>
                <div className={classes.userInfo}>
                    <div className={classes.nameStatus}>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </div>
                    <div className={classes.location}>
                        <div>{"u.location.country"}</div>
                        <div>{"u.location.city"}</div>
                    </div>
                </div>

            </div>)
        }
    </div>
}


export default Users