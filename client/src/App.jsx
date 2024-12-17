import { BrowserRouter, Route, Routes } from "react-router-dom";
import Insert from "./Pages/Insert";
import Layout from "./Layout";
import Display from "./Pages/Display";
import Search from "./Pages/Search";
import Update from "./Pages/Update";
import Edit from "./Pages/Edit";
import Registration from "./Pages/Registration";
import Login from "./Pages/Login";
import Logout from "./Pages/Logout";
import ProductDetail from "./Pages/ProductDetail";



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
      <Route path="registration"  element={<Registration/>}/>
      <Route path="login"  element={<Login/>}/>
      <Route path="logout"  element={<Logout/>}/>
      <Route path="product/:mypro"  element={<ProductDetail/>}/>
      

      </Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}


export default App;