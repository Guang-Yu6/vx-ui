import './App.css';
import Button from './button';
import React from "react";
import useColorSwitch from "./useColorSwitch";


function App() {
    const [color, ww] = useColorSwitch();
    const [color2, ww2] = useColorSwitch(" black", "blue");

    return (
        <div>
            <Button label="按钮了吗" onClick={ww}>
                <span>2</span>
            </Button>

            <p style={{color}}>文本</p>

            <Button label="点我" onClick={ww2}/>

            <p style={{color:color2}}>文本2</p>
        </div>

    )

}

export default App;
