import AsyncStorage from '@react-native-async-storage/async-storage';
import rootReducers from './slice';
import {configureStore} from '@reduxjs/toolkit';
const config = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: ['loading', 'addsController'],
  debug: false, //to get useful logging
};
import {persistStore, persistReducer} from 'redux-persist';
const middleware = [];


if (__DEV__) {
  //  middleware.push(createLogger());
}

const reducers = persistReducer(config, rootReducers);
const enhancers = [...middleware];
const persistConfig = {enhancers};

export const store = configureStore({
  reducer: reducers,
  middleware: enhancers,
});

export const persistor = persistStore(store, persistConfig);