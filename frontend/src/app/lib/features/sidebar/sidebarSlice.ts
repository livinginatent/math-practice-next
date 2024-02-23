import { createSlice } from "@reduxjs/toolkit";
export interface SidebarState {
isExpanded:boolean
}

const initialState: SidebarState = {
isExpanded:true
};

export const sidebarSlice = createSlice({
name:'sidebar',
initialState,
reducers:{
    expandSidebar:(state)=>{
        state.isExpanded=!state.isExpanded
    }
}
})

export const {expandSidebar} = sidebarSlice.actions

export default sidebarSlice.reducer