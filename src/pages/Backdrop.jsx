import React from 'react'

const Backdrop = (props) => {
  return (
    <div className='backdrop'>
        {props.children}
    </div>
  )
}

export default Backdrop