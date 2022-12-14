import React from "react";
import classes from "./users.module.css";

let Users = (props) => {
    if (props.users.length === 0) {
        props.setUsers(
            [
                {
                    id: 1,
                    photoUrl: 'https://images.unsplash.com/photo-1566275529824-cca6d008f3da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cGhvdG98ZW58MHx8MHx8&w=1000&q=80',
                    followed: false,
                    fullName: 'Sweta',
                    status: 'i am a boss',
                    location: {city: 'Vinnytsia', country: 'Ukraine'}
                },
                {
                    id: 2,
                    photoUrl: 'https://images.unsplash.com/photo-1566275529824-cca6d008f3da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cGhvdG98ZW58MHx8MHx8&w=1000&q=80',
                    followed: true,
                    fullName: 'Maks',
                    status: 'i am a boss',
                    location: {city: 'Vinnytsia', country: 'Ukraine'}
                },
                {
                    id: 3,
                    photoUrl: 'https://images.unsplash.com/photo-1566275529824-cca6d008f3da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cGhvdG98ZW58MHx8MHx8&w=1000&q=80',
                    followed: false,
                    fullName: 'Veronika',
                    status: 'i am a boss',
                    location: {city: 'Vinnytsia', country: 'Ukraine'}
                },
            ],
        )
    }
    return <div>
        {
            props.users.map(u => <div key={u.id} className={classes.usersContainer}>
                <div className={classes.userClick}>
                    <div> <img src={u.photoUrl} className={classes.userPhoto}/></div>
                    <div>{u.followed
                        ? <button onClick={() => {
                            props.unfollow(u.id)
                        }}>Підписатися</button>
                        : <button onClick={() => {
                            props.follow(u.id)
                        }}>Відписатися</button>}</div>
                </div>
                <div className={classes.userInfo}>
                    <div className={classes.nameStatus}>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </div>
                    <div className={classes.location}>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </div>
                </div>

            </div>)
        }
    </div>
}

export default Users;