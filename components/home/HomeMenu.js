import Link from 'next/link';
import { useContext, useState, useEffect } from "react";
import AuthContext from "../../slices/auth-context";
import classes from './HomeMenu.module.css'

const HomeMenu = (props) => {
    const authCtx = useContext(AuthContext);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        setIsLoggedIn(authCtx.isLoggedIn);
    }, [isLoggedIn, authCtx]);

    return (
        <div id='home-menu' className={classes['home-menu']}>
            <div className={classes['menu-controls']}>
                {!isLoggedIn && (
                    <>
                        <Link href='/login'>
                            <button className={classes['login-button']}>
                                Login
                            </button>
                        </Link>
                        <Link 
                            href={{
                                pathname: '/login',
                                query: { signup: true }
                            }}
                        >
                            <button className={classes['signup-button']} >
                                Signup
                            </button>
                        </Link>
                        <Link href='/play'>
                            <button className={classes['demo-button']} href='/play'>
                                Play Demo
                            </button>
                        </Link>
                    </>
                )}
                {isLoggedIn && (
                    <>
                        <Link href='/play'>
                            <button className={classes['play-button']} href='/play'>
                                Play Game
                            </button>
                        </Link>
                        <button className={classes['logout-button']} onClick={authCtx.logout}>
                            Logout
                        </button>
                    </>
                )}
            </div>
        </div>
    );
};

export default HomeMenu;