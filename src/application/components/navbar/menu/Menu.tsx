import * as React from 'react';
import { Link } from 'react-router-dom';

function Menu(props: any) {
    return (
        <ul className='menu'>
            {props.tabs.map((tab: any, index: number) => {
                return (
                    <Link to={tab.path}>
                        <li className='menu-link' key={index}>
                            {tab.path === '/' ? tab.title : tab.path.replace(/^\w/, (c: any) => c.toUpperCase())}
                        </li>
                    </Link>
                );
            })}
        </ul>
    );
}

export default Menu;
