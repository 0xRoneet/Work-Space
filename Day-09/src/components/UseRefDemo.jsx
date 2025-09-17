import {useRef} from 'react';

export default function UseRefDemo(){
    const inputRef = useRef(null);

    const handleClick =() =>{
        inputRef.current.focus(); //focus() is Dom Method
        inputRef.current.value = "Hello GenC Direct manipulation is Done Through useRef";
    };

    return(
        <div>
            <h1>This Is An useRef Example</h1>
            <input type='text' placeholder='Type Your text' name='genCInput' ref={inputRef}/>
            <button onClick={handleClick}>Focus</button>
        </div>
    );
};