import React, {useState} from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'

const getText = (n: number): string => {
    return n < 10 ? '0' + n : '' + n
}

function Clock() {
    const [timerId, setTimerId] = useState<number>(0)
    const [date, setDate] = useState<Date>(new Date())
    const [show, setShow] = useState<boolean>(false)

    const stop = () => {
        // stop
        window.clearTimeout(timerId)
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
    // 'Time' // fix with date
    const stringTime =
        `${getText(date?.getHours())}:` +
        `${getText(date?.getMinutes())}:` +
        `${getText(date?.getSeconds())}`

    // 'Date' // fix with date
    const stringDate =
        `${getText(date?.getDate())}-` +
        `${getText(date?.getMonth() + 1)}-` +
        `${date?.getFullYear()}`

    return (
        <div>
            <div
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >
                {stringTime}
            </div>

            {show && (
                <div>
                    {stringDate}
                </div>
            )}

            <SuperButton onClick={start}>start</SuperButton>
            <SuperButton onClick={stop}>stop</SuperButton>

        </div>
    )
}

export default Clock
