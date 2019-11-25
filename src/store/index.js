import { createStore } from 'redux'
import reducer from './reducer/reducer'

import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'


const persistedReducer = persistReducer({
  key: 'root',
  storage,
}, reducer)

const store = createStore(persistedReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export const persistor = persistStore(store)
export default store