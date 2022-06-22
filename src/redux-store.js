import {combineReducers, legacy_createStore as createStore} from "redux";
import usersReducer from "./users-reducer";


let reducers = combineReducers({
    usersPage: usersReducer
});

let store = createStore(reducers);


export default store;