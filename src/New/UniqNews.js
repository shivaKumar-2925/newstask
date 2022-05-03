import React from "react";
import newsData from "./NewsData";
import { useState } from "react";
function UniqNews() {
  const [UniqNewsState, setUniqNewsState] = useState([]);
  const handleChange = (e) => {
    var uniqDataVal = document.getElementById("MyUnq").value;
    console.log(uniqDataVal);
    var finaluniqData = newsData.filter((ele) => {
      return ele.NewsId == uniqDataVal;
    });
    setUniqNewsState(finaluniqData);
  };
  return (
    <div>
      <input type="text" id="MyUnq" onChange={handleChange} style={{margin:'40px 40px'}}></input >
      {UniqNewsState.map((ele) => {
        return (
          <div
            className="card"
            style={{
              width: "55%",
              height: "15%",
              padding: "20px",
              margin: "20px",
              border: "2px solid black",
            }}
          >
            <div className="card-body">
              <h3 className="card-title">{ele.newsHeading}</h3>

              <p className="card-text">{ele.newsBody}</p>
              <p>
                --<i>{ele.newsAuthor}</i>
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default UniqNews;
