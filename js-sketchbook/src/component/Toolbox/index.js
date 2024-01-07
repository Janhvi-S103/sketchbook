import styles from './index.module.css'
import { COLORS, MENU_ITEMS} from '@/constants'
import { useSelector } from 'react-redux'

const Toolbox = () => {
    const activeMenuItem= useSelector(state => state.menu.activeMenuItem)
    const showStrokeToolOptions= activeMenuItem === MENU_ITEMS.PENCIL || activeMenuItem === MENU_ITEMS.HIGHLIGHTER || activeMenuItem === MENU_ITEMS.MARKER;
    const showBrushToolOptions=activeMenuItem === MENU_ITEMS.PENCIL || activeMenuItem === MENU_ITEMS.HIGHLIGHTER || activeMenuItem === MENU_ITEMS.MARKER || activeMenuItem === MENU_ITEMS.ERASER;
    const UpdateBrushSize = (e) => {

    }
    return (<div className={styles.toolboxContainer}>
        {showStrokeToolOptions && <div className={styles.toolItem}>
            <h4 className={styles.toolText}>Stroke Color</h4>
            <div className={styles.itemContainer}>
                <div className={ styles.colorBox} style={{backgroundColor: COLORS.BLACK}}/>
                <div className={ styles.colorBox} style={{backgroundColor: COLORS.RED}} />
                <div className={ styles.colorBox} style={{backgroundColor: COLORS.GREEN}} />
                <div className={ styles.colorBox} style={{backgroundColor: COLORS.BLUE}} />
                <div className={  styles.colorBox} style={{backgroundColor: COLORS.ORANGE}} />
                <div className={ (styles.colorBox)} style={{backgroundColor: COLORS.YELLOW}} />
                <div className={  styles.colorBox} style={{backgroundColor: COLORS.PURPLE}} />
                <div className={ (styles.colorBox)} style={{backgroundColor: COLORS.PINK}} />
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