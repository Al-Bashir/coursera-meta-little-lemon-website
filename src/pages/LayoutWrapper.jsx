import React from 'react'
import Header from './Header'
import Footer from './Footer'

const LayoutWrapper = (props) => {
    return (
        <>
            <Header />
                {props.children}
            <Footer />
        </>
    )
}

export default LayoutWrapper