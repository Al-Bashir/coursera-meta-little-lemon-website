import React from 'react';
import { useField } from 'formik';


const MyInput = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
        <>
            <div className={`${props.name}-label-error label-error`}>
                <label htmlFor={props.id || props.name} id={props.id || props.name}>{label}</label>
                {meta.touched && meta.error ? (
                    <div className="error">{meta.error}</div>
                ) : null}
            </div>
            <input className={`${props.name}-input`} {...field} {...props} aria-labelledby={props.id || props.name} />
        </>
    );
};



const MyCheckbox = ({ children, ...props }) => {
    const [field, meta] = useField({ ...props, type: 'checkbox' });
    return (
        <>
            <label className="cb" id={props.id || props.name}>
                {children}
            </label>
            <input className="cb-input" type="checkbox" {...field} {...props} aria-labelledby={props.id || props.name}/>
            {meta.touched && meta.error ? (
                <div className="error">{meta.error}</div>
            ) : null}
        </>
    );
};

const contact = () => {
    return (
        <div className="form-contact">
            <MyInput
                label="First Name"
                name="firstName"
                type="text"
                placeholder="Your first name"
                min={3}
                max={25}
            />

            <MyInput
                label="Last Name"
                name="lastName"
                type="text"
                placeholder="Your last name"
                min={3}
                max={25}
            />

            <MyInput
                label="Email"
                name="email"
                type="email"
                placeholder="example@email.com"
            />

            <MyCheckbox name="emailReminder">
                Email Reminder
            </MyCheckbox>

        </div>
    )
}

export default contact