import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <nav style={{textAlign:'center',padding:'3px 5px'}}>

    <NavLink style={{ textDecoration:'none', color:'red'}} to="/">Home_Page</NavLink>
    <br/>
    <NavLink style={{ textDecoration:'none', color:'Gray'}} to="/About">About_Page</NavLink> 
    <br/>
    <NavLink style={{ textDecoration:'none', color:'blue'}} to='/Services'>Services_Page</NavLink> 
    <br/>
    <NavLink style={{ textDecoration:'none', color:'yellow'}} to='/Contact'>Contact_Page</NavLink> 
    
    </nav>
  );
}

export default Navbar