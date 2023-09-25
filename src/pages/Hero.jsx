import { Link } from 'react-router-dom';
import heroImg from '../assets/icons_assets/restauranfood.jpg'

const Hero = () => {
    return (
        <section id="home">
            <div className="container">
                <div className="content">
                    <h1>Little Lemon </h1>
                    <span>Chicago</span>
                    <p> We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                    <Link to="/reserve-a-Table">
                        <button>Reserve a Table</button>
                    </Link>
                </div>
                <div className="hero-img">
                    <img src={heroImg} alt="restaurant food" />
                </div>
            </div>
        </section>
    )
}

export default Hero;