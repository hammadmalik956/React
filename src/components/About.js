import React, { useState } from 'react'

export default function About() {
    const [tex,setBTex] = useState("Enable Dark Mode")
    const [myStyle,setMyStyle] = useState(
    {
        color:'black',
        backgroundColor: "white",
       
         
     }
    )
    let handleOnClick = ()=>{
        if(myStyle.color === 'white')
        {
           setMyStyle( {
                color:'black',
                backgroundColor: "white",
               
                 
             })
             setBTex("Enable Dark Mode")
        }
        else{
            setMyStyle({
                color:'white',
                backgroundColor: "black",
               border: '1px solid red'
                
            })
            setBTex("Enable Light Mode")
        }

    }
 
  return (
      <>

           
        <div className="container" style={myStyle} >
            <h1 className="my-3">About Us</h1>
            <div className="accordion accordion-flush" id="accordionFlushExample">
                    <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingOne">
            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                Accordion Item #1
            </button>
            </h2>
            <div id="flush-collapseOne" className="accordion-collapse collapse" style={myStyle} aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
            <div className="accordion-body" >Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
            </div>
         </div>
         <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingTwo">
            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                Accordion Item #2
            </button>
            </h2>
            <div id="flush-collapseTwo" className="accordion-collapse collapse" style={myStyle} aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
            <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
            </div>
              </div>
              <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingThree">
            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                Accordion Item #3
            </button>
            </h2>
            <div id="flush-collapseThree" className="accordion-collapse collapse"  style={myStyle} aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
            <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
            </div>
             </div>
              </div>
              <div className="container my-1" >
                  
            <div className="form-check form-switch">
                <input className="form-check-input"  type="checkbox" onClick={handleOnClick} id="flexSwitchCheckDefault"/>
                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{tex}</label>
            </div>
        </div>
        </div>
        
        </>
  )
}
