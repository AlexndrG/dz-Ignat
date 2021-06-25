import React from 'react'
import {AffairType} from './HW2';
import s from './Affair.module.css'

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType
    deleteAffairCallback: (_id: number) => void
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
        props.deleteAffairCallback(props.affair._id)
    }

    return (
        <div>
            <button onClick={deleteCallback} className={s.button}>X</button>
            <span>
                {`${props.affair._id}. ${props.affair.name} [`}
            </span>
            <span className={`${s[props.affair.priority]}`}>
                {props.affair.priority}
            </span>
            <span>]</span>
        </div>
    )
}

export default Affair
