import Axios from 'axios'

import { URL, GET_CATEGORY_DETAILS } from './helper'

export const getCategoryDetails = () => {
    return async (dispatch) => {
        try {
            const res = await Axios.get(URL + '/category/details')
            dispatch({ type : GET_CATEGORY_DETAILS, payload : res.data })
        } catch (err) {
            console.log(err)
        }
    }
}

export const addCategory = (body) => {
    return async (dispatch) => {
        try {
            // add new category
            const res = await Axios.post(URL + '/category', body)
            console.log(res.data)

            // update data di redux : category detail dan raw category
            const res2 = await Axios.get(URL + '/category/details')
            dispatch({ type : GET_CATEGORY_DETAILS, payload : res2.data })

        } catch (err) {
            console.log(err)
        }
    }
}

export const deleteCategory = (id) => {
    return async (dispatch) => {
        try {
            // delete data
            const res = await Axios.delete(URL + `/category/${id}`)
            console.log(res.data)

            // update data
            const res2 = await Axios.get(URL + '/category/details')
            dispatch({ type : GET_CATEGORY_DETAILS, payload : res2.data })
        } catch (err) {
            console.log(err)
        }
    }
}

export const editCategory = (id, body) => {
    return async (dispatch) => {
        try {
            // edit data
            const res = await Axios.patch(URL + `/category/edit/${id}`, body)
            console.log(res.data)

            // update data
            const res2 = await Axios.get(URL + '/category/details')
            dispatch({ type : GET_CATEGORY_DETAILS, payload : res2.data })
        } catch (err) {
            console.log(err)
        }
    }
}