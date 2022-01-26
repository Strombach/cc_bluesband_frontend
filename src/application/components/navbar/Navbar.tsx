import * as React from 'react';
import './navbar.scss';
import PropsInterface from './PropsInterface';
import BurgerMenu from './burgerMenu';

const Navbar = (props: PropsInterface): JSX.Element => {
    return (
        <nav className='navbar'>
            <h1 className='nav-title'>{props.title}</h1>
            <BurgerMenu />
            <ul className='nav-links'>
                {props.tabs.map((tab: any, index) => {
                    return (
                        <li className='nav-link' key={index}>
                            <a href="/">
                                {tab.title}
                            </a>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
};

export default Navbar;
