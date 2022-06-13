import classes from './WelcomeMessage.module.css'

const WelcomeMessage = ( props ) => {
    return (
        <div className={classes['welcome-message']}>
            <h1>
                React Monster Cards
            </h1>
        </div>
    );
};

export default WelcomeMessage;