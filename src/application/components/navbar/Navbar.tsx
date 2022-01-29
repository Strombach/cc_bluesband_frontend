import * as React from 'react';
import './navbar.scss';
import PropsInterface from './PropsInterface';
import BurgerMenu from './burgerMenu';
import Menu from './menu';

const Navbar = (props: PropsInterface): JSX.Element => {
    return (
        <nav className='navbar'>
            <h1 className='nav-title'>{props.title}</h1>
            <Menu tabs={props.tabs} />
            <BurgerMenu tabs={props.tabs} />
        </nav>
    );
};

export default Navbar;
