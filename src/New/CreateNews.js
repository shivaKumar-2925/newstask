import React from "react";
import { useState } from "react";
import newsData from "./NewsData";

function CreateNews() {
  const [createState, setCreateState] = useState(newsData);
  const handleAre = (e) => {
    console.log("hiii")
    var myID = document.getElementById("ids").value;
    var myAuther = document.getElementById("auther").value;
    var myBody = document.getElementById("newsBody").value;
    var myHeading = document.getElementById("NewsHeading").value;
    setCreateState([
      ...createState,
      {
        NewsId: myID,
        newsHeading: myHeading,
        newsBody: myBody,
        newsAuthor: myAuther,
      },
    ]);
    console.log(createState)
   
  };

  return (
    <div>
 
      <input tupe="text" id="ids"></input>
      <input type="text" id="auther" />
      <input type="text" id="NewsHeading" />

      <textarea cols="30" rows="5" id="newsBody"></textarea>
      <button onClick={handleAre}>CreateNews</button>
    </div>
  );
}

export default CreateNews;
