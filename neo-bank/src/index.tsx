import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';
import App from './App';
import './scss/index.scss';
import { setupStore } from 'store/store';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

const store = setupStore();

root.render(
    <Provider store={store}>
        <App />
    </Provider>
);