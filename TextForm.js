
import React ,{useState} from 'react'

export default function TextForm(props){
    const handleUpClick = ()=>{
         console.log("Uppercase was clicked"+text);
         let newText=text.toUpperCase();
         setText(newText);
    }
    const handleLoClick = ()=>{
        console.log("Lowercase was clicked"+text);
        let newText=text.toLowerCase();
        setText(newText);
   }
    const handleOnChange=(event)=>{
        console.log("On change");
        setText(event.target.value);
    }
    const [text,setText]=useState("Enter text here");
    //setText("new text");
    return(
        <>
        <div className="container">
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea  className="form-control" id="myBox" rows="8" value={text} onChange={handleOnChange}></textarea>
            </div>
            <button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-3" onClick={handleLoClick}>Convert to Lowercase</button>
        </div>
        <div className="container my-3">
            <h1>Your text summary</h1>
            <p>{text.split(" ").length-1} words and {text.length-1} characters</p>
            <p >{0.008*text.split(" ").length} Minutes to read</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
        </>
    )
}