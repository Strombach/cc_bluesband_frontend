import * as React from 'react';
import PropsInterface from './PropsInterface';
import BurgerMenu from './burgerMenu';
import Menu from './menu';

const Navbar = (props: PropsInterface): JSX.Element => {
    return (
        <nav className='navbar'>
            <img className="site-logo" src="/img/cc_logo.png" alt="" />
            <Menu tabs={props.tabs} />
            <BurgerMenu tabs={props.tabs} />
        </nav>
    );
};

export default Navbar;
