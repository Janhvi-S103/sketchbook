import styles from './index.module.css'
import { COLORS, MENU_ITEMS} from '@/constants'
import cx from 'classnames'
import { useSelector,useDispatch } from 'react-redux'
import { changeColor,changeBrushSize } from '@/slice/toolBoxSlice'
const Toolbox = () => {
    const dispatch = useDispatch();
    const activeMenuItem= useSelector(state => state.menu.activeMenuItem)
    const showStrokeToolOptions= activeMenuItem === MENU_ITEMS.PENCIL || activeMenuItem === MENU_ITEMS.HIGHLIGHTER || activeMenuItem === MENU_ITEMS.MARKER;
    const showBrushToolOptions=activeMenuItem === MENU_ITEMS.PENCIL || activeMenuItem === MENU_ITEMS.HIGHLIGHTER || activeMenuItem === MENU_ITEMS.MARKER || activeMenuItem === MENU_ITEMS.ERASER;
    const {color} = useSelector((state) => state.toolbox[activeMenuItem])

    const UpdateBrushSize = (e) => {
            dispatch(changeBrushSize ({item : activeMenuItem, size : e.target.value}))
    }
    const UpdateColor = (newcolor) => {
        dispatch(changeColor({item : activeMenuItem, color : newcolor}))
    }

    return (<div className={styles.toolboxContainer}>
        {showStrokeToolOptions && <div className={styles.toolItem}>
            <h4 className={styles.toolText}>Stroke Color</h4>
            <div className={styles.itemContainer}>
                <div className={ cx(styles.colorBox, {[color === COLORS.BLACK] : styles.active})} style={{backgroundColor: COLORS.BLACK}} onClick={() =>UpdateColor(COLORS.BLACK) }/>
                <div className={ cx(styles.colorBox, {[color === COLORS.RED] : styles.active})} onClick={() =>UpdateColor(COLORS.RED) }/>
                <div className={ cx(styles.colorBox, {[color === COLORS.GREEN] : styles.active})} onClick={() =>UpdateColor(COLORS.GREEN) } />
                <div className={ cx(styles.colorBox, {[color === COLORS.BLUE] : styles.active})} onClick={() =>UpdateColor(COLORS.BLUE) }/>
                <div className={ cx(styles.colorBox, {[color === COLORS.ORANGE] : styles.active})}  style={{backgroundColor: COLORS.ORANGE}} onClick={() =>UpdateColor(COLORS.ORANGE) }/>
                <div className={ cx(styles.colorBox, {[color === COLORS.YELLOW] : styles.active})}  style={{backgroundColor: COLORS.YELLOW}} onClick={() =>UpdateColor(COLORS.YELLOW) }/>
                <div className={ cx(styles.colorBox, {[color === COLORS.PURPLE] : styles.active})}  style={{backgroundColor: COLORS.PURPLE}} onClick={() =>UpdateColor(COLORS.PURPLE) }/>
                <div className={ cx(styles.colorBox, {[color === COLORS.PINK] : styles.active})}  style={{backgroundColor: COLORS.PINK}} onClick={() =>UpdateColor(COLORS.PINK) }/>
            </div>
        </div>}
        {showBrushToolOptions && <div className={styles.toolItem}>
            
            <h4 className={styles.toolText}>Brush Size</h4>
            <div className={styles.itemContainer}>
                <input type="range" min={1} max={10} step={1} onChange={UpdateBrushSize} />
            </div>
        </div>}
        
    </div>)
}

export default Toolbox;