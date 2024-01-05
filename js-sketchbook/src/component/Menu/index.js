import  {useDispatch } from '@reduxjs/toolkit';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil, faEraser, faRotateLeft, faRotateRight, faFileArrowDown,faHighlighter,faMarker,faHandPointer} from '@fortawesome/free-solid-svg-icons';
import styles from './index.module.css'
import { MENU_ITEMS } from '@/constants';
import { menuitemClick,actionitemClick } from '@/slice/menuSlice';
import { handleActioItemClick } from '@/slice/menuSlice';

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
    function handleMenuClick(itemname) {
    }
    return (
                <div className={styles.menuContainer}>
                    <div className= {styles.iconWrapper} onClick={ ()=> handleMenuClick(MENU_ITEMS.PENCIL)}>
                        <FontAwesomeIcon icon={faPencil} className={styles.icon} />
                    </div>
                    <div className= {styles.iconWrapper} onClick={ ()=> handleMenuClick(MENU_ITEMS.HIGHLIGHTER)}>
                        <FontAwesomeIcon icon={faHighlighter} className={styles.icon} />
                    </div>
                    <div className= {styles.iconWrapper} onClick={ ()=> handleMenuClick(MENU_ITEMS.MARKER)}>
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
