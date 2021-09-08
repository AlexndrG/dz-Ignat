import React, {useState} from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import SuperDoubleRange from './common/c8-SuperDoubleRange/SuperDoubleRange'
import s from '../h11/HW11.module.css';

function HW11() {
    const [value1, setValue1] = useState(25)
    const [value2, setValue2] = useState(75)

    const setStartRange = (val: number) => {
        if (value1 < value2 || val < value1) {
            setValue1(val)
        } else {
            setValue1(val)
            setValue2(val)
        }
    }

    const setBothRanges = (val: number | number[]) => {
        if (val.constructor === Array) {
            setValue1(val[0])
            setValue2(val[1])
        }
    }

    return (
        <div>
            <hr/>
            homeworks 11

            <div className={s.main}>
                {/*should work (должно работать)*/}
                <div className={s.range}>
                    <div className={s.values}>
                        <span>{value1}</span>
                    </div>
                    <SuperRange
                        // сделать так чтоб value1 изменялось
                        value={value1}
                        onChangeRange={setStartRange}
                    />
                </div>

                <div className={s.range}>
                    <div className={s.values}>
                        <span>{value1}</span>
                        <span>{value2}</span>
                    </div>
                    <SuperDoubleRange
                        // сделать так чтоб value1 и value2 изменялось
                        value={[value1, value2]}
                        onChangeRange={setBothRanges}
                    />
                    {/*<span>{value2}</span>*/}
                </div>
            </div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperRange/>*/}
            {/*<AlternativeSuperDoubleRange/>*/}
            <hr/>
        </div>
    )
}

export default HW11
