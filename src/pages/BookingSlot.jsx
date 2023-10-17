import { Field} from 'formik';

const BookingSlot = (props) => {
    if (props.time === "*No available times for the selected date."){
        return(
            <div className="not-available-time error">
                {props.time}
            </div>
        )
    }else{
        return(
            <label className={props.className}>
                <Field type="radio" value={props.time} name="time"/>
                {props.time}
            </label>
        )
    }
}

export default BookingSlot;