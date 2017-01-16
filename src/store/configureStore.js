import { createStore, compose, applyMiddleware } from 'redux';
import apiMiddleware from 'middlewares/api';
import rootReducers from 'reducers';

function configureStore() {
  const store = createStore(
    rootReducers,
    compose(
      applyMiddleware(
        apiMiddleware,
      ),
      window.devToolsExtension ? window.devToolsExtension() : f => f
    )
  );
  return store;
}

export default configureStore;
