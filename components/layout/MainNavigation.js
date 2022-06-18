import Link from 'next/link';
import { useContext, useEffect, useState } from 'react';
import AuthContext from '../../slices/auth-context';
import classes from './MainNavigation.module.css';

function MainNavigation(props) {
    const authCtx = useContext(AuthContext);

    const logoutHandler = () => {
        authCtx.logout();
    }

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    
    useEffect(() => {
        setIsLoggedIn(authCtx.isLoggedIn);
    }, [isLoggedIn, authCtx]);

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
                    <li>
                        <Link href="/leaderboard">
                            Leaderboard
                        </Link>
                    </li>
                    <li>
                        <Link href="/updates">
                            Updates
                        </Link>
                    </li>
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