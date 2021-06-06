import {useState} from "react";

function useColorSwitch(color1 = 'pink',color2='red'){

    const [color,setColor] = useState(color1);

    const ww =()=>{
        setColor(color2)
    };


    return [color,ww]
}

export default useColorSwitch;
