import { createStore, applyMiddleware,compose } from 'redux'
import reducer from './reducer/reducer'
import thunk from 'redux-thunk'

import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
  : compose
const enhancer = composeEnhancers(applyMiddleware(thunk))
const persistedReducer = persistReducer({
  key: 'root',
  storage,
}, reducer)

const store = createStore(
  persistedReducer, 
  enhancer
)
export const persistor = persistStore(store)
export default store