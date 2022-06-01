import classes from './WelcomeMessage.module.css'

const WelcomeMessage = ( props ) => {
    return (
        <div>
            <h1 className={classes['welcome-message']}>
                React Monster Cards
            </h1>
        </div>
    );
};

export default WelcomeMessage;