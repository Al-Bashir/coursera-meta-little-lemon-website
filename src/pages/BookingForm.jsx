// Render Prop
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import BookingSlot from './BookingSlot';


const BookingForm = (props) => (
  <section className='container'>
    <h2>Table Reservation</h2>
    <Formik
      initialValues={{ date: '', time: '', guests: '', occasion: '', location: '' }}
      validate={values => {
        const errors = {};
        if (!values.email) {
          errors.email = 'Required';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address';
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ isSubmitting }) => {
        return (
          <Form>
            <label htmlFor="date">Date</label>
            <Field type="date" name="date" id="date" />
            <ErrorMessage name="date" component="div" />
            <label htmlFor="time">Time</label>
            {props.availableTimes.map(time => <BookingSlot time={time} />)}
            <ErrorMessage name="time" component="div" />
            <label htmlFor="guests">Number of guests</label>
            <div>
              <button>+</button>
              <Field type="number" name="guests" id="guests" placeholder="1" min="1" max="10" />
              <button>-</button>
            </div>
            <label htmlFor="occasion">Occasion</label>
            <Field as="select" name="occasion" id="occasion">
              <option value="Birthday">Birthday</option>
              <option value="Anniversary">Anniversary</option>
            </Field>
            <label htmlFor="location">Table location</label>
            <Field as="select" name="location" id="location">
              <option value="indoor">indoor</option>
              <option value="outdoor">outdoor</option>
            </Field>
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        );
      }}
    </Formik>
  </section>
);

export default BookingForm;