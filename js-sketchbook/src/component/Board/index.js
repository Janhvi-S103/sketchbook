import { useSelector, useDispatch } from 'react-redux'
import {useRef, useEffect, useLayoutEffect, use} from "react";
import { MENU_ITEMS } from "@/constants";
import { menuitemClick ,actionitemClick } from "@/slice/menuSlice";

const Board = () => {
    const canvasRef = useRef(null)
    const dispatch = useDispatch()
    const drawHistory = useRef([])
    const historyPointer = useRef(0)
    const shouldDraw= useRef(false)
    const { activeMenuItem, actionMenuItem } = useSelector((state) => state.menu)
    const { color, size } = useSelector((state) => state.toolbox[activeMenuItem])

    useEffect(() => {
        if (!canvasRef.current) return
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');

        const changeConfig = () => {

            context.strokeStyle = color;
            context.lineWidth = size;
        }
        changeConfig()
    }, [color, size])

     useEffect(() => {
        if (!canvasRef.current) return
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');

        if (actionMenuItem === MENU_ITEMS.DOWNLOAD) {
            const URL = canvas.toDataURL()
            const anchor = document.createElement('a')
            anchor.href = URL
            anchor.download = 'sketch.png'
            anchor.click()
        }else if(actionMenuItem === MENU_ITEMS.UNDO || actionMenuItem === MENU_ITEMS.REDO){
            if(historyPointer.current > 0 && actionMenuItem === MENU_ITEMS.UNDO)    historyPointer.current -= 1
            if(historyPointer.current < drawHistory.current.length - 1 && actionMenuItem === MENU_ITEMS.REDO)   historyPointer.current += 1
                const imageData = drawHistory.current[historyPointer.current]
                context.putImageData(imageData, 0, 0)
        }
        else if (actionMenuItem === MENU_ITEMS.UPLOAD) {
            const input = document.createElement('input');
            input.type = 'file';
            input.accept = 'image/*';
            input.onchange = function(event) {
                const file = event.target.files[0];
                const reader = new FileReader();
                reader.onload = function(e) {
                    const img = new Image();
                    img.onload = function() {
                        context.clearRect(0, 0, canvas.width, canvas.height);
                        context.drawImage(img, 0, 0, canvas.width, canvas.height);
                    };
                    img.src = e.target.result;
                };
                reader.readAsDataURL(file);
            };
            input.click();
        }
        dispatch(actionitemClick(null))
     }, [actionMenuItem])
   

    //mount
    useLayoutEffect(() => {
        if (!canvasRef.current) return
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');

        //when mounting
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const beginPath = (x,y) => {
            context.beginPath()
            context.moveTo(x,y)
        }
        const drawLine = (x,y) => { 
            context.lineTo(x,y)
            context.stroke()
        }

        const handleMouseDown = (e) => {
            shouldDraw.current = true
            beginPath(e.clientX, e.clientY)
        }

        const handleMouseMove = (e) => {
            if(!shouldDraw.current) return
            drawLine(e.clientX, e.clientY)
        }

        const handleMouseUp = () => {
            shouldDraw.current = false
            const imageData = context.getImageData(0,0,canvas.width,canvas.height)
            drawHistory.current.push(imageData)
            historyPointer.current= drawHistory.current.length -1
        }
        canvas.addEventListener('mousedown', handleMouseDown)
        canvas.addEventListener('mousemove', handleMouseMove)
        canvas.addEventListener('mouseup', handleMouseUp)

        return () => {
            canvas.removeEventListener('mousedown', handleMouseDown)
            canvas.removeEventListener('mousemove', handleMouseMove)
            canvas.removeEventListener('mouseup', handleMouseUp)
        }
    }, [])



    return (<canvas ref={canvasRef}> </canvas>
    )
}
export default Board;