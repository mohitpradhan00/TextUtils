import React, { useState } from "react";

function TextForm(props) {
  const [text, setText] = useState("");

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    {props.showAlert('Text has been converted to Upper Case','success')};
  };
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    {props.showAlert("Text has been converted to Lower Case", "success")};
  };

  function handlecopy() {
    var textcpy = document.getElementById("mybox");
    textcpy.select();
    // textcpy.setSelectionRange(0,9999);
    navigator.clipboard
      .writeText(textcpy.value)
      .then(() => {
        console.log("Text copied to clipboard");
      })
      .catch((error) => {
        console.error("Error copying text to clipboard:", error);
      });
    {props.showAlert("Text has been copied", "success")};
  }

  const handleClearClick = () => {
    setText("");
    {props.showAlert("Text has been Cleared", "success")};
  };
  
  const handleSpeak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
    {props.showAlert("Speak Activated", "success")};
  };

  const handleOnChange = (e) => {
    setText(e.target.value);
  };

  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "#041274" }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3 ">
          <label htmlFor="mybox" className="form-label"></label>
          <textarea
            className="form-control"
            id="mybox"
            rows="8"
            placeholder="Enter text here"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "light" ? "white" : "grey",
              color: props.mode === "dark" ? "white" : "#041274",
            }}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>
          Convert to Upper Case
        </button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>
          Convert to Lower Case
        </button>
        <button className="btn btn-primary mx-2" onClick={handleSpeak}>
          Speak
        </button>
        <button className="btn btn-primary mx-2" onClick={handlecopy}>
          Copy to Clickboard
        </button>

        <button className="btn btn-danger mx-2" onClick={handleClearClick}>
          Clear Text
        </button>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "#041274" }}
      >
        <h1>Your text summary</h1>
        <p>
          {text.trim() === "" ? 0 : text.trim().split(/\s+/).length}
          words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text :"Enter something to preview it here"}</p>
      </div>
    </>
  );
}

export default TextForm;
