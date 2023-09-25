import { HashLink } from 'react-router-hash-link';

const Nav = () => {
    return (
        <nav className='main-nav'>
            <ul>
                <li><HashLink to="/">Home</HashLink></li>
                <li><HashLink to="/#about">About</HashLink></li>
                <li><HashLink to="/#menu">Menu</HashLink></li>
                <li><HashLink to="/#reservation">Reservation</HashLink></li>
                <li><HashLink to="/#order">Order Online</HashLink></li>
                <li><HashLink to="/#login">Login</HashLink></li>
            </ul>
        </nav>
    )
}

export default Nav;