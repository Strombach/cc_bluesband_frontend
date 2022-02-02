import * as React from 'react';
import PropsInterface from './PropsInterface';
import { Burgermenu, Menu } from 'application/components';


const Navbar = (props: PropsInterface): JSX.Element => {
    return (
        <nav className='navbar'>
            <img className="site-logo" src="/img/cc_logo.png" alt="" />
            <Menu tabs={props.tabs} />
            <Burgermenu tabs={props.tabs} />
        </nav>
    );
};

export default Navbar;
