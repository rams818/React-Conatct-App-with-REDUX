import React from "react";
import { useSelector } from "react-redux";
import * as contactReducer from '../redux/contactApp/contactapp.reducer';

let CardData = () => {
    let contactInfo = useSelector((state) => {
        return state[contactReducer.contentAppFeatureKey];
    });
    let { selectedContact } = contactInfo
    return (
        <React.Fragment>
            {
                Object.keys(selectedContact).length > 0 ?
                    <React.Fragment>
                        <div className="card sticky-top">
                            <div className="card-header bg-danger">
                                <div className="pt-5 text-center"></div>
                            </div>
                            <div className="card-body">
                                <div className="text-center">
                                    <img src={selectedContact.picture.medium} alt="profile img" className="img-fluid img-thumbnail rounded-circle" width="100px" height="100px" style={{ marginTop: -70 }} />
                                </div>
                                <table class="table mt-3">
                                    <tbody>
                                        <tr><td>Name : <span className="font-weight-bold">{selectedContact.name.first + " " + selectedContact.name.last}</span></td></tr>
                                        <tr><td>Email : <span className="font-weight-bold">{selectedContact.email}</span></td></tr>
                                        <tr><td>Gender : <span className="font-weight-bold">{selectedContact.gender}</span></td></tr>
                                        <tr><td>Age : <span className="font-weight-bold">{selectedContact.dob.age} Yrs.</span></td></tr>
                                        <tr><td>Phone : <span className="font-weight-bold">{selectedContact.phone}</span></td></tr>
                                        <tr><td>Address : <span className="font-weight-bold">{selectedContact.location.city + ", " + selectedContact.location.state}</span></td></tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </React.Fragment>
                    : null
            }
        </React.Fragment>
    )
}

export default CardData;