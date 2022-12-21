import React from "react";
import classes from './Header.module.css'
import {NavLink} from "react-router-dom";
const Header = (props) =>{
    return <header className={classes.header}>
            <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsdhV51pZ1tw6SBn05mvxUlrXexcYpfWehRQ&usqp=CAU"
                alt=""/>

        <div className={classes.loginBlock}>
            {props.isAuth ? props.login
            : <NavLink to={'/login'}>Login</NavLink>  }
        </div>
        </header>
}

export default Header;