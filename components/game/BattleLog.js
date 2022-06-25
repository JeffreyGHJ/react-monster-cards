import { useSelector } from 'react-redux';
import classes from './BattleLog.module.css';
import LogMessage from './LogMessage';

const BattleLog = () => {
    const messages = useSelector(state => state.game.logMessages);

    return (
        <div className={classes['battle-log']}>
            <div className={classes['battle-log-title']}>
                Battle Log
            </div>
            <div className={classes['message-window']}>
                {messages.map(message => (
                    <LogMessage message={message} key={message.key}/>
                ))}
            </div>
        </div>
    );
};

export default BattleLog;