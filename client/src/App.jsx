import { BrowserRouter, Route, Routes } from "react-router-dom";
import Insert from "./Pages/Insert";
import Layout from "./Layout";
import Display from "./Pages/Display";
import Search from "./Pages/Search";
import Update from "./Pages/Update";
import Edit from "./Pages/Edit";



const App=()=>{
  return(
    <>
    
    <h1>This  is app page</h1>
    

    <BrowserRouter>
    <Routes>
      <Route  path="/"  element={<Layout/>}>
      <Route path="insert"  element={<Insert/>}/>
      <Route path="display"  element={<Display/>}/>
      <Route path="search"  element={<Search/>}/>
      <Route path="update"  element={<Update/>}/>
      <Route path="edit/:stuid"  element={<Edit/>}/>

      </Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}


export default App;