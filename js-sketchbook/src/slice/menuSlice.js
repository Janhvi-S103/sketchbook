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
        menuItemClick: (state,action) => {
            state.activeMenuItem = action.payload
        },
        actionItemClick: (state, action) => {
            // Add your code here
        }
    }
})

export const {menuitemClick} = menuSlice.actions
export default menuSlice.reducer