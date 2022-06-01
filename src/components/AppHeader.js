import { NavLink } from 'react-router-dom'
import classes from './AppHeader.module.css'

const AppHeader  = ( props ) => {
    return (
        <header className={classes.header}>
            <nav>
                <ul>
                    <li>
                        <NavLink exact activeClassName={classes.active} to="/">
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName={classes.active} to="/play">
                            Play
                        </NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName={classes.active} to="/login">
                            Login
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );  
};

export default AppHeader;