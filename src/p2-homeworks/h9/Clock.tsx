import React, {useState} from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'

const zero = (a:number) => a < 10 ? '0'+a : a

function Clock() {
    const [timerId, setTimerId] = useState<number>(0)
    const [date, setDate] = useState<Date>(new Date)
    const [show, setShow] = useState<boolean>(false)

    const stop = () => {
        // stop
        clearInterval(timerId)
    }
    const start = () => {
        stop()
        const id: number = window.setInterval(() => {
            // setDate
            setDate(new Date)
        }, 1000)
        setTimerId(id)
    }

    const onMouseEnter = () => {
        // show
        setShow(true)
    }
    const onMouseLeave = () => {
        // close
        setShow(false)
    }

    // const stringTime = 'Time' // fix with date
    const stringTime = `${zero(date.getHours())}:${zero(date.getMinutes())}:${zero(date.getSeconds())}`
    // const stringDate = 'Date' // fix with date
    const stringDate = `${zero(date.getDate())}-${zero(date.getMonth()+1)}-${zero(date.getFullYear())}`

    return (
        <div>
            <div
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >
                {stringTime}
                {show && ` [Date: ${stringDate}]`}
            </div>

            <SuperButton onClick={start}>start</SuperButton>
            <SuperButton onClick={stop}>stop</SuperButton>

        </div>
    )
}

export default Clock
