import Axios from 'axios'
import { GET_DATA, URL } from './helper'

const getData = async () => await Axios.get(URL + '/products')

export const getProduct = () => {
    return async (dispatch) => {
        try {
            // get data from api
            const res = await getData()

            // real redux-action
            dispatch({ type : GET_DATA, payload : res.data })
        } catch (err) {
            console.log(err)
        }
    }
}

export const addProduct = (body) => {
    return async (dispatch) => {
        try {
            // add data to database
            const res = await Axios.post(URL + '/products/add', body)
            console.log(res.data)

            // get data from databse
            const res2 = await Axios.get(URL + '/products')
            dispatch({ type : GET_DATA, payload : res2.data })
        } catch (err) {
            console.log(err)
        }
    }
}

export const deleteProduct = (id) => {
    return async (dispatch) => {
        try {
            // delete data
            const res = await Axios.delete(URL + `/products/delete/${id}`)
            console.log(res.data)

            // get data
            const res2 = await Axios.get(URL + '/products')
            dispatch({ type : GET_DATA, payload : res2.data })
        } catch (err) {
            console.log(err)
        }
    }
}

export const editProduct = (id, body) => {
    return async (dispatch) => {
        try {
            // edit data
            const res = await Axios.patch(URL + `/products/edit/${id}`, body)
            console.log(res.data)

            // get data
            const res2 = await Axios.get(URL + '/products')
            dispatch({ type : GET_DATA, payload : res2.data })
        } catch (err) {
            console.log(err)
        }
    }
}