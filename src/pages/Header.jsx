import Nav from './Nav';
import logo from '../assets/icons_assets/Logo.svg'
import MenuNav from './MenuNav';
import { useState } from 'react';
import Backdrop from './Backdrop';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const showMenuHandler = () => {
        setIsOpen(true);
    }
    const sideNav = <Backdrop >
                        <MenuNav setIsOpen={setIsOpen}/>
                    </Backdrop>
    return (
        <header>
            <div className="container">
                <img src={logo} alt="logo" />
                <Nav />
                {isOpen && sideNav}
                <svg onClick={showMenuHandler} width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 7H19" stroke="#33363F" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M5 12H19" stroke="#33363F" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M5 17H19" stroke="#33363F" strokeWidth="2" strokeLinecap="round"/>
                </svg>
            </div>
        </header>
    )
}

export default Header;