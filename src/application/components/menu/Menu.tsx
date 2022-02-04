import * as React from 'react';

function Menu(props: any) {
    return (
        <ul className='menu'>
            {props.tabs.map((tab: any, index: number) => {
                if (tab.path !== "/") {
                    if (Object.keys(props.siteContents).includes(tab.path)) {
                        return (
                            <li className='menu-link' key={index}>
                                {tab.path === '/' ? tab.title : tab.path.replace(/^\w/, (c: any) => c.toUpperCase())}
                            </li>
                        );
                    } else {
                        return null;
                    }
                } else {
                    return (
                        <li className='menu-link' key={index}>
                            {tab.path === '/' ? tab.title : tab.path.replace(/^\w/, (c: any) => c.toUpperCase())}
                        </li>
                    );
                }
            })}
        </ul>
    );
}

export default Menu;
