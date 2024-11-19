import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import loaderImg2 from '../img/user-loader.gif';
import * as contactAction from '../redux/contactApp/contactapp.action';
import * as contactReducer from '../redux/contactApp/contactapp.reducer';


let DetailsData = () => {

    let dispatch = useDispatch();

    let contactInfo = useSelector((state) => {
        return state[contactReducer.contentAppFeatureKey];
    });

    let { loading, contactList, errorMessage } = contactInfo

    useEffect(() => {
        dispatch(contactAction.getContactDetails());
    }, [])

    let clickUser = (user) => {
        dispatch(contactAction.getSingleContact(user));
    }

    return (
        <React.Fragment>

            {
                loading &&
                <div className="text-center">
                    <img src={loaderImg2} alt="dsfd" width="300" height="300" />
                </div>

            }

            {
                Object.keys(contactList).length > 0 & !loading ?



                    <table className='table table-response table-hover table-striped'>
                        <thead className=' bg-danger text-white'>
                            <tr>
                                <th>S No</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>City</th>
                                <th>State</th>
                            </tr>
                        </thead>
                        <tbody className=''>
                            {
                                contactList.map((user) => {
                                    return (
                                        <React.Fragment>
                                            <tr key={user.login.uuid} onClick={clickUser.bind(this, user)}>
                                                <td>{(user.login.uuid.substr(user.login.uuid.length - 5))}</td>
                                                <td>{user.name.first} {user.name.last}</td>
                                                <td>{user.email}</td>
                                                <td>{user.location.city}</td>
                                                <td>{user.location.state}</td>
                                            </tr>
                                        </React.Fragment>
                                    )
                                })
                            }
                        </tbody>
                    </table> : null
            }
        </React.Fragment>
    )
}

export default DetailsData;