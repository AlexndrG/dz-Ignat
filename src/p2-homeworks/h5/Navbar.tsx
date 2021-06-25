import React from 'react'
import {NavLink} from 'react-router-dom'
import s from './Navbar.module.css'
import {PATH} from './Routes';

type NavbarType = {
    onLinkClick: () => void
}

export function Navbar(props: NavbarType) {
    return (
        <div className={s.navbar}>
            <div className={s.item}>
                <NavLink
                    to={PATH.PRE_JUNIOR}
                    activeClassName={s.activeLink}
                    onClick={props.onLinkClick}
                >
                    Pre Junior
                </NavLink>
            </div>

            <div className={s.item}>
                <NavLink
                    to={PATH.JUNIOR}
                    activeClassName={s.activeLink}
                    onClick={props.onLinkClick}
                >
                    Junior
                </NavLink>
            </div>

            <div className={s.item}>
                <NavLink
                    to={PATH.JUNIOR_PLUS}
                    activeClassName={s.activeLink}
                    onClick={props.onLinkClick}
                >
                    Junior +
                </NavLink>
            </div>
        </div>
    )
}