import { configureStore, createSlice } from '@reduxjs/toolkit';

// Sample user slice
const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null, // or set a default user object for testing
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    clearUser: (state) => {
      state.user = null;
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;

const store = configureStore({
  reducer: {
    user: userSlice.reducer,
  },
});

export default store; 