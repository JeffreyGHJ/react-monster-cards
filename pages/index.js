import WelcomeMessage from "../components/WelcomeMessage";
import UpdateList from "../components/UpdateList";

function HomePage(props) {
    return (
        <>
            <WelcomeMessage />
            <UpdateList />
        </>
    );
}

export default HomePage;