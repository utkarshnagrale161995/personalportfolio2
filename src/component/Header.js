import React from 'react';
import { Navbar, Nav} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Header(){
    let navLinkStyle=({isActive})=>{
        return{
            fontWeight: isActive ? 'bold' : 'normal',
            color: isActive ? 'Red' : 'Black',
            textDecoration: isActive ? 'none' : 'underline'
        }
    }

    return(
    
  
    <Navbar className="navbar navbar-expand-sm navbar-light bg-warning" expand="lg">
            <Navbar.Brand href="/" className="navbar-brand test-dark m-2"><b>Utkarsh.WebDev</b></Navbar.Brand>

            <Navbar.Toggle aria-controls="basic-navbar-nav" />

            <Navbar.Collapse className='collapse navbar-collapse justify-content-end' id="basic-navbar-nav">
                <Nav activeKey="/">
                    <Nav.Link  href="/personalportfolio2"><b>Home</b></Nav.Link>
                    <Nav.Link  href="/about"><b>About Me</b></Nav.Link>
                    <Nav.Link  href="/academics"><b>Academics</b></Nav.Link>
                    <Nav.Link  href="/professional"><b>Professional</b></Nav.Link>
                    <Nav.Link  href="/certification"><b>Certification</b></Nav.Link>
                    <Nav.Link  href="/project"><b>Project</b></Nav.Link>
                    <Nav.Link  href="/newcontact"><b>Contact</b></Nav.Link>
                </Nav>
            </Navbar.Collapse>
    </Navbar>
    )
}
export default Header;
