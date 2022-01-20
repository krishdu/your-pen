import { Fragment } from 'react';
import classes from './Layout.module.css';
import MainNavigation from './MainNavigation';
/**
 * Responsible for structuring the navbar and main content
 * @param  {} props 
 */
const Layout = (props) => {
    return (
        <Fragment>
            <MainNavigation />
            <main className={classes.main}>
                {props.children}
            </main>
        </Fragment>
    );

};

export default Layout;