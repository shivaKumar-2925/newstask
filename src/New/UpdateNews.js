import React from 'react'
import { useState } from 'react'
import newsData from './NewsData'

function UpdateNews() {
  const [update, setUpdate] = useState([])
  const HandleUpdateNews=()=>{
    var updateValue=document.getElementById("myUpdate").value
    var UpdateData=newsData.filter(ele=>{
      return updateValue==ele.NewsId
    })
    setUpdate(UpdateData)
  }
  return (
    <div>
      <h2>
        Update news
      </h2>
      <input type="text" id="myUpdate"></input><button onClick={HandleUpdateNews}>Update</button>
    {
      update.map(ele=>{
        return(
        <>
          <div><input type="text" value={ele.NewsId}  /></div>
          <div><input type="text" value={ele.newsHeading} /></div>
          <div><input type="text" value={ele.newsBody} /></div>
          <div><input type="text" value={ele.newsBody} /></div>
          </>
                  )
      })
    }
    </div>
  )
}

export default UpdateNews