import { Provider } from 'react-redux';
import TaskContainer from './components/TaskContainer';
import GithubProfileLoader from './components/GithubProfileContainer';

import { store } from './modules'

import './index.css';

function App() {
  return (
    <Provider store={store}>
      <GithubProfileLoader />
    </Provider>
  );
}

export default App;
