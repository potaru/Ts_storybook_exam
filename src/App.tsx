import { Provider } from 'react-redux';

import Menu from './components/Menu'

import { store } from './modules'

import {
  BrowserRouter as Router,
} from 'react-router-dom';

import './index.css';

function App() {
  return (
		<Router>
    	<Provider store={store}>
				<Menu />
			</Provider>
		</Router>
  );
}

export default App;
