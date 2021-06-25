import React from 'react';
import s from './Message.module.css';

type PropsType = {
    avatar: string
    name: string
    message: string
    time: string
}

function Message(props: PropsType) {
    return (
        <div>
            <div className={s.message}>
                <div className={s.avatar}>
                    <img src={props.avatar}/>
                </div>
                <div className={s.arrow}>
                </div>
                <div className={s.messageBlock}>
                    <div className={s.blockName}>{props.name}</div>
                    <div className={s.blockMessage}>{props.message}</div>
                    <div className={s.blockBottom}></div>
                    <div className={s.blockTime}>{props.time}</div>
                </div>
            </div>
        </div>
    )
}

export default Message
