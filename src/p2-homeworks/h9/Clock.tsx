import React, {useState} from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'

const withZero = (a:number) => a < 10 ? '0'+a : a

function Clock() {
    const [timerId, setTimerId] = useState<number>(0)
    const [date, setDate] = useState<Date>(new Date())
    const [show, setShow] = useState<boolean>(false)

    const stop = () => {
        // stop
        clearInterval(timerId)
    }
    const start = () => {
        stop()
        const id: number = window.setInterval(() => {
            // setDate
            setDate(new Date())
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
    const stringTime = `${withZero(date.getHours())}:${withZero(date.getMinutes())}:${withZero(date.getSeconds())}`
    // const stringDate = 'Date' // fix with date
    const stringDate = `${withZero(date.getDate())}-${withZero(date.getMonth()+1)}-${withZero(date.getFullYear())}`

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
