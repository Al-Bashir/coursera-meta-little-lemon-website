import React from 'react'
import aboutOne from '../assets/icons_assets/Mario and Adrian A.jpg'
import aboutTwo from '../assets/icons_assets/Mario and Adrian b.jpg'

const About = () => {
    return (
        <section id="about" className="container">
            <div className="content">
                <h2>Little Lemon </h2>
                <span>Chicago</span>
                <p>
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
                </p>
            </div>
            <div className="about-img">
                <img src={aboutTwo} alt="Mario and Adrian" />
                <img src={aboutOne} alt="Mario and Adrian" />
            </div>
        </section>
    )
}

export default About