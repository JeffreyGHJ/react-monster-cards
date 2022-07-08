import Link from 'next/link';
import { useRouter } from 'next/router';
import { useContext, useEffect, useState } from 'react';
import AuthContext from '../../slices/auth-context';
import classes from './MainNavigation.module.css';

function MainNavigation(props) {
    const authCtx = useContext(AuthContext);
    const router = useRouter();

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
                    <li className={router.pathname === '/' ? classes['active-route'] : ''}>
                        <Link href="/" >
                            Home
                        </Link>
                    </li>
                    <li className={router.pathname === '/play' ? classes['active-route'] : ''}>
                        <Link href="/play">
                            Play
                        </Link>
                    </li>
                    {isLoggedIn && (
                        <li className={router.pathname === '/profile' ? classes['active-route'] : ''}>
                            <Link href="/profile">
                                Profile
                            </Link>
                        </li>
                    )}
                    <li className={router.pathname === '/leaderboard' ? classes['active-route'] : ''}>
                        <Link href="/leaderboard">
                            Leaderboard
                        </Link>
                    </li>
                    <li className={router.pathname === '/updates' ? classes['active-route'] : ''}>
                        <Link href="/updates">
                            Updates
                        </Link>
                    </li>
                    {!isLoggedIn && (
                        <li className={router.pathname === '/login' ? classes['active-route'] : ''}>
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