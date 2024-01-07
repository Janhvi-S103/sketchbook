import {createSlice} from '@reduxjs/toolkit';
import { COLORS,MENU_ITEMS } from '@/constants';
const initialState={
    [MENU_ITEMS.PENCIL]:{
     color:COLORS.BLACK,
     size: 3
    },
    [MENU_ITEMS.HIGHLIGHTER]: {
        color:COLORS.YELLOW,
        size: 3
    },
    [MENU_ITEMS.MARKER]:{
        color:COLORS.BLACK,
        size: 3
       },
    [MENU_ITEMS.ERASER]: {
        color:COLORS.WHITE,
        size: 3
    },
    [MENU_ITEMS.UNDO]:{},
    [MENU_ITEMS.REDO]:{},
    [MENU_ITEMS.HANDPOINTER]:{},
    [MENU_ITEMS.DOWNLOAD]:{}
}
export const toolBoxSlice = createSlice({
    name:'ToolBox',
    initialState,
    reducers:{
        changeColor: (state,action) => {
            state[action.payload].color = action.payload.color
        },
        changeBrushSize: (state, action) => {
            state[action.payload].size = action.payload.size
            // Add your code here
        }
    }
})
export const {changeColor,changeBrushSize} = toolBoxSlice.actions
export default toolBoxSlice.reducer