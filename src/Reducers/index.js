import counter from './counter';
import log from './isLogged';
import { combineReducers } from 'redux';



const allReducers = combineReducers({
    counter,
    log
})

export default allReducers;