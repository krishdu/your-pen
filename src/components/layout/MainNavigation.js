import classes from './MainNavigation.module.css';
import { NavLink } from 'react-router-dom';

/**
 * Main navigation bar, to control navigation 
 */

const MainNavigation = () => {
    const isActiveTab = ({isActive}) => {
        return isActive ? classes.active : '';
    }

    return (
        <header className={classes.header}>
            <div className={classes.logo}> Your Pen </div>
            <nav className={classes.nav} >
                <ul>
                    <li>
                        <NavLink className={isActiveTab} to='/quotes'>
                            All Quotes
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className={isActiveTab} to='/new-quote'>
                            Add Quote
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default MainNavigation;