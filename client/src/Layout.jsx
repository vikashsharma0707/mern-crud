import {Link, Outlet}from "react-router-dom"


const Layout=()=>{
    return(
        <>
        
        <h1>This is layout page</h1>

        {/* <link  to="Insert">Insert</link>
        <link  to="display">Display</link>
        <link  to="Search">Search</link>
        <link  to="update">Update</link> */}
        <Link   to="insert">Insert</Link>
        <Link   to="display">Display</Link>
        <Link   to="search">Search</Link>
        <Link   to="update">Update</Link>
        <Link   to="registration">Registration</Link>
        <Link   to="login">Login</Link>
        <Link   to="logout">Logout</Link>

        <Outlet/>
        </>
    )
}


export default Layout;