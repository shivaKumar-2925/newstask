import React from 'react'
import {Routes,Route} from 'react-router-dom'
import AllNews from './AllNews'
import CreateNews from './CreateNews'
import DeleteNews from './DeleteNews'
import UniqNews from './UniqNews'
import UpdateNews from './UpdateNews'
import {Link} from 'react-router-dom'

function App() {
  return (
    <div>
        <div id="linksall">
 <div><Link to="/alldata">AllNews</Link></div>
 <div> <Link to="/uniqnews">Uniq_News</Link></div>
  <div><Link to="/createnews">Create-News</Link></div>
 <div><Link to="/updatenews">Update-News</Link></div>
<div> <Link to="/deletenews">Delete News</Link></div>
</div> 
      <div>
      <Routes>
        {/* <Route path="/" element={<App/>} /> */}
        <Route path="/alldata" element={<AllNews/>} />
        <Route path="/uniqnews" element={<UniqNews/>} />
        <Route path="/createnews" element={<CreateNews/>} />
        <Route path="/updatenews" element={<UpdateNews/>} />
        <Route path="/deletenews" element={<DeleteNews/>} />
      </Routes>
     </div>
    </div>
  )
}

export default App