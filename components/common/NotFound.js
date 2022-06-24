import classes from './NotFound.module.css'

const NotFound = ( props ) => {
    return (
        <div className={classes.container}>
            <div className={classes['response-code']}>
                <h1>
                    404:
                </h1>
            </div>
            <div className={classes.message}>
                <p>
                    Page Not Found!
                </p>
            </div>
            
        </div>
    )
};

export default NotFound;