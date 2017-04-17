import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import smartbApp from './reducers';

const configureStore = () => {
  const middlewares = [thunk];

  if (process.env.NODE_ENV !== 'production') {
      middlewares.push(logger);
  }

  return createStore(
      smartbApp,
      applyMiddleware(...middlewares)
  );
};

export default configureStore;
