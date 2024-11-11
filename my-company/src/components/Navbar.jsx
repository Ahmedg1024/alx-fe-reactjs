import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <nav style={{backgroundColor:'yellow', display:'flex',justifyContent:'center'}}>

    <NavLink style={{ textDecoration:'none', color:'red',margin:'25px'}} to="/">Home_Page</NavLink>
    <br/>
    <NavLink style={{ textDecoration:'none', color:'Gray',margin:'25px'}} to="/About">About_Page</NavLink> 
    <br/>
    <NavLink style={{ textDecoration:'none', color:'blue',margin:'25px'}} to='/Services'>Services_Page</NavLink> 
    <br/>
    <NavLink style={{ textDecoration:'none', color:'green',margin:'25px'}} to='/Contact'>Contact_Page</NavLink> 
    
    </nav>
  );
}

export default Navbar