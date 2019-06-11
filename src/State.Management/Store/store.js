import reducer from '../Reducers/reducer';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import * as queries from '../Actions/actions';


const store = createStore(reducer,applyMiddleware(thunk));
store.dispatch(queries.getCategory());
store.dispatch(queries.getProduct());

export default store;

