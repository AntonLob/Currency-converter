import currencyReducer from "./reducer/reducer"
import { applyMiddleware ,createStore} from "redux";
import thunk from 'redux-thunk';

let store = createStore(currencyReducer ,applyMiddleware(thunk))

export default store