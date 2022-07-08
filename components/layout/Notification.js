import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearNotification } from '../../slices/notification-slice';
import classes from './Notification.module.css';

function Notification() {
    const notification = useSelector((state) => state.notification.notification);
    const [animationClasses, setAnimationClasses] = useState(classes['fade-out']);
    const dispatch = useDispatch();

    const closeNotification = () => {
        setAnimationClasses(classes['fade-out']);
        setTimeout(() => {
            dispatch(clearNotification());
        }, 300);
    }

    useEffect(() => {

        if (notification) {
            setTimeout(() => {
                setAnimationClasses(classes['fade-in']);
            }, 100);
        }

        if (notification?.status === 'success' || notification?.status === 'error') {   // The pending status will stay open
            const notificationTimer = setTimeout(() => {
                closeNotification();
            }, 3500);

            return () => clearTimeout(notificationTimer);
        }

    }, [notification])


    let statusClasses = '';
    if (notification?.status) {
        if (notification.status === 'pending') {
            statusClasses = classes.pending;
        }
        if (notification.status === 'success') {
            statusClasses = classes.success;
        }
        if (notification.status === 'error') {
            statusClasses = classes.error;
        }
    }

    const notificationClasses = `${classes['notification-inner']} ${statusClasses}`;
    const containerClasses = `${classes['notification-container']} ${animationClasses}`;

    return (
        <>
            {notification &&
                <div className={containerClasses} onClick={closeNotification}>
                    <div className={notificationClasses}>
                        <div className={classes['title']}>
                            {notification?.title}:
                        </div>
                        <div className={classes['message']}>
                            <div className={classes['message-text']}>
                                {notification?.message}
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    );

};

export default Notification;