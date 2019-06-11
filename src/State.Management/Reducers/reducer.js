const initialState = {
    categories:[],
    products:[],
    contacts:[]

}

const reducer = (state = initialState, action) => {
    const newState = {...state}
    switch(action.type) {
        case 'ADD_CATEGORY':
            return [...newState.categories, action.payload];
        case 'POST_CONTACT':
            return [...newState.contacts, action.payload]
        case 'GET_CATEGORY':
            const data = action.payload;
            const updatedState = {...newState, categories:data}
            return updatedState;
        case 'GET_PRODUCT':
            const updatedStateAftergetProduct = {...newState, products:action.payload}
            return updatedStateAftergetProduct;

        default:
            return newState
    }
    
}

export default reducer;