import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil, faEraser, faRotateLeft, faRotateRight, faFileArrowDown,faHighlighter,faMarker,faHandPointer} from '@fortawesome/free-solid-svg-icons';
import styles from './index.module.css'
import { MENU_ITEMS } from '@/constants';
import { menuitemClick,actionitemClick } from '@/slice/menuSlice';
import { handleActioItemClick } from '@/slice/menuSlice';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import cx from 'classnames';

/**
 * Renders a menu component.
 * @returns {JSX.Element} The rendered menu component.
 * Menu Wrapper
 * - Pencil icon wrapper
 * - Eraser icon wrapper
 * - Rotate left icon wrapper
 * - Rotate right icon wrapper
 * - Download icon wrapper
 */
const Menu = () => 
    {
        const dispatch = useDispatch();
        const activeMenuItem= useSelector(state => state.menu.activeMenuItem)
        const handleMenuClick = (itemName) => {
            dispatch(menuitemClick(itemName))
        }
        const handleActioItemClick = (itemName) => {
            dispatch(actionitemClick(itemName))
        }
   
    return (
                <div className={styles.menuContainer}>
                    <div className= {cx(styles.iconWrapper, {[styles.active]:activeMenuItem === MENU_ITEMS.PENCIL})} onClick={ ()=> handleMenuClick(MENU_ITEMS.PENCIL)}>
                        <FontAwesomeIcon icon={faPencil} className={styles.icon} />
                    </div>
                    <div className= {cx(styles.iconWrapper, {[styles.active]:activeMenuItem === MENU_ITEMS.HIGHLIGHTER})} onClick={ ()=> handleMenuClick(MENU_ITEMS.HIGHLIGHTER)}>
                        <FontAwesomeIcon icon={faHighlighter} className={styles.icon} />
                    </div>
                    <div className={cx(styles.iconWrapper, {[styles.active]:activeMenuItem === MENU_ITEMS.MARKER})} onClick={ ()=> handleMenuClick(MENU_ITEMS.MARKER)}>
                        <FontAwesomeIcon icon={faMarker} className={styles.icon} />
                    </div>
                    <div className= {styles.iconWrapper} onClick={ ()=> handleMenuClick(MENU_ITEMS.ERASER)}>
                        <FontAwesomeIcon icon={faEraser} className={styles.icon} />
                    </div>
                    <div  className= {styles.iconWrapper} onClick={() => handleActioItemClick(MENU_ITEMS.UNDO)}>
                        <FontAwesomeIcon icon={faRotateLeft} className={styles.icon} />
                    </div>
                    <div className= {styles.iconWrapper} onClick={() => handleActioItemClick(MENU_ITEMS.REDO)}>
                        <FontAwesomeIcon icon={faRotateRight} className={styles.icon} />
                    </div>
                    <div className= {styles.iconWrapper}>
                        <FontAwesomeIcon icon={faHandPointer} className={styles.icon} onClick={() => handleActioItemClick(MENU_ITEMS.HANDPOINTER)}/>
                    </div>
                    <div className= {styles.iconWrapper}>
                        <FontAwesomeIcon icon={faFileArrowDown} className={styles.icon} onClick={() => handleActioItemClick(MENU_ITEMS.DOWNLOAD)}/>
                    </div>
                </div>
            );
        }
        
        export default Menu; // export Menu component
