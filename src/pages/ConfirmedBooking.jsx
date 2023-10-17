import React from 'react'
import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";


const SuccessBooking = () => {
  return (
    <>
      <h1 className="conformation-head">Congratulation</h1>
      <p className="conformation-body">your reservation has been done successfully. <br/> Reservation number <b>#1000513812</b> </p>
    </>
  );
};

const FailedBooking = () => {
  return (
    <>
      <h1 className="conformation-head failed">Request Failed</h1>
      <p className="conformation-body">Unfortunately your reservation has been <span className="failed">rejected</span><br/> Please try again.</p>
    </>
  );
};

const ConfirmedBooking = (props) => {
  const navigate = useNavigate();

  const homeRedirectHandler = () => {
    props.setFormResponse('Not set')
    navigate("/")
  }
  const reservationRedirectHandler = () => {
    props.setFormResponse('Not set')
    navigate("/reserve-a-Table")
  }
  return (
    <section className=" reservation conformation">
      <div className="container">
        <div className="form-group">
          {props.formResponse === 'success' && <SuccessBooking />}
          {props.formResponse === 'failed' && <FailedBooking />}
          <div className="conformation-page-buttons">
            <button onClick={homeRedirectHandler}>Homepage</button>
            <button onClick={reservationRedirectHandler}>{props.formResponse === 'success' ? 'New Reservation' : 'Retry Reservation'}</button>
        </div>
        </div>
      </div>
    </section>
  );
};


export default ConfirmedBooking