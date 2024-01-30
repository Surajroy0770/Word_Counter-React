import React, { useState } from 'react'

export default function FormText(props) {
    const handleUpClick = () => {
        setText(text.toUpperCase());
        props.showAlert("Converted Upper Case", "success");
    }
    const handleDownClick = () => {
        setText(text.toLowerCase());
        props.showAlert("Converted Lower Case", "success");
    }
    // const CapitalizeText = (text) => {
    //     return text.charAt(0).toUpperCase() + text.slice(1);
    //   }
    const handleTextClear = () => {
        let tx = '';
        setText(tx);
        props.showAlert("Clear Text", "success");
    }

    const RemoveExtraSpace = () => {
        let removedSpacesText = text.split(/[ ]+/);
        setText(removedSpacesText.join(" "))
        props.showAlert("Removed Extra Spaces", "success");
    }
    const handleOnChange = (event) => {
        setText(event.target.value)
    }
    const CopyText = () => {
        let copyText = document.getElementById("myBox");
        copyText.select();
        navigator.clipboard.writeText(copyText.value);
        document.getSelection().removeAllRanges();
        props.showAlert("copied Text", "success");
    }
    const [text, setText] = useState("");
    return (
        <>
            <div className='container my-2' style={{ color: props.mode === "light" ? "black" : "white" }}>
                <h3>{props.heading}</h3>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
                </div>
                <button className="btn btn-success " onClick={handleUpClick}>Upper Case</button>
                <button className="btn btn-success mx-3" onClick={handleDownClick}>Lower Case</button>
                <button className="btn btn-success" onClick={handleTextClear}>Text Clear</button>
                <button className="btn btn-success mx-3" onClick={CopyText}>Copy Text</button>
                <button className="btn btn-success " onClick={RemoveExtraSpace}>Remove Space</button>
                {/* <button className="btn btn-success " onClick={CapitalizeText}>Capitalize</button> */}
            </div>
            <div className="container my-2" style={{ color: props.mode === "light" ? "black" : "white" }}>
                <h3>Your text summary</h3>
                <p>{text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} words, {text.length} characters</p>
                <h3>Read word in time</h3>
                <p>{0.008 * text.split(" ").filter((element) => { return element.length !== 0 }).length} Minutes read</p>
                <h3>Preview</h3>
                <p>{text}</p>
            </div>
        </>
    )
}
