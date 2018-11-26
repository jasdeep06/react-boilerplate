import {createStore,applyMiddleware,compose,combineReducers} from 'redux'
import thunk from 'redux-thunk'
import yourReducer from "../reducers/yourReducerFile"

const middleware = [thunk]

export default () =>{

    const store = createStore(
        combineReducers({
            combinedReducerName:yourReducer,
           
        }),
        applyMiddleware(...middleware)
    )
return store
}