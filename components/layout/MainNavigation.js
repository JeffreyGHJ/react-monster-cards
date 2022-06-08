import Link from 'next/link';
import { useContext } from 'react';
import AuthContext from '../../src/store/auth-context';
import classes from './MainNavigation.module.css';

function MainNavigation(props) {
    const authCtx = useContext(AuthContext);
    const isLoggedIn = authCtx.isLoggedIn;
    const logoutHandler = () => {
        authCtx.logout();
    }

    return (
        <header className={classes.header}>
            <div id="logo"></div>
            <nav>
                <ul>
                    <li>
                        <Link href="/">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link href="/playGameOffline">
                            Play
                        </Link>
                    </li>
                    {isLoggedIn && (
                        <li>
                            <Link href="/profile">
                                Profile
                            </Link>
                        </li>
                    )}
                    {!isLoggedIn && (
                        <li>
                            <Link href="/login">
                                Login
                            </Link>
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
}

export default MainNavigation;