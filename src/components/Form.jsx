import React, { useState } from "react";

export default function Form(props) {





    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Upper-case", "success");
    }

    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lower-case", "success");
    }

    const handleClearText = () => {
        let newText = '';
        setText(newText);
        props.showAlert("Text was cleared", "danger");
    }

    const handleCopy = () => {
        var text = document.getElementById('exampleFormControlTextarea1');
        text.select();
        text.setSelectionRange(0, 9999);
        navigator.clipboard.writeText(text.value);
        document.getSelection().removeAllRanges();
        props.showAlert("Copied to clipboard", "success");
    }

    const removeSpaces = () => {
        var text = document.getElementById('exampleFormControlTextarea1').value;
        const trimmedText = text.trim();
        const noSpacesText = trimmedText.replace(/\s/g, '');
        setText(noSpacesText);
        props.showAlert("All spaces have been removed.", "primary");
    }

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const [text, setText] = useState('Enter some text here...');
    return (
        <div className={`text-${props.mode === 'light' ? 'dark' : 'light'}`}>
            <h1>{props.heading}</h1>
            <div className="container">
                <textarea className={`form-control bg-${props.mode} text-${props.mode === 'light' ? 'dark' : 'light'}`} value={text} id="exampleFormControlTextarea1" onChange={handleOnChange} rows="8"></textarea>
            </div>
            <button disabled={text.length === 0} className="btn btn-primary my-3 mx-1" onClick={handleUpClick}>Uppercase</button>
            <button disabled={text.length === 0} className="btn btn-primary my-3 mx-1" onClick={handleLoClick}>Lowercase</button>
            <button disabled={text.length === 0} className="btn btn-primary my-3 mx-1" onClick={handleClearText}>Clear</button>
            <button disabled={text.length === 0} className="btn btn-primary my-3 mx-1" onClick={handleCopy}>Copy</button>
            <button disabled={text.length === 0} className="btn btn-primary my-3 mx-1" onClick={removeSpaces}>Remove Spaces</button>
            <div className="container my-3">
                <h1>Your text summary</h1>
                <p>{text.split(" ").filter((element) => { return element.length !== 0 }).length} words and {text.length} characters</p>
                <p>About {0.008 * text.split(" ").filter((element) => { return element.length !== 0 }).length} minutes to read</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Nothing to preview"}</p>
            </div>
        </div>
    )
}