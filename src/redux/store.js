import { configureStore } from '@reduxjs/toolkit';

import contactsReducer from './reducer/contactsSlice';
import filterReducer from './reducer/filterSplice';

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  },
});

export default store;
