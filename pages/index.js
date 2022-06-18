import WelcomeMessage from "../components/WelcomeMessage";
import HomeMenu from "../components/HomeMenu";
import AppCredits from "../components/AppCredits";

function HomePage(props) {
    return (
        <div style={{display: 'flex', flexDirection: 'column', height: '95vh'}}>
            <WelcomeMessage />
            <HomeMenu />
            <AppCredits />
        </div>
    );
}

export default HomePage;