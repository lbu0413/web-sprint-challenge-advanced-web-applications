import { axiosWithAuth } from '../axiosWithAuth'

export const fetchApi = () => {
    return (
        axiosWithAuth()
        .get('/api/colors')
        .then(res => {
            console.log(res)
            return res
        })
        .catch(err => {
            console.log(err)
        })
    )
}

