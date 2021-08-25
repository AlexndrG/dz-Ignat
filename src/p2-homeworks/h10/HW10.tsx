import React from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import s from '../h10/HW10.module.css';
import {useDispatch, useSelector} from 'react-redux';
import {AppStoreType} from './bll/store';
import {loadingAC} from './bll/loadingReducer';
import loadingLogo from './images/loading.gif'

function HW10() {
    // useSelector, useDispatch
    const loading = useSelector<AppStoreType, boolean>(state => state.loading.isLoading)
    const dispatch = useDispatch()

    // const loading = false

    const setLoading = () => {
        // dispatch
        // setTimeout

        dispatch(loadingAC(true))
        setTimeout(()=>{
            dispatch(loadingAC(false))
            console.log('loading...STOPPED!')
        }, 2000)
        console.log('loading...')
    };

    return (
        <div>
            <hr/>
            homeworks 10

            <div className={s.main}>
                {/*should work (должно работать)*/}
                {loading
                    ? (
                        // <div>крутилка...</div>
                        <img src={loadingLogo} style={{width: '250px', height: '250px'}} alt='Loading...'/>
                    ) : (
                        <div>
                            <SuperButton onClick={setLoading}>set loading...</SuperButton>
                        </div>
                    )
                }
            </div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<Alternative/>*/}
            <hr/>
        </div>
    )
}

export default HW10
