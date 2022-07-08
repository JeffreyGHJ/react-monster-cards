import { useSelector } from 'react-redux';
import classes from './LogMessage.module.css';

const LogMessage = (props) => {
    const username = useSelector(state => state.player.username);
    const message = props.message;

    return (
        <div>
            <span className={message.actionBy === 'player' ? classes.player : classes.enemy}>
                {message.actionBy === 'player' && (username + ' ' || 'Player ')}
                {message.actionBy !== 'player' &&  (message.actionBy + ' ' || 'Enemy ')}
            </span>
            <span>
                {message.actionType === 'attack' && message.actionBy === 'player' && 'attacks for '}
                {message.actionType === 'attack' && message.actionBy !== 'player' && 'attacks for '}
                {message.actionType === 'special' && 'special attacks enemy for '}
                {message.actionType === 'heal' && 'heals for '}
            </span>
            <span className={classes[message.actionType]}>
                {message.actionValue + ' hp' || ' '}
            </span>
        </div>
    );
};

export default LogMessage;