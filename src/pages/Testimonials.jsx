import React from 'react';
import TestimonialItem from './TestimonialItem'
import fOne from '../assets/icons_assets/fone.jpg'
import fTwo from '../assets/icons_assets/ftwo.jpg'
import fThree from '../assets/icons_assets/fthree.jpg'
import fFour from '../assets/icons_assets/ffour.jpg'

const reviews = [
    {
        id: 21,
        img: fOne,
        rate: 5,
        name: "John Doe",
        review: "Excellent service and quality."
    },
    {
        id: 22,
        img: fTwo,
        rate: 4,
        name: "Alice Smith",
        review: "Good experience overall. Will come back again."
    },
    {
        id: 23,
        img: fThree,
        rate: 3,
        name: "Bob Johnson",
        review: "Decent, but there is room for improvement."
    },
    {
        id: 24,
        img: fFour,
        rate: 5,
        name: "Emily Davis",
        review: "Outstanding! The best I've ever had."
    }
];


const Testimonials = () => {
    return (
        <section className="testimonials">
        <div className="container">
            <h2>Testimonials</h2>
            <div className="content">
                {
                    reviews.map(review => <TestimonialItem key={review.id} review={review} />)
                }
            </div>
        </div>
        </section>
    )
}

export default Testimonials