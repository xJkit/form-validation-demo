import rootReducer from 'reducers';
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';

const logger = createLogger({ collapsed: true });

const configureStore = () => {
  const store = createStore(rootReducer, applyMiddleware(logger));
  return store;
}

export default configureStore;
