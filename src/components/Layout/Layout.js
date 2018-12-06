import React from 'react';
import Classes from './Layout.css'
import Aux from '../../hoc/Auxiliary'

const Layout = (props) => {
    return (
        <Aux>        
        <div>
            Toolbar, SideDrawer, Backdrop  
        </div>
        <main className={Classes.Content}>
            {props.children}
        </main>
        </Aux>

    );
};

export default Layout;