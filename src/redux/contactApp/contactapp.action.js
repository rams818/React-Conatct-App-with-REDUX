import axios from "axios";

export const FETCH_REQUEST_DATA = 'FETCH_REQUEST_DATA';
export const FETCH_SUCCESS_DATA = 'FETCH_SUCCESS_DATA';
export const FETCH_FAILURE_DATA = 'FETCH_FAILURE_DATA';
export const FETCH_SINGLE_USER = 'FETCH_SINGLE_USER';

export const getContactDetails = () => {
    return async (dispatch) => {
        dispatch({ type: FETCH_REQUEST_DATA });
        try {

            let dataUrl = "https://gist.githubusercontent.com/thenaveensaggam/cbaba0dd800d5d676fa5670b1088a902/raw/1a1814f959c06d47974c1a680dac90bdbd08cf06/customers-06-01-2023.json";
            let response = await axios.get(dataUrl);
            dispatch({ type: FETCH_SUCCESS_DATA, payload: response.data });

        } catch (error) {
            dispatch({ type: FETCH_FAILURE_DATA, payload: error });
        }
    }
}


export const getSingleContact = (user) => {
    return (dispatch) => {
        dispatch({ type: FETCH_SINGLE_USER, payload: user });
    }
}