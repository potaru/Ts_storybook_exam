import { Provider } from 'react-redux';
import rootReducer from './modules';
import InboxScreen from './components/TaskContainer';

import './index.css';
import { createStore } from 'redux';

import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(rootReducer, composeWithDevTools())
console.log(store.getState());

function App() {
  return (
    <Provider store={store}>
      <InboxScreen />
    </Provider>
  );
}

export default App;
