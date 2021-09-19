import React from 'react';
import s from './HW13.module.css';
import {Request} from './Request';

export function HW13() {
    return (
        <div>
            <hr/>
            homeworks 13

            <div className={s.main}>
                <Request/>
            </div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperRange/>*/}
            {/*<AlternativeSuperDoubleRange/>*/}
            <hr/>
        </div>
    )
}