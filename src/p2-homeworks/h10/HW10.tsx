import React from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import s from '../h10/HW10.module.css';
import wait from './public/wait.gif'
import {useDispatch, useSelector} from 'react-redux';
import {ActionsType, loadingAC} from './bll/loadingReducer';
import {Dispatch} from 'redux';
import {AppStateType} from './bll/store';

function HW10() {
    // useSelector, useDispatch
    // const loading = false

    const dispatch = useDispatch<Dispatch<ActionsType>>()

    // const loading:boolean = useSelector(selectLoading)
    const loading: boolean = useSelector((state: AppStateType) => state.loading.loading)
    // const loading = useSelector<AppStateType, boolean>(state => state.loading.loading)


    const setLoading = () => {
        // dispatch
        // setTimeout

        dispatch(loadingAC(true))
        setTimeout(()=> {
            dispatch(loadingAC(false))
        }, 3000)

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
                        <div>
                            <img className={s.wait} src={wait} alt={'wait...'}/>
                        </div>
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
