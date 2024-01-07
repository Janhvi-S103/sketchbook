import {createSlice} from '@reduxjs/toolkit';
import { MENU_ITEMS } from '@/constants';
const initialState={
    activeMenuItem:MENU_ITEMS.PENCIL,
    actionMenuItem:null
}
export const menuSlice = createSlice({
    name:'menu',
    initialState,
    reducers:{
        menuitemClick: (state,action) => {
            state.activeMenuItem = action.payload
        },
        actionitemClick: (state, action) => {
            // Add your code here
        }
    }
})

export const {menuitemClick} = menuSlice.actions
export default menuSlice.reducer