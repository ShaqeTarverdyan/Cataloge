import axios from 'axios';


export const addCategorySuccess = (resp) => {
    console.log('resp', resp)
    return {
        type: 'ADD_CATEGORY',
        payload: resp
    }
}

export const addCategory = ({ category }) => {
    console.log('mmnbb', { category })
    return (dispatch) => {
        return axios.post('https://www.magento.am/api/addProduct.php', { category })
            .then(response => {
                console.log('jkjkj', response)
                dispatch(addCategorySuccess(response.data))
            })
            .catch(error => {
                throw (error);
            })
    }
}


export const getCategorySuccess = (resp) => {
    return {
        type: 'GET_CATEGORY',
        payload: resp
    }
}

export const getCategory = () => {
    return (dispatch) => {
        return axios.get('https://www.magento.am/api/categories.php')
            .then(response => {
                dispatch(getCategorySuccess(response.data))
            })
    }
}


export const getProductSuccess = (resp) => {
    return {
        type: 'GET_PRODUCT',
        payload: resp
    }
}

export const getProduct = () => {
    return (dispatch) => {
        return axios.get('https://www.magento.am/api/products.php')
            .then(response => {
                dispatch(getProductSuccess(response.data))
            })
            .catch(error => {
                throw (error);
            })
    }
}

export const postContactSuccess = (resp) => {
    return {
        type:'POST_CONTACT',
        payload:resp
    }
}

export const postContact = ({name, email, phone, message}) => {
    return (dispatch) => {
        return axios.post('someUrl', {name, email, phone, message})
            .then(response => {
                dispatch(postContactSuccess(response.data))
            })
            .catch(error => {
                throw (error);
            })
    }
}

