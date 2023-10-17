import React from 'react';
import { Formik, Form} from 'formik';
import * as Yup from 'yup';
import Customize from './Customize';
import Contact from './Contact'
import {convertDateToISODateOnly, nextMonth} from '../utility/dateUtility.js'
import { ProgressButton } from './ProgressSteps'
import {submitAPI} from '../api/api.js'
import { useNavigate } from "react-router-dom";

const BookingForm = (props) => {
  const navigate = useNavigate();
  return (
    <section className="form-section">
      <h3 className="reservation-head">{props.activeStep === 1 ? 'Customize Table' : 'Contact Information'}</h3>
      <Formik
        validateOnMount
        initialValues={{
          date: convertDateToISODateOnly(new Date()),
          time: '',
          guests: 2,
          occasion: '',
          location: '',
          firstName: '',
          lastName: '',
          email: ''
        }}
        validationSchema={Yup.object({
          date: Yup.date()
          .required('*Required')
          .min(convertDateToISODateOnly(new Date()), "*Date cannot be in the past")
          .max(nextMonth, "*Date cannot be exceed 3 months"),
          time: Yup.string()
            .required('*Required'),
          guests: Yup.number()
            .required('*Required')
            .min(1, '*select at least one guest')
            .max(10, '*select less than 10 guest'),
            occasion: Yup.string()
            .matches(/(Birthday|Anniversary)/, '*Invalid')
            .required('*Required'),
            location: Yup.string()
            .matches(/(indoor|outdoor)/, '*Invalid')
            .required('*Required'),
            firstName: Yup.string()
            .matches(/^[a-zA-Z'-]+$/, '*Please use litter only')
            .min(3, 'Enter a valid name')
            .max(25, 'Enter a valid name')
            .required('*Required'),
            lastName: Yup.string()
            .matches(/^[a-zA-Z'-]+$/,'*Please use litter only')
            .min(3, 'Enter a valid name')
            .max(25, 'Enter a valid name')
            .required('*Required'),
            email: Yup.string()
            .matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,'*Please use a valid email')
            .required('*Required'),
        })}
        onSubmit={async (values, { setSubmitting }) => {
          try{
            const response = await submitAPI(values);
            if(response){
              props.setFormResponse('success');
              setSubmitting(false);
            }else{
              props.setFormResponse('failed');
              setSubmitting(false);
            }
          }catch{
            props.setFormResponse('failed');
            setSubmitting(false);
          }
          props.nextStep();
          navigate("/conformation")
        }}
      >
        {({
          isSubmitting,
          isValid,
          dirty,
          touched,
          errors,
          setFieldValue,
          values,
          validateForm,
          setTouched
        }) => (
          <Form>
            {props.activeStep === 1 && <Customize touched={touched} errors={errors} setFieldValue={setFieldValue} values={values}/>}
            {props.activeStep === 2 && <Contact />}
            <ProgressButton
              errors={errors}
              activeStep={props.activeStep}
              nextStep={props.nextStep}
              prevStep={props.prevStep}
              isSubmitting={isSubmitting}
              isValid={isValid}
              dirty={dirty}
              validateForm={validateForm}
              setTouched={setTouched}
              values={values}/>
          </Form>
        )}
      </Formik>
    </section>
  );
};

export default BookingForm