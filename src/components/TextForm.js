import React, {useState} from 'react'


export default function TextForm(props) {

    
    const handleUpClick = ()=>{
        // console.log("Uppercase was clicked: " +  text);
        let newText = text.toUpperCase();
        setText(newText)
        props.setAler("Text To Upper Case","success")
    }
    const handleLowClick = ()=>{
        // console.log("Uppercase was clicked: " +  text);
        let newText = text.toLowerCase();
        setText(newText)
        props.setAler("Text To lowerCase","success")
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
            <textarea className="form-control" value={text} style={{backgroundColor:props.mode === 'light'?'white':'#818b95', color:props.mode === 'light'?'black':'white'}} onChange={handleOnChange} id="myBox" rows="8"></textarea>
            </div>
            <button disabled= {text.length===0} className="btn btn-outline-danger mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
            <button disabled= {text.length===0} className="btn btn-outline-danger" onClick={handleLowClick}>Convert to Lowercase</button>
        </div>

        <div className="container my-3">
          <h1>Text Summary</h1>
          <p>{text.split(" ").filter((element)=>{ return element.length!=0}).length} Words and {text.length} Characters</p>
          <p>{0.008*(text.split(" ").filter((element)=>{ return element.length!=0}).length)} Minutes To Read</p>
        </div>
        </div>
        </>
    )
}
