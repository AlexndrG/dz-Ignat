import React from 'react'
import s from './Error404.module.css'

function Error404() {
    return (
        <div className={s.error}>
            <div className={s.text}>
                404<br/>
                Sorry...
            </div>

            <img className={s.image} src={'https://images-na.ssl-images-amazon.com/images/I/51yEw1u0HqL._AC_SY1000_.jpg'} alt={'turd'}/>

            {/*<div>Page not found!</div>*/}
            {/*<div>—ฅ/ᐠ.̫ .ᐟ\ฅ—</div>*/}
        </div>
    )
}

export default Error404
