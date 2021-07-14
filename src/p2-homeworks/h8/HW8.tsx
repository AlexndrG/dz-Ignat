import React, {useState} from 'react'
import {homeWorkReducer} from './bll/homeWorkReducer'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import s from './HW8.module.css';

// export type UserType =

type UserType = {
    _id: number
    name: string
    age: number
}

export type UsersType = UserType[]


const initialPeople: UsersType = [
    {_id: 0, name: 'Кот', age: 3},
    {_id: 1, name: 'Александр', age: 66},
    {_id: 2, name: 'Коля', age: 16},
    {_id: 3, name: 'Виктор', age: 44},
    {_id: 4, name: 'Дмитрий', age: 40},
    {_id: 5, name: 'Ирина', age: 55},
]

function HW8() {
    const [people, setPeople] = useState<UsersType>(initialPeople) // need to fix any
    const [status, setStatus] = useState<string>('unsorted')

    // need to fix any
    const finalPeople = people.map((p: UserType) => (
        <div key={p._id}>
            {/*some name, age*/}
            {`${p.name} ${p.age}`}
        </div>
    ))

    const sortUp = () => {
        setPeople(homeWorkReducer(initialPeople, {type: 'sort', payload: 'up'}))
        setStatus('sort name UP')
    }
    const sortDown = () => {
        setPeople(homeWorkReducer(initialPeople, {type: 'sort', payload: 'down'}))
        setStatus('sort name DOWN')
    }
    const check = () => {
        setPeople(homeWorkReducer(initialPeople, {type: 'check', payload: 18}))
        setStatus('check age 18')
    }

    return (
        <div>
            <hr/>
            homeworks 8

            <div className={s.main}>
                {/*should work (должно работать)*/}
                {finalPeople}

                <div>
                    <SuperButton onClick={sortUp}>sort up</SuperButton>
                    <SuperButton onClick={sortDown}>sort down</SuperButton>
                    <SuperButton onClick={check}>check 18</SuperButton>
                </div>

                {/*<div>sort down</div>*/}
                {/*check 18*/}
                <div>Status: <b>{status}</b></div>
            </div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativePeople/>*/}
            <hr/>
        </div>
    )
}

export default HW8
