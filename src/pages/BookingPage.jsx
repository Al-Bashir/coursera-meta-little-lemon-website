import React from 'react'
import BookingForm from './BookingForm'
import { useState } from 'react';
import { useEffect } from 'react';
import {fetchAPI} from '../hooks/api';


const BookingPage  = (props) => {
  const [availableTimes, setAvailableTimes] = useState(null);
  useEffect(() => {
    if(availableTimes){
      const getData = async() => {
        try{
          const response = await fetchAPI(new Date().toJSON().slice(0, 10));
          setAvailableTimes(response);
        }catch(e){
          setAvailableTimes(["No available times for the selected date."]);
          console.log(availableTimes)
        }
      }
      getData();
    }else{
      
    }
  },[availableTimes])
  return (
    <main>
      <section className='reservation'> 
        <div className="container">
          <h1>Book Now For A Memorable Meal</h1>
        </div>
      </section>
      <BookingForm availableTimes={props.availableTimes}/>
    </main>
  )
}

export default BookingPage 