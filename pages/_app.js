import { Provider } from 'react-redux';
import store from '../store.js';
import Layout from '../components/layout/Layout';
import '../styles/globals.css';
import { AuthContextProvider } from '../slices/auth-context.js';

function App({ Component, pageProps }) {
    return (
        <Provider store={store}>
            <AuthContextProvider>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </AuthContextProvider>
        </Provider>
    );
}

export default App;