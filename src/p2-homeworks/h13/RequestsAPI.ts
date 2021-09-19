import axios from 'axios';

export const requestApi = {
    postData(checked: boolean) {
        return axios.post<PostType>('https://neko-cafe-back.herokuapp.com/auth/test', {success: checked})
    },
}

export type PostType = {
    errorText: string
    info: string
    yourBody: {
        success: boolean
    }
    yourQuery: {}
}