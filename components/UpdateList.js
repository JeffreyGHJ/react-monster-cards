import classes from './UpdateList.module.css';

const UpdateList = (props) => {
    return (
        <div id="updates">
            <div className={classes["update-item"]}>
                <h1>Update: 6/16/22</h1>
                <div className={classes["content-area"]}>
                    <h3>
                        Updated Profile Page:
                    </h3>
                    <ul>
                        <li>
                            Profile page now has an option to set or change a user's username.
                        </li>
                    </ul>
                    <h3>
                        Added Leaderboard Page:
                    </h3>
                    <ul>
                        <li>
                            Leaderboard shows all registered players including their Username and Player Level.
                        </li>
                        <li>
                            If user has not set a Username then the leaderboard will show 'Anonymous'.
                        </li>
                        <li>
                            Leaderboard is sorted according to highest Player Level.
                        </li>
                    </ul>
                </div>
            </div>
            <div className={classes["update-item"]}>
                <h1>Update: 6/12/22</h1>
                <div className={classes["content-area"]}>
                    <h3>
                        Updated user signup:
                    </h3>
                    <ul>
                        <li>
                            Signing up creates an entry in the database for user to save and load Player Level.
                        </li>
                    </ul>
                    <h3>
                        Updated login:
                    </h3>
                    <ul>
                        <li>
                            Logging in will request the user's entry from the database and load their saved Player Level.
                        </li>
                        <li>
                            Refreshing the page while still logged in will maintain Player Level.
                        </li>
                    </ul>
                    <h3>
                        Updated logout:
                    </h3>
                    <ul>
                        <li>
                            Logout will unload user's Player Level.
                        </li>
                        <li>
                            Auto-logout will occur after a certain time requiring user to login again.
                        </li>
                    </ul>
                </div>
            </div>
            <div className={classes["update-item"]}>
                <h1>Update: 6/9/22</h1>
                <div className={classes["content-area"]}>
                    <h3>
                        Added user signup/login/logout:
                    </h3>
                    <ul>
                        <li>
                            users can sign up to create new accounts and login and logout with them.
                        </li>
                        <li>
                            Refreshing the page will maintain login status.
                        </li>
                    </ul>
                </div>
            </div>
            <div className={classes["update-item"]}>
                <h1>Update: 6/7/22</h1>
                <div className={classes["content-area"]}>
                    <h3>
                        Migrated create-react-app project to Next.js and uploaded to Vercel.
                    </h3>
                    <ul>
                        <li>
                            The site is live :)
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default UpdateList;