import { legacy_createStore ,applyMiddleware,combineReducers} from "redux";
import logger from "redux-logger"
import Reducer from "./reducer";
import UserReducer from "../reducers/userreducer";
import ChatReducer from "../reducers/chatreucer";
const combine = combineReducers({
   Reducer,
   UserReducer ,
   ChatReducer,
})
const store = legacy_createStore(combine, applyMiddleware(logger));

export default store;
