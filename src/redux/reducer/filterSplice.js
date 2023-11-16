import { createSlice } from '@reduxjs/toolkit';

const initialState = '';

const filterSplice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    getFilterName: (state, action) => {
      return (state = action.payload);
    },
  },
});
export const { getFilterName } = filterSplice.actions;
export default filterSplice.reducer;