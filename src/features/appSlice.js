import { createSlice } from '@reduxjs/toolkit';
export const appSlice = createSlice({
    name: 'app',
    initialState: {
        roomId: null,
        add:null,
    
    },
    reducers:{
    enterRoom: (state,action) => {
        state.roomId =action.payload.roomId;
    },
    enterCount: (state,action)=>{
        state.add=action.payload.add;
    },
   },
   
});
export const {enterRoom, enterCount}=appSlice.actions;

export const selectRoomId=state=>state.app.roomId;
export const selectCount=state=>state.app.add;
export default appSlice.reducer;
