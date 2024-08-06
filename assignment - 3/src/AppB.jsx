// without generate button

import { useState, useEffect, useMemo } from "react";
import "./App.css";

function AppB() {
  const [wordCount, setWordCount] = useState(0);
  const [paragraph, setParagraph] = useState("");

  // can use arrays of Strings instead,
  // Sample paragraph to split into words
  const para =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit Optio veniam tempore rerum libero voluptatum consequatur Optio harum voluptatum ducimus ipsa voluptates eos obcaecati provident distinctio";

  // split the paragraph into an array of words
  // const words = useMemo(()=> para.split(' ') ,[para]);
  const words = useMemo(() => {
    return para.split(" ");
  }, [para]);

  const generateParagraph = () => {
    if (wordCount > 0) {
      let temp = [];
      for (let index = 0; index < wordCount; index++) {
        let random = Math.floor(Math.random() * words.length);
        temp.push(words[random]);
      }
      return setParagraph(temp.join(" "));
    }
    return setParagraph("");
  };

  useEffect(() => {
    generateParagraph();
  }, [wordCount]);

  
  function handelInputChange(e) {
    const value = parseInt(e.target.value, 10);
    if (!isNaN(value) && value < 0) {
      setWordCount(0);
    } else {
      setWordCount(value);
      // can be used like this without use effect //generateParagraph();
    }
  }

  return (
    <div className="container">
      <h2>PARAGRAPH GENERATOR</h2>
      <div className="input-container">
        <input
          type="text"
          placeholder="ENTER NO OF WORD TO BE GENERATED"
          onChange={handelInputChange}
        />
      </div>
      <div
        className={`paragraph-container ${
          paragraph.length === 0 ? "hidden" : ""
        }`}
      >
        {paragraph}
      </div>
    </div>
  );
}

export default AppB;
