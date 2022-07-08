import { useContext, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setError } from "../../slices/error-modal-slice";
import useDatabase from "../../hooks/use-database";
import AuthContext from "../../slices/auth-context";
import classes from './ProfileOptions.module.css';

const MAX_NAME_LEN = 24;
const MIN_NAME_LEN = 4;

const ProfileOptions = (props) => {
    const authCtx = useContext(AuthContext);
    const dispatch = useDispatch();
    const usernameRef = useRef();
    const playerLevel = useSelector((state) => state.player.playerLevel);
    const { updateUsername } = useDatabase();

    const submitHandler = (event) => {
        event.preventDefault();
        const enteredUsername = usernameRef.current.value.trim();

        if ( enteredUsername.length > MAX_NAME_LEN ) {
            dispatch(setError({
                status: 'Error',
                statusText: 'Invalid Username',
                message: `Username length must not exceed ${MAX_NAME_LEN} characters`
            }));
            usernameRef.current.value = '';
        } else if (enteredUsername.length < MIN_NAME_LEN ) {
            dispatch(setError({
                status: 'Error',
                statusText: 'Invalid Username',
                message: `Username length must be at least ${MIN_NAME_LEN} characters`
            }));
            usernameRef.current.value = '';
        } else {
            console.log("Updating username to: " + enteredUsername);
            updateUsername(authCtx.uid, playerLevel, enteredUsername);
        }
    }

    return (
        <div className={classes['profile-options']}>
            <h1>Your Profile</h1>
            <div id='profile-controls' className={classes['profile-controls']}>
                <label htmlFor="username">
                    Update Username
                </label>
                <input id="username" type="text" placeholder="new username" ref={usernameRef} />
                <button className={classes['submit-button']} onClick={submitHandler}>
                    Submit
                </button>
            </div>
        </div>
    );
};

export default ProfileOptions;