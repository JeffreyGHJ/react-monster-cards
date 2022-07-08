import classes from './UpdateList.module.css';

const UpdateList = (props) => {
    return (
        <div id="updates">
            <div className={classes["update-item"]}>
                <h1>Update: 7/7/22</h1>
                <div className={classes["content-area"]}>
                    <h3>
                        UI Updates
                    </h3>
                    <ul>
                        <li>
                            Added a dismissable Error Modal for displaying various database and application errors to the user.
                        </li>
                        <li>
                            Added a self-hiding Notification status bar to inform the user of successful or unsuccessful database operations.
                        </li>
                        <li>
                            User can dismiss the Notification by clicking on it while it is still visible.
                        </li>
                    </ul>
                    <h3>
                        Changed Leaderboard structure and style
                    </h3>
                    <ul>
                        <li>
                            The Leaderboard now uses a table to keep the table columns in line with eachother.
                        </li>
                        <li>
                            Restyled Leaderboard entries to be bigger and more readable especially on small devices.
                        </li>
                    </ul>
                    <h3>
                        Improved Error handling and feedback
                    </h3>
                    <ul>
                        <li>
                            Updated hooks to pass error response data into an error modal to be displayed to the user.
                        </li>
                        <li>
                            Updated hooks to show Notification status regarding database interactions.
                        </li>
                        <li>
                            Updated api calls to properly send database response data back to hooks.
                        </li>
                    </ul>
                    <h3>
                        Route change
                    </h3>
                    <ul>
                        <li>
                            Changed page name from 'playGame' to 'play'.
                        </li>
                    </ul>
                </div>
            </div>
            <div className={classes["update-item"]}>
                <h1>Update: 7/1/22</h1>
                <div className={classes["content-area"]}>
                    <h3>
                        Added tooltips to the Login page
                    </h3>
                    <ul>
                        <li>
                            When on the login page in signup-mode the email and password inputs will show tooltips with useful info.
                        </li>
                        <li>
                            The tooltips show when hovering the cursor over the inputs but will not show if the page is in login-mode.
                        </li>
                    </ul>
                    <h3>
                        Added active links
                    </h3>
                    <ul>
                        <li>
                            The navigation links at the top of the page will display yellow and underlined when the user is on the corresponding page.
                        </li>
                    </ul>
                    <h3>
                        Bug Fix
                    </h3>
                    <ul>
                        <li>
                            Corrected issue where logging in or out during 'Victory' or 'Defeat' would cause unintended behavior.
                        </li>
                    </ul>
                    <h3>
                        Updated styling across the site
                    </h3>
                    <ul>
                        <li>
                            The contents of most pages have been resized to better display in various screen orientations and sizes.
                        </li>
                        <li>
                            Updated font sizes to be easier to read in some places.
                        </li>
                        <li>
                            Removed container style from player controls and increased button sizes.
                        </li>
                    </ul>
                </div>
            </div>
            <div className={classes["update-item"]}>
                <h1>Update: 6/30/22</h1>
                <div className={classes["content-area"]}>
                    <h3>
                        Added confirmation dialog to 'Surrender' option in player controls
                    </h3>
                    <ul>
                        <li>
                            When the player chooses 'Surrender' a dialog box will give the player an option to cancel or confirm.
                        </li>
                        <li>
                            If the player cancels, nothing will happen and the battle will continue where it was left off.
                        </li>
                        <li>
                            If the player confirms, the current battle will be reset to its inital state and the player will suffer no penalty.
                        </li>
                    </ul>
                    <h3>
                        Updates to Home Page
                    </h3>
                    <ul>
                        <li>
                            Made the Home Page title bigger and added a text shadow to add depth.
                        </li>
                        <li>
                            Added a link to this application's GitHub code repository within the AppCredits component at the bottom of the Home Page.
                        </li>
                    </ul>
                    <h3>
                        Bug Fix
                    </h3>
                    <ul>
                        <li>
                            Fixed bug where enemy health and player health would continually increase if switching between pages in the app.
                        </li>
                        <li>
                            Switching pages will no longer reset or affect the current battle state in any way.
                        </li>
                    </ul>
                </div>
            </div>
            <div className={classes["update-item"]}>
                <h1>Update: 6/27/22</h1>
                <div className={classes["content-area"]}>
                    <h3>
                        Changed styles on 'Play' page
                    </h3>
                    <ul>
                        <li>
                            Changed the css styling on components within the 'Play' page to use relative sizing of parent containers.
                        </li>
                        <li>
                            The game should now be able to fit in any size window without the user having to scroll around to see.
                        </li>
                        <li>
                            All components should maintain their relative size and not overlap no matter how the window is resized.
                        </li>
                    </ul>
                </div>
            </div>
            <div className={classes["update-item"]}>
                <h1>Update: 6/24/22</h1>
                <div className={classes["content-area"]}>
                    <h3>
                        Added Battle Log component to Player Controls
                    </h3>
                    <ul>
                        <li>
                            The Battle Log displays recent messages that describe actions made by the player and reactions made by the game.
                        </li>
                        <li>
                            The message window of the Battle Log is scrollable so users are able to see older messages.
                        </li>
                        <li>
                            Battle log will hold up to 70 recent messages and will then shrink down to half size to clear room for new messages.
                        </li>
                    </ul>
                </div>
            </div>
            <div className={classes["update-item"]}>
                <h1>Update: 6/23/22</h1>
                <div className={classes["content-area"]}>
                    <h3>
                        Updated Main Game Interface
                    </h3>
                    <ul>
                        <li>
                            Player Abilities will be hidden upon defeat or victory and game options to 'Continue' or 'Retry' will be shown instead.
                        </li>
                        <li>
                            Added 'Player Info' component to bottom section of the game screen which includes the player's Username and Player Level.
                        </li>
                        <li>
                            Removed duplicate 'Player Level' component from upper section of the game screen.
                        </li>
                        <li>
                            Restyled various components and elements for improved responsiveness.
                        </li>
                    </ul>
                </div>
            </div>
            <div className={classes["update-item"]}>
                <h1>Update: 6/22/22</h1>
                <div className={classes["content-area"]}>
                    <h3>
                        Implemented Remaining Player Abilities
                    </h3>
                    <ul>
                        <li>
                            Implemented 'Special Attack': player has the chance to deal increased damage - ability will then disable to cooldown for a few turns.
                        </li>
                        <li>
                            Implemented 'Surrender': player can reset the current battle conditions without resetting their player level back to 1.
                        </li>
                    </ul>
                </div>
            </div>
            <div className={classes["update-item"]}>
                <h1>Update: 6/21/22</h1>
                <div className={classes["content-area"]}>
                    <h3>
                        Updated Site Page Styles
                    </h3>
                    <ul>
                        <li>
                            Changed css styling on 'Home' and 'Login' page.
                        </li>
                        <li>
                            Updated pages have improved look on mobile devices.
                        </li>
                    </ul>
                    <h3>
                        Added SVGs to Login Page
                    </h3>
                    <ul>
                        <li>
                            Login page now has SVG decorations next to the text input fields.
                        </li>
                    </ul>
                </div>
            </div>
            <div className={classes["update-item"]}>
                <h1>Update: 6/17/22</h1>
                <div className={classes["content-area"]}>
                    <h3>
                        Changed Home Page
                    </h3>
                    <ul>
                        <li>
                            Added menu with controls that allow users to Login, Signup, or Play Demo.
                        </li>
                        <li>
                            Added credits at bottom of the Home Page listing the tech stack used on this project.
                        </li>
                    </ul>
                    <h3>
                        Updated Signup/Login/Logout process
                    </h3>
                    <ul>
                        <li>
                            Clicking the 'Signup' button will redirect to the login page but it will now be in Signup mode.
                        </li>
                        <li>
                            Logging out will redirect the user back to the Home Page.
                        </li>
                    </ul>
                    <h3>
                        Moved Updates List
                    </h3>
                    <ul>
                        <li>
                            Updates List now found on the dedicated 'Updates' page.
                        </li>
                    </ul>
                    <h3>
                        Updated various styles for responsiveness
                    </h3>
                    <ul>
                        <li>
                            Changed Main Navigation button styles to resize with viewport and avoid overlap.
                        </li>
                        <li>
                            Changed Home Page styles to fit new Menu and Credits section in any viewport size.
                        </li>
                    </ul>
                </div>
            </div>
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