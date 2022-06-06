import { useContext } from 'react';
import { NavLink } from 'react-router-dom'
import AuthContext from '../store/auth-context';
import classes from './AppHeader.module.css'

const AppHeader  = ( props ) => {
    const authCtx = useContext(AuthContext);

    const isLoggedIn = authCtx.isLoggedIn;

    const logoutHandler = () => {
        authCtx.logout();
    }

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
                    {isLoggedIn && (
                        <li>
                            <NavLink activeClassName={classes.active} to="/profile">
                                Profile
                            </NavLink>
                        </li>
                    )}
                    {!isLoggedIn && (
                        <li>
                            <NavLink activeClassName={classes.active} to="/login">
                                Login
                            </NavLink>
                        </li>
                    )}
                    {isLoggedIn && (
                        <li>
                            <button onClick={logoutHandler}>
                                Logout
                            </button>
                        </li>
                    )}
                </ul>
            </nav>
        </header>
    );  
};

export default AppHeader;