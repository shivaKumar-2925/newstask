import React from 'react'
import NewsData from './NewsData'
function AllNews() {
  return (
    <div>
  
      <div className="container-fluid" style={{display:'flex',width:'100vw'}}>

{NewsData.map(ele=>{
  return(
   <div className="card" style={{width:'55%',height:'15%',padding:'20px',margin:'20px',border:'2px solid black' }}>
   <div className="card-body">
     <h3 className="card-title">{ele.newsHeading}</h3>

     <p className="card-text">{ele.newsBody}</p>
     <p>--<i>{ele.newsAuthor}</i></p>
  
   </div>
 </div>
  )
})}


</div>
     </div>
  
   
  

     )
}

export default AllNews