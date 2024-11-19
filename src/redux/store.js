import { applyMiddleware, createStore } from "redux";
import { rootReducer } from "./root.reducer";
import { composeWithDevTools } from "@redux-devtools/extension";
import { thunk } from 'redux-thunk';


let middleware = [thunk];
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middleware)));

export { store };