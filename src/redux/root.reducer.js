import { combineReducers } from 'redux';
import * as contactReducer from './contactApp/contactapp.reducer';

let rootReducer = combineReducers({
    [contactReducer.contentAppFeatureKey]: contactReducer.reducer
});

export { rootReducer };