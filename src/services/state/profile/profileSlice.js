import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    email: '',
};

const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        setProfile: (state, action) => {
            state.email = action.payload.email;
        },
        clearProfile: (state) => {
            state = initialState;
        },
    },
});

export const { setProfile, clearProfile } = profileSlice.actions;

export default profileSlice.reducer;