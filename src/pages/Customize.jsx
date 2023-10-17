import React from 'react';
import { useState, useEffect } from 'react';
import { Field, useField, ErrorMessage } from 'formik';
import BookingSlot from './BookingSlot';
import { fetchAPI } from '../api/api';
import {convertDateToISODateOnly, nextMonth} from '../utility/dateUtility.js'



const DateField = ({ label, ...props }) => {
    const { isLoading, setDate, ...otherProps } = props;
    const [field, meta] = useField(otherProps);
    const handleDateChange = (e) => {
        if(!props.isLoading){
            field.onChange(e);
            setDate(e.target.value);
        }
    }
    return (
        <>
            <div className="label-error">
                <label htmlFor={props.id || props.name} id={`${props.id || props.name}-label`}>{label}</label>
                {meta.touched && meta.error ? (
                    <div className="error">{meta.error}</div>
                ) : null}
            </div>
            <input id={props.id || props.name}
                aria-labelledby={`${props.id || props.name}-label`}
                className={`date-input ${meta.touched && meta.error ? "invalid" : ""}`}
                {...field}
                {...otherProps}
                onChange={handleDateChange}
                min={convertDateToISODateOnly(new Date())}
                max={convertDateToISODateOnly(nextMonth)} />
        </>
    );
};

const TimeField = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
        <>
            <div className="label-error">
                <label>{label}</label>
                {meta.touched && meta.error ? (
                    <div className="error">{meta.error}</div>
                ) : null}
            </div>
            <div className="received-time-warper">
                {props.isLoading && <div className="spinner-wrapper"> <div className="spinner"></div> </div>}
                {!props.isLoading && <div className="received-times">
                    {props.availableTimes.map(time => <BookingSlot key={time} time={time} className={`date-input ${meta.touched && meta.error ? "invalid" : ""}`} />)}
                </div>}
                <div className="svg">
                    <svg viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_357_94)">
                            <path d="M16.4406 9.94874C16.4798 9.63802 16.5 9.32137 16.5 9C16.5 4.85786 13.1421 1.5 9 1.5C4.85786 1.5 1.5 4.85786 1.5 9C1.5 13.1421 4.85786 16.5 9 16.5C9.32655 16.5 9.64823 16.4791 9.96377 16.4386M9 4.5V9L11.8038 10.4019M14.25 16.5V12M12 14.25H16.5" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </g>
                    </svg>
                </div>
            </div>
        </>
    );
};



const Customize = (props) => {
    const [availableTimes, setAvailableTimes] = useState([]);
    const [date, setDate] = useState(convertDateToISODateOnly(new Date()));
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
        const getData = async (date) => {
            try {
                setIsLoading(true);
                const response = await fetchAPI(date);
                setAvailableTimes(response);
                setIsLoading(false);
            } catch (e) {
                setIsLoading(false);
                setAvailableTimes(["*No available times for the selected date."]);
            }
        }
        getData(date);
    }, [date])
    return (
        <div className="form-customize">
            <DateField
                label="Date"
                name="date"
                type="date"
                setDate={setDate}
                isLoading={isLoading}
                />

            <TimeField
                label="Time"
                name="time"
                type="radio"
                availableTimes={availableTimes}
                setAvailableTimes={setAvailableTimes}
                isLoading={isLoading}
            />

            <div className="label-error">
                <label htmlFor="guests" id='guests-label'>Number of guests</label>
                <ErrorMessage className='error' name="guests" component="div" />
            </div>
            <div className="form-guests">
                <button type="button" disabled={props.values.guests >= 10} onClick={() => {
                    props.setFieldValue("guests", (props.values.guests + 1))
                }}>+</button>
                <Field type="number" name="guests" id="guests" placeholder="1" min="1" max="10" className={props.touched.guests && props.errors.guests ? "invalid" : ""} aria-labelledby='guests-label'/>
                <button type="button" disabled={props.values.guests <= 1} onClick={() => {
                    props.setFieldValue("guests", (props.values.guests - 1))
                }}>-</button>
            </div>

            <div className="label-error">
                <label htmlFor="occasion" id='occasion-label'>Occasion</label>
                <ErrorMessage className='error' name="occasion" component="div" />
            </div>
            <Field as="select" name="occasion" id="occasion" className={props.touched.occasion && props.errors.occasion ? "invalid" : ""} aria-labelledby='occasion-label'>
                <option value="" disabled>Select an option</option>
                <option value="Birthday">Birthday</option>
                <option value="Anniversary">Anniversary</option>
            </Field>

            <div className="label-error">
                <label htmlFor="location" id='location-label'>Table location</label>
                <ErrorMessage className='error' name="location" component="div" />
            </div>
            <Field as="select" name="location" id="location" className={props.touched.location && props.errors.location ? "invalid" : ""} aria-labelledby='location-label'>
                <option value="" disabled>Select an option</option>
                <option value="indoor">indoor</option>
                <option value="outdoor">outdoor</option>
            </Field>
        </div>
    )
}

export default Customize