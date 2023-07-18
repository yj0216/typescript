import ReactDOM from 'react-dom/client';
import App from './App';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './modules/index';
import { Provider } from 'react-redux';

const store = createStore(rootReducer, composeWithDevTools());

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <App />
  </Provider>
);

export default store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch