import rootReducer from 'reducers';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';

const logger = createLogger({ collapsed: true });

const configureStore = () => {
  const store = createStore(rootReducer, applyMiddleware(thunk, logger));
  return store;
}

export default configureStore;
