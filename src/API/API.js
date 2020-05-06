import axios from 'axios'

export const Axios = (db, id, comment) => {
    switch (db) {
        case 'photos': return  axios.get('https://boiling-refuge-66454.herokuapp.com/images')
            break
        case 'comments': return axios.get(`https://boiling-refuge-66454.herokuapp.com/images/${id}`)
            break
        case 'add': return axios.post(`https://boiling-refuge-66454.herokuapp.com/images/${id}/${comment}`)

    }
}