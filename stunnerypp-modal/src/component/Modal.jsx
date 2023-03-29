import React, { useState } from 'react';

const Modal = () => {
    const [isCancel, setCancel] = useState(true); //for modal popup
    const [isYes, setYes] = useState(false);//for confirmation
    const [btnUpdate, setBtnUpdate] =useState(false)//for update button

    const handleClick = () => {
        setCancel(!isCancel);
        setYes(true);
        setTimeout(() => {
            setYes(false);
            setBtnUpdate(true)
        }, 3000);
    };

    

    return (
        <div className="container">
            {!isCancel && (
                <div className={`${!isCancel ? 'ModalPopup show' : 'ModalPopup'}`}>
                    <p>Are you sure you want to cancel your subscription?</p>
                    <button onClick={() => { setCancel(!isCancel) }}>No</button>
                    <button onClick={handleClick}>Yes</button>
                </div>
            )}

            {isYes && (
                <div className={`${isYes ? 'ModalPopup show' : 'ModalPopup'}`}>
                    <p>Subscription successfully cancelled!</p>
                </div>
            )}

            <h1>Your Subscriptions</h1>
            <table>
                <thead>
                    <tr>
                        <th>Subscription</th>
                        <th>Next Rebill</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>$49.99 per month</td>
                        <td>December 13, 2020</td>
                        <td><button onClick={() => { setCancel(!isCancel) }}>{`${!btnUpdate ? 'Cancel' : 'Cancelled'}`}</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Modal;
