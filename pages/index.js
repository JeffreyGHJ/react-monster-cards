import WelcomeMessage from "../components/home/WelcomeMessage";
import HomeMenu from "../components/home/HomeMenu";
import AppCredits from "../components/home/AppCredits";

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