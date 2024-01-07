import { current } from "@reduxjs/toolkit";
import { useSelector,useDispatch } from 'react-redux'
import {useRef,useEffect} from "react";
const Board = () => {
    const canvasRef = useRef(null)
    const {activeMenuItem, actionMenuItem} = useSelector((state) => state.menu)
    const {color, size} = useSelector((state) => state.toolbox[activeMenuItem])

    useEffect(() => {
        if(!canvasRef.current) return
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');

        //when mounting
        canvas.width=window.innerWidth;
        canvas.height=window.innerHeight;


    }, [])

        console.log(color,size)

    return (   <canvas ref={canvasRef}> </canvas>
    )
}
export default Board;