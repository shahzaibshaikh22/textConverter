import React,{useState} from "react";

export default function FormsTexts(props) {
    const toUpCase = () =>{
        console.log("clicked");
        let UpCase = text.toUpperCase()
        setText(UpCase)
        setUpt("text are Upper Case")

    }
    const toLoCase = () =>{
      console.log("clicked");
      let LoCase = text.toLowerCase()
      setText(LoCase)
      setUpt("text are Lower Case")
  }
    const handleOnChanged = (event) =>{
        setText(event.target.value)
    }
    const handleCopy =() =>{
      var text = document.getElementById("myText_o");
      text.select();
      navigator.clipboard.writeText(text.value);
    }
    const [text, setText] = useState("");
    const [Upt, setUpt] = useState("text are Lower Case");

  return (
    <div>
      <div className="container">
      <div className="mb-3">
        <label for="myText" className="form-label">{props.top_heading}</label>
        <textarea className="form-control" id="myText_o" rows="6" onChange={handleOnChanged} value={text}></textarea>
      </div>
      <button className="btn btn-info" onClick={toUpCase}>To UpperCase</button>
      <button className="btn btn-success mx-3" onClick={toLoCase}>To LowerCase</button>
      <button className="btn btn-primary" onClick={handleCopy}>Copy</button>


      <div className="container my-3">
        <h2>{props.sumary}</h2>
        <p>total words is = {text.split(" ").length} total Characters is  = {text.length} and the {Upt}</p>
        <p>it takes {0.008 * text.split(" ").length} minutes to read this  </p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
      </div>
    </div>
  );
}
