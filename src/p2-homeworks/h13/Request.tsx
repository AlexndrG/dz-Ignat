import React, {ChangeEvent, useState} from 'react';
import s from './HW13.module.css';
import {PostType, requestApi} from './RequestsAPI';

export const Request = () => {
    const [checked, setChecked] = useState(false)
    const [result, setResult] = useState<PostType>()

    const checkBoxClick = (e: ChangeEvent<HTMLInputElement>) => {
        setChecked(e.currentTarget.checked)
    }

    const sendData = () => {
        requestApi.postData(checked)
            .then(response => {
                console.log(response)
                setResult(response.data)
            })
            .catch(err => {
                console.log(err.response)
                setResult(err.response.data)
            })
    }

    return (
        <>
            <input type={'checkbox'} checked={checked} onChange={checkBoxClick}/>
            <button onClick={sendData}>Send</button>
            {result &&
                <div className={s.result}>
                    <h3>Result:</h3>
                    <br/><b>{`errorText: `}</b>{result.errorText}
                    <br/><b>{`info: `}</b>{result.info}
                    <br/><b>{`yourBody: `}</b>{JSON.stringify(result.yourBody)}
                    <br/><b>{`yourQuery: `}</b>{JSON.stringify(result.yourQuery)}
                </div>
            }
        </>
    )
}