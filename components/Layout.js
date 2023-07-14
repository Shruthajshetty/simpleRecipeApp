import { Outlet, Link } from "react-router-dom";
const Layout = () => {
    return ( 
        <>
        <nav class="navbar navbar-expand-lg bg-body-primary" style={{backgroundColor:"#FFA500"}}>
  <div class="container-fluid">
  <img src="data:image/png;base64,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" alt="Logo" className="logo" />
    <a class="navbar-brand" href="#">Kitchen</a>
    
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/Menu">Menu</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/AboutUs">About Us</a>
        </li>
        {/* <li class="nav-item">
          <a class="nav-link" href="/Login">Login</a>
        </li> */}
        {/* <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li> */}
        {/* <li class="nav-item">
          <a class="nav-link disabled">Disabled</a>
        </li> */}
      </ul>
      <form class="d-flex" role="search">
        {/* <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button> */}
        {/* <Link to="/">Home</Link> */}
        <Link to="/Login">Login</Link>
        {/* <Link to="/Register">register</Link> */}
      </form>
    </div>
  </div>
</nav>



        {/* <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/login">login</Link>
            </li>
            <li>
              <Link to="/register">register</Link>
            </li>
          </ul>
        </nav> */}
  
        <Outlet />
      </>
     );
}
 
export default Layout;