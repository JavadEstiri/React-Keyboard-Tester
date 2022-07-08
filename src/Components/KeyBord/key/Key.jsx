import React from 'react'
import './Key.css'
const Key = (props) => {

    
    const keyDown = (event) =>{
        event.preventDefault();
        
        let key =  document.getElementById(props.Code);

        if(event.code === props.Code){
            if(!key.classList.contains('active'))
                key.classList.add("active");
        }

    }

    const keyUp = (event) =>{
        event.preventDefault();

        let key =  document.getElementById(props.Code);

        if(event.code === props.Code){
            if(key.classList.contains('active'))
                key.classList.remove("active");
        }

    }

    document.addEventListener('keydown', keyDown);
    document.addEventListener('keyup', keyUp);



    return (
    <div id={props.Code} className={`key ${props.CssClasses}`}>
        {props.children}
    </div>
    )
}

export default Key