import React, {useState} from 'react'
import s from './Header.module.css'
import { Navbar } from './Navbar'

function Header() {
    const [show, setShow] = useState<boolean>(false)

    const OnLinkClick = () => {
        setShow(false)
    }

    return (
        <div
            className={s.header}
            onMouseOver={() => setShow(true)}
            onMouseLeave={() => setShow(false)}
        >
            My pages
            {show && <Navbar onLinkClick={OnLinkClick}/>}
        </div>
    )
}

export default Header
