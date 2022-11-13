import { createSlice } from '@reduxjs/toolkit';

interface AppInitialState {}

export const appInitialState: AppInitialState = {};

export const appSlice = createSlice({
  name: 'app',
  initialState: appInitialState,
  reducers: {},
});

export default appSlice.reducer;
