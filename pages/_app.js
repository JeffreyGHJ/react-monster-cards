import { Provider } from 'react-redux';
import store from '../store.js';
import Layout from '../components/layout/Layout';
import '../styles/globals.css';

function App({ Component, pageProps }) {
    return (
        <Provider store={store}>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </Provider>
    );
}

export default App;