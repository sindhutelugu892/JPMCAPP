import {Link,Outlet} from 'react-router-dom'
function TECHNOLOGIES(){
return(
<div style={{backgroundImage:"url(https://cdn1.vectorstock.com/i/1000x1000/87/75/light-abstract-background-business-template-vector-4358775.jpg)",backgroundRepeat:"no-repeat",backgroundSize:"cover",width: '100vw',height: '100vh'}}>
<nav className="navbar navbar-expand-lg navbar-light bg-light" style={{backgroundColor:"black"}}>
<div className="container-fluid">
<div className="collapse navbar-collapse justify-content-center" id="navbarNavDropdown">
<ul className="navbar-nav ">
<li className="nav-item ms-5 me-5 fs-1">
     <Link className="nav-link active text-danger fw-bold" to='/'>Html</Link>
</li>
   
   <li className="nav-item ms-5 me-5 fs-1">
     <Link className="nav-link active text-danger fw-bold" to='javascript'>JavaScript</Link>
</li>

</ul>
</div>
</div>
</nav>
<Outlet />
</div>
)
}
export default TECHNOLOGIES