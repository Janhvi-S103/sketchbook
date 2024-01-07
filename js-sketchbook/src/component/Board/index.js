import { current } from "@reduxjs/toolkit";
import { useSelector, useDispatch } from 'react-redux'
import { useRef, useEffect } from "react";
const Board = () => {
    const canvasRef = useRef(null)
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

    //mount
    useEffect(() => {
        if (!canvasRef.current) return
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');

        //when mounting
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const handleMouseDown = (e) => {
            shouldDraw.current = true
           context.beginPath()
           context.moveTo(e.clientX, e.clientY)
        }

        const handleMouseMove = (e) => {
            if(!shouldDraw.current) return
            context.lineTo(e.clientX, e.clientY)
            context.stroke()
        }

        const handleMouseUp = (e) => {
            shouldDraw.current = false
        }
        canvas.addEventListener('mousedown', handleMouseDown)
        canvas.addEventListener('mouseMove', handleMouseMove)
        canvas.addEventListener('mouseUp', handleMouseUp)

        return () => {
            canvas.removeEventListener('mousedown', handleMouseDown)
            canvas.removeEventListener('mouseMove', handleMouseMove)
            canvas.removeEventListener('mouseUp', handleMouseUp)
        }
    }, [])



    return (<canvas ref={canvasRef}> </canvas>
    )
}
export default Board;