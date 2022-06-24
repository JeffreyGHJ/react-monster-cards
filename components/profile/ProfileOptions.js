import { useContext, useRef } from "react";
import { useSelector } from "react-redux";
import useDatabase from "../../hooks/use-database";
import AuthContext from "../../slices/auth-context";
import classes from './ProfileOptions.module.css';

const ProfileOptions = (props) => {
    const authCtx = useContext(AuthContext);
    const usernameRef = useRef();
    const playerLevel = useSelector((state) => state.player.playerLevel);
    const { updateUsername } = useDatabase();

    const submitHandler = (event) => {
        event.preventDefault();
        const enteredUsername = usernameRef.current.value;
        console.log("Updating username to: " + enteredUsername);
        updateUsername(authCtx.uid, playerLevel, enteredUsername);
    }

    return (
        <div className={classes['profile-options']}>
            <h1>Your Profile</h1>
            <div id='profile-controls' className={classes['profile-controls']}>
                <label htmlFor="username">Update Username</label>
                <input id="username" type="text" placeholder="new username" ref={usernameRef}></input>
                <button type="button" onClick={submitHandler}>Submit</button>
            </div>
        </div>
    );
};

export default ProfileOptions;