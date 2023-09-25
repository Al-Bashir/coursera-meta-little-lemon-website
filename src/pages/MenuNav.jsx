import React from 'react'
import { HashLink } from 'react-router-hash-link';


const MenuNav = (props) => {
  const hideNavHandler = () => {
    props.setIsOpen(false);
  }

  return (
    <nav className='side-nav'>
        <svg onClick={hideNavHandler} width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 8L3.29289 8.70711L2.58579 8L3.29289 7.29289L4 8ZM9 20C8.44772 20 8 19.5523 8 19C8 18.4477 8.44772 18 9 18L9 20ZM8.29289 13.7071L3.29289 8.70711L4.70711 7.29289L9.70711 12.2929L8.29289 13.7071ZM3.29289 7.29289L8.29289 2.29289L9.70711 3.70711L4.70711 8.70711L3.29289 7.29289ZM4 7L14.5 7L14.5 9L4 9L4 7ZM14.5 20L9 20L9 18L14.5 18L14.5 20ZM21 13.5C21 17.0898 18.0898 20 14.5 20L14.5 18C16.9853 18 19 15.9853 19 13.5L21 13.5ZM14.5 7C18.0899 7 21 9.91015 21 13.5L19 13.5C19 11.0147 16.9853 9 14.5 9L14.5 7Z"/>
        </svg>
        <ul>
            <li onClick={hideNavHandler}><HashLink to="/">Home</HashLink></li>
            <hr />
            <li onClick={hideNavHandler}><HashLink to="/#about">About</HashLink></li>
            <hr />
            <li onClick={hideNavHandler}><HashLink to="/#menu">Menu</HashLink></li>
            <hr />
            <li onClick={hideNavHandler}><HashLink to="/#reservation">Reservation</HashLink></li>
            <hr />
            <li onClick={hideNavHandler}><HashLink to="/#order">Order Online</HashLink></li>
            <hr />
            <li onClick={hideNavHandler}><HashLink to="/#login">Login</HashLink></li>
        </ul>
    </nav>
  )
}

export default MenuNav