import { combineReducers } from 'redux'
import getDogReducer from './redux/reducers/getDogReducer'

const rootReducer = combineReducers({
    getDogReducer,
})

export default rootReducer