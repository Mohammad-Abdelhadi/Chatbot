import React, { useState } from "react";
import axios from "axios";
import "../src/App.css"
const ChatGPT = () => {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  const HTTP = "http://localhost:8080/chat"; // Update with your API endpoint URL

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(HTTP, { prompt })
      .then((res) => {
        setResponse(res.data);
        console.log(prompt);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handlePrompt = (e) => {
    setPrompt(e.target.value);
  };

  return (
    <div className="container container-sm p-1">
      <h1 className="title text-center text-darkGreen">ChatGPT API</h1>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-group" style={{display:"flex",flexDirection:"column"}}>
          <label htmlFor="">Ask questions</label>
          <input
            className="shadow-sm"
            type="text"
            placeholder="Enter text"
            value={prompt}
            onChange={handlePrompt}
          />
        </div>

      </form>
      <div className="bg-darkGreen mt-2 p-1 border-5">
        <p className="text-light"> {prompt ? prompt : `${prompt}`}
</p>
        <p className="text-light">
          {response ? response : "Ask me anything..."}
        </p>
      </div>
    </div>
  );
};

export default ChatGPT;
