import {createSlice} from '@reduxjs/toolkit'

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        JWT: ""
    },
    reducers: {
        setJWT: (state: any, action: any) => {
            state.JWT = action.payload
        },
    }
})

export const {setJWT} = authSlice.actions

export default authSlice.reducer