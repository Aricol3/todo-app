import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name: "auth",
    initialState: {
        JWT: "",
    },
    reducers: {
        setJWT: (state: { JWT: string }, action: PayloadAction<string>) => {
            state.JWT = action.payload;
        },
    },
});

export const { setJWT } = authSlice.actions;

export default authSlice.reducer;
