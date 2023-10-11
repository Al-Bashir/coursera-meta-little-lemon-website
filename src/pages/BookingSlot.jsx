
const BookingSlot = (props) => {
    return(
        <>
            <label htmlFor={props.time}>{props.time}</label>
            <input type="radio" name="radiogroup" value={props.time} id={props.time}/>
        </>
    )
}

export default BookingSlot;