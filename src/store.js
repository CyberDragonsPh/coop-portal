import { configureStore } from '@reduxjs/toolkit'
import usersReducer from './components/redux/SliceReducer';

export const store = configureStore({
  reducer: {
    users: usersReducer
  },
})