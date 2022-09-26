import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import { AppState } from "..";

export const ProfileSlice = createSlice({
    name:"profile",
    initialState: {
        name: "omg name"
    }, reducers:{
        setProfileData:(state, action) => {
            state.name = action.payload
        }
    }, extraReducers:{
        [HYDRATE]: (state, action) => {
            //TODO handle client side override
            //instead of if , probably better to create a spread operator merge {..state, } like on docs
            if (!action.payload.profile.name)  return state
            state.name = action.payload.profile.name
        }
    }
})



export const {setProfileData} = ProfileSlice.actions

export const selectState = (state: AppState) => state

export default ProfileSlice.reducer
