import React, {useState} from 'react'


export default function TextForm(props) {
    const handleUpClick = ()=>{
        // console.log("Uppercase was clicked: " +  text);
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handleLowClick = ()=>{
        // console.log("Uppercase was clicked: " +  text);
        let newText = text.toLowerCase();
        setText(newText)
    }

    const handleOnChange = (event)=>{
        // console.log("On change");
        setText(event.target.value)
    }

    const [text, setText] = useState('Enter text here2'); 
    // text = "new text"; // Wrong way to change the state
    // setText("new text"); // Correct way to change the state
    return (
        <>
        <div  style={{color:props.mode === 'light'?'black':'white'}} >
        <div className="container"> 
            <h1>{props.heading}</h1>
            <div className="mb-3"> 
            <textarea className="form-control" value={text} style={{backgroundColor:props.mode === 'light'?'white':'grey', color:props.mode === 'light'?'black':'white'}} onChange={handleOnChange} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-outline-danger mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-outline-danger" onClick={handleLowClick}>Convert to Lowercase</button>
        </div>

        <div className="container my-3">
          <h1>Text Summary</h1>
          <p>{text.split(" ").length-1} Words and {text.length} Characters</p>
          <p>{0.008*(text.split(" ").length-1)} Minutes To Read</p>
        </div>
        </div>
        </>
    )
}
