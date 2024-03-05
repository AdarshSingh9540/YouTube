import { createSlice } from "@reduxjs/toolkit";

const videoSlice =  createSlice({
    name:"video",
    initialState: {
        Video: [],
        channel: []
    },
    reducers:{
        addvideo: (state, action) => {
            state.Video.push(...action.payload);
        },
        addchannel: (state, action) => {
            state.channel.push(...action.payload);
        }
    }
})

export const {addvideo , addchannel} = videoSlice.actions
export default videoSlice.reducer