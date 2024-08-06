import { useState, useEffect } from "react";
import "./Footer.css"


export function Footer() {
  const [color, setColor] = useState("white");

  useEffect(() => {
    document.body.style.backgroundColor = color;
  }, [color]);

  return (
    <>
    <div className="btn-container-above header-style" >
      CLICK BELOW ON COLOR BUTTONS TO CHANGE BG-COLOR
    </div>
    <div className="btn-container">
      
    <button
      className="btn red"
      onClick={() => {
        setColor("red");
      }}
    >
      
    </button>
    <button
      className="btn yellow"
      onClick={() => {
        setColor("yellow");
      }}
    >
      
    </button>
    <button
      className="btn black"
      onClick={() => {
        setColor("black");
      }}
    >
      
    </button>
    <button
      className="btn purple"
      onClick={() => {
        setColor("purple");
      }}
    >
     
    </button>
    <button
      className="btn green"
      onClick={() => {
        setColor("green");
      }}
    >
     
    </button>
    <button
      className="btn blue"
      onClick={() => {
        setColor("blue");
      }}
    >
    
    </button>
    <button
      className="btn default"
      onClick={() => {
        setColor("white");
      }}
    >
      
    </button>
  </div>
  </>
  );
}
