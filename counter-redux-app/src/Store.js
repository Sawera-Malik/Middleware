// store.js
import { configureStore,applyMiddleware } from '@reduxjs/toolkit';
import rootReducer from './reducers'; 
import loggingMiddleware from './loggingMiddleware';


    const store = configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(loggingMiddleware),
      });
      



export default store;
