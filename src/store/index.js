import { applyMiddleware, createStore, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducer from './reducers';
import subscribeForLoadData from './sagas';


const sagaMiddleware = createSagaMiddleware();
const createStoreWithMiddleware = compose(
  applyMiddleware(sagaMiddleware)
)(createStore);

const initialState = {
  data: [],
  isError: false,
  isLoading: false,
  error: ''
};

const store = createStoreWithMiddleware(reducer, initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

sagaMiddleware.run(subscribeForLoadData);


export default store;