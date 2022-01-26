import * as React from 'react';
import './drawerMenu.scss';
import PropsInterface from './PropsInterface';

const DrawerMenu = ((props: PropsInterface) => {
    return (
        <div className='drawer-menu'>
            <h1>Hello</h1>
            {props.tabs.map((tab: any) => {
                return (
                    <li>
                        <a href="/">
                            {tab.title}
                        </a>
                    </li>
                );
            })}
        </div>
    );
});

export default DrawerMenu;
