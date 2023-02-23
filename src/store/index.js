import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers/index';
import storage from 'redux-persist/lib/storage'
import { persistReducer} from 'redux-persist'
import { persistStore} from "redux-persist";
import hardSet from 'redux-persist/lib/stateReconciler/hardSet'
import { FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist'

const persistConfig = {
    key: 'root',
    storage: storage,  
    stateReconciler: hardSet,
  }

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

/** Assign the created store to persistStore */
  export const persistor = persistStore(store);
  