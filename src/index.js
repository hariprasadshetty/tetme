import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import App from './Containers/app';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import thunk from 'redux-thunk';
import reducers from '../src/Reducers/index';
import registerServiceWorker from './registerServiceWorker';

class RootApp extends Component {
	render() {
		return (
			<Router>
				<div>
					<App />
				</div>
			</Router>
		);
	}
}

const logger = (store) => {
	return (next) => {
		return (action) => {
			next(action);
			return action;
		};
	};
};

const store = createStore(reducers, applyMiddleware(logger,thunk));

ReactDOM.render(
	<Provider store={store}>
		<RootApp /></Provider>,
	document.querySelector('#root')
);
registerServiceWorker();
