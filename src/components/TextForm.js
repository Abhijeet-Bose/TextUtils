import React, {useState} from 'react'


export default function TextForm(props) {
    const handleUpClick = () =>{
        //console.log("UpperCase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase", "success")
    }
    const handleOnChange = (event) =>{
        //console.log("On Change" );
        setText(event.target.value);
    }
    const handleLowClick = () =>
    {
        let newText2 = text.toLowerCase();
        setText(newText2);
        props.showAlert("Conevrted to LowerCase","success")
    }
    const handleRemovePunc =() => {
        
        let newText4 = text.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
        var newText3 = newText4.replace(/\text{2,}/g," ");
        setText(newText3)

    }
    const handleClear = () =>{
        let newText5 = ""
        setText(newText5);
    }

    const handleExtraSpaces = () =>{
        let newText6 = text.split(/[ ]+/);
        setText(newText6.join(" "))
    }
    const handleCopy = () =>{
        console.log("I am copy");
        var text = document.getElementById("myBox");
        text.select();
        text.setSelectionRange(0,9999);
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to clipboard", "success")
    }
    const [text, setText] = useState("");
    return (
    <>
    <div className='container' style = {{color :props.mode === 'dark' ? 'white':'black'}}>

        <h1>{props.heading}</h1>
        <div className="mb-3">
        <label htmlFor="mbox" className="form-label"></label>
        <textarea className="form-control" value = {text} style = {{backgroundColor: props.mode=== 'light' ? 'white' :'grey', color : props.mode === 'dark' ? 'white' : '#042743'}} onChange = {handleOnChange} id="myBox" rows="8"></textarea>
        </div>
        <button type="button" className="btn btn-primary mx-3"   onClick={handleLowClick}>lowercase</button>
        <button type="button" className="btn btn-primary mx-3"   onClick={handleUpClick}>UPPERCASE</button>
        <button type="button" className="btn btn-primary mx-3"   onClick={handleRemovePunc}>Remove Punctuations</button>
        <button type="button" className="btn btn-primary mx-3"   onClick={handleCopy}>Copy</button>
        <button type="button" className="btn btn-primary mx-3"   onClick={handleClear}>Clear</button>
        <button type="button" className="btn btn-primary mx-3"   onClick={handleExtraSpaces}>Remove Spaces</button>
    </div>
    <div className='container my-3' style = {{color :props.mode === 'dark' ? 'white':'black'}} >
        <h1>Your Text Summary</h1>
        <p>{text.length} characters and {text.split(" ").length-1} words</p>
        <p>{0.008 * text.split(" ").length}Minutes Read</p>
        <h3>Preview</h3>
        <p>{text.length>0?text:"Enter Text To Preview"}</p>



    </div>
</>
  )
}
