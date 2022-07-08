import Link from 'next/link';
import { useContext, useState, useEffect } from "react";
import AuthContext from "../../slices/auth-context";
import classes from './HomeMenu.module.css'
import { useDispatch } from "react-redux";
import { setNotification } from '../../slices/notification-slice';

const HomeMenu = (props) => {
    const dispatch = useDispatch();
    const authCtx = useContext(AuthContext);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        setIsLoggedIn(authCtx.isLoggedIn);
    }, [isLoggedIn, authCtx]);

    // Put this in a useNotifcation hook
    /* const notify = () => { 
        console.log('notify!');
        let notification = {
            status: 'success',
            title: 'Successful Notification!',
            message: 'If you are seeing this then this was a successful Notification message!',
        }
        dispatch(setNotification(notification));
    } */

    return (
        <div id='home-menu' className={classes['home-menu']} /* onClick={notify} */>
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