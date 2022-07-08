import ErrorModal from "./ErrorModal";
import MainNavigation from "./MainNavigation";
import Notification from "./Notification";

function Layout(props) {
    return (
        <div>
            <MainNavigation />
            <Notification />
            <ErrorModal />
            <main>
                {props.children}
            </main>
        </div>
    );
}

export default Layout; 