import React from 'react'
import { useState } from 'react'
import newsData from './NewsData'

function DeleteNews() {
  const [deleteVal, setDeleteVal] = useState([])

const handleDelete=()=>{
  var deleteId=document.getElementById('mydeleteId').value
  var deleteData=newsData.filter(ele=>{
    return ele.NewsId==deleteId
  })
  alert(`the id: '${deleteId}' has dleted`)
  setDeleteVal(deleteData)
  console.log(deleteVal)
}
  return (
    <div>
<input type="text" id="mydeleteId"/> <button onClick={handleDelete}>Delete</button>

    </div>
  )
}

export default DeleteNews