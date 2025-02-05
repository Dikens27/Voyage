import { createSlice } from '@reduxjs/toolkit';
import { fetchCampers } from './operations';

const slice = createSlice({
  name: 'campers',
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  extraReducers: builder =>
    builder
      .addCase(fetchCampers.pending, state => {
        state.loading = true;
      })
      .addCase(fetchCampers.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchCampers.rejected, state => {
        state.loading = false;
        state.error = true;
      }),
});

export default slice.reducer;
