import React from 'react'
import styled from 'styled-components'

const MainContainer = styled.div`
  width: 65%;
  transform: scale(1.3);
  margin-left: auto;
  margin-right: auto;
  @media screen and (min-width: 766px) and (max-width: 1023px) {
    width: 80%;
    transform: scale(1);
  }
  @media screen and (max-width: 767px) {
    width: 80%;
    transform: scale(0.9);
  }
  @media screen and (max-width: 321px) {
    width: 90%;
    transform: scale(0.7);
  }
`

const StepContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 5rem 1rem 4rem 1rem;
  position: relative;
  &:before {
    content: '';
    position: absolute;
    background: #e2e9e7;
    height: 4px;
    width: 100%;
    top: 50%;
    transform: translateY(-50%);
    left: 0;
  }
  &:after {
    content: '';
    position: absolute;
    background: #495E57;
    height: 4px;
    width: ${({ width }) => width};
    top: 50%;
    transition: 0.4s ease;
    transform: translateY(-50%);
    left: 0;
  }
  @media screen and (min-width: 766px) and (max-width: 1023px) {
    margin: 2rem 1rem 3rem 1rem;
  }
  @media screen and (max-width: 767px)  {
    margin: 1rem 1rem 1rem 1rem;
  }
  @media screen and (max-width: 321px)  {
    margin: 0.5rem;
  }
`

const StepWrapper = styled.div`
  position: relative;
  z-index: 1;
`

const StepStyle = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #ffffff;
  border: 3px solid ${({ step }) =>
      step === 'completed' ? '#495E57' : '#e2e9e7'};
  transition: 0.4s ease;
  display: flex;
  justify-content: center;
  align-items: center;
`

const StepCount = styled.span`
  font-size: 19px;
  color: ${({ step }) =>
  step === 'completed' ? '#495E57' : '#e2e9e7'};
  @media (max-width: 600px) {
    font-size: 16px;
  }
`

const StepsLabelContainer = styled.div`
  position: absolute;
  top: 66px;
  left: 50%;
  transform: translate(-50%, -50%);
  text-wrap: nowrap;
`

const StepLabel = styled.span`
  font-size: 19px;
  color: #495E57;
  font-weight: bold;
  @media (max-width: 600px) {
    font-size: 16px;
  }
`

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
`

const ButtonStyle = styled.button`
  border-radius: 1rem;
  border: 0;
  background: #495E57;
  color: #ffffff;
  cursor: pointer;
  padding: 8px;
  width: 90px;
  &:active {
    transform: scale(0.98);
  }
  &:disabled {
    background: #333;
    color: #FFF;
    cursor: not-allowed;
  }
  @media screen and (min-width: 766px) and (max-width: 1023px) {
    padding: 4px;
    font-size: 1.2rem;
  }
`

const CheckMark = styled.div`
  font-size: 26px;
  font-weight: 600;
  color: #495E57;
  -ms-transform: scaleX(-1) rotate(-46deg); /* IE 9 */
  -webkit-transform: scaleX(-1) rotate(-46deg); /* Chrome, Safari, Opera */
  transform: scaleX(-1) rotate(-46deg);
`

const steps = [
  {
    label: 'Customize',
    step: 1,
  },
  {
    label: 'Contact',
    step: 2,
  },
  {
    label: 'Submit',
    step: 3,
  }
]

export const ProgressButton = (props) => {
  const nextStepHandler = () => {
    props.validateForm()
    props.setTouched({'date': true, 'time': true, 'guests': true, 'occasion': true, 'location': true})
    if(!props.errors.date && !props.errors.time && !props.errors.guests && !props.errors.occasion && !props.errors.location){
      props.nextStep()
    }
  }

  return (
    <ButtonsContainer>
      <ButtonStyle type='button' onClick={props.prevStep} disabled={props.activeStep === 1} aria-label="Previous">
        Previous
      </ButtonStyle>
      {props.activeStep === 1 &&<ButtonStyle type='button' onClick={nextStepHandler} aria-label="Next">
        Next
      </ButtonStyle>}
      {props.activeStep === 2 && <ButtonStyle type='submit' disabled={!props.isValid || !props.dirty || props.isSubmitting} aria-label="Submit">
        Submit
      </ButtonStyle>}
    </ButtonsContainer>
  )
}

const ProgressSteps = (props) => {

  const totalSteps = steps.length

  const width = `${(100 / (totalSteps - 1)) * (props.activeStep - 1)}%`

  return (
    <MainContainer>
      <StepContainer width={width}>
        {steps.map(({ step, label }) => (
          <StepWrapper key={step}>
            <StepStyle step={props.activeStep >= step ? 'completed' : 'incomplete'}>
              {(props.activeStep > step || props.activeStep === 3) ? (
                <CheckMark>L</CheckMark>
              ) : (
                <StepCount step={props.activeStep >= step ? 'completed' : 'incomplete'}>{step}</StepCount>
              )}
            </StepStyle>
            <StepsLabelContainer>
              <StepLabel key={step}>{label}</StepLabel>
            </StepsLabelContainer>
          </StepWrapper>
        ))}
      </StepContainer>
    </MainContainer>
  )
}

export default ProgressSteps