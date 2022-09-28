import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import planesService from "../services/planesService";

export const getPlanes = createAsyncThunk('GET_PLANES', async (_, thunkAPI) => {
  try {
    return await planesService.getPlanes();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data)
  }
});

const planesSlice = createSlice({
  name: 'planes',
  initialState: {
    planes: null,
    isError: false,
    isLoading: false,
    message: ''
  },

  extraReducers: (builder) => {
    builder.addCase(getPlanes.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(getPlanes.fulfilled, (state, action) => {
      state.isLoading = false;
      state.planes = action.payload
    });

    builder.addCase(getPlanes.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload.message;
      state.planes = null;
    });
  }
});

export default planesSlice.reducer;