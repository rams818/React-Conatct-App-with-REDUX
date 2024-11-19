import * as contactActions from './contactapp.action'

export const contentAppFeatureKey = 'contactApp';


let initialState = {
    loading: false,
    contactList: [],
    selectedContact: {},
    errorMessage: ''
};


export const reducer = (state = initialState, action) => {

    let { type, payload } = action;

    switch (type) {
        case contactActions.FETCH_REQUEST_DATA:
            return {
                ...state,
                loading: true
            }
        case contactActions.FETCH_SUCCESS_DATA:
            return {
                ...state,
                loading: false,
                contactList: payload
            }
        case contactActions.FETCH_FAILURE_DATA:
            return {
                ...state,
                loading: false,
                errorMessage: payload
            }
        case contactActions.FETCH_SINGLE_USER:
            return {
                ...state,
                selectedContact: payload
            }
        default: return state
    }

}