import { createStore, compose } from 'redux';
import devTools from 'remote-redux-devtools';
import reducers from '../reducers';

export default function configureStore() {
  const store = createStore(
    reducers,
    devTools()
  );

  if (module.hot) {
    module.hot.accept(() => {
      const nextRootReducer = require('../reducers/index').default;
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
};