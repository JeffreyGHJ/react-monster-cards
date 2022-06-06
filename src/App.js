import { useContext } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import AuthPage from './pages/AuthPage';
import AppHeader from './components/AppHeader';
import HomePage from './pages/HomePage';
import ProfileOptions from './components/ProfileOptions';
import AuthContext from './store/auth-context';
import { Redirect } from 'react-router-dom';
import OfflineGamePage from './pages/OfflineGamePage';

function App() {
  const authCtx = useContext(AuthContext);

  return (
    <div className="App">
      <AppHeader />
      <main>
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/play">
            <OfflineGamePage />
          </Route>
          {!authCtx.isLoggedIn && (
            <Route path="/login">
              <AuthPage />
            </Route>
          )}
          <Route path="/profile">
            {authCtx.isLoggedIn && <ProfileOptions />}
            {!authCtx.isLoggedIn && <Redirect to='/login' />}
          </Route>
          <Route path="*"> 
            {/*<NotFoundPage />*/}
            <Redirect to='/' />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;