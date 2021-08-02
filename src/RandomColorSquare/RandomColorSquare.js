import './RandomColorSquare.css'
import {useState} from "react";
export default function RandomColorSquare(props){
    const colors = ['purple', 'blue', 'green', 'yellow', 'orange', 'pink', 'brown', 'red', 'silver'];
    const [color, SetColor] = useState('black');
    function colorPick() {
        SetColor(colors[Math.floor(Math.random()*colors.length)])
    }
    return <div  onClick={colorPick}className="RandomColorSquare" style={{backgroundColor: color}}></div>;
}