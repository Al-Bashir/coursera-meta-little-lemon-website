import React from 'react'
import BookingForm from './BookingForm'
import ProgressSteps from './ProgressSteps'
import { useState } from 'react'


const BookingPage  = (props) => {
  const [activeStep, setActiveStep] = useState(1);

  const nextStep = () => {
    setActiveStep(activeStep + 1)
  }

  const prevStep = () => {
    setActiveStep(activeStep - 1)
  }

  return (
    <main>
      <section className='reservation'>
        <div className="container">
          <div className="form-group">
            <h1>Book Now For <br/> A Memorable Meal</h1>
            <ProgressSteps activeStep={activeStep}/>
            <BookingForm activeStep={activeStep} nextStep={nextStep} prevStep={prevStep} setFormResponse={props.setFormResponse}/>
          </div>
        </div>
      </section>
    </main>
  )
}

export default BookingPage