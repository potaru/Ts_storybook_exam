import { Provider } from 'react-redux';
import TaskContainer from './components/TaskContainer';
import { store } from './modules'

import './index.css';

function App() {
  return (
    <Provider store={store}>
      <TaskContainer />
    </Provider>
  );
}

export default App;
