
import {React , useState , useEffect} from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {   faFacebookF, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import logo from"../assets/img/logo3.png";
import  {HashLink}  from 'react-router-hash-link';
import { BrowserRouter as Router } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";



export const NavBar = () => {
  const [Scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])
  const [ActiveLink,setActiveLink]=useState("Home")

  return (
      <Router>
      <Navbar expand="sm" sticky="top" className={Scrolled ? " Scrolled " : "navbar "}>
        <Container>
          <Navbar.Brand href="/" className="brand">
            <img src={logo} alt="Logo" className="roundedCircle logo-img"/> 
            <span className="text-light my-0">WELCOME</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" >
            <span className="navbar-toggler-icon  "></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar " className=" py-2 my-0 nav-collapse  bg-sm-info">
           
            <Nav className="ms-auto d-flex ">
              <Nav.Link href="#home" className={ActiveLink === 'Home' ? 'active navbar-link text-light' : 'navbar-link'} onClick={() => setActiveLink('Home')}> Home</Nav.Link>
              <Nav.Link href="#skills" className={ActiveLink === 'Skills' ? 'active navbar-link text-light' : 'navbar-link'} onClick={() => setActiveLink('Skills')} >Skills</Nav.Link>
              <Nav.Link href="#projects" className={ActiveLink === 'Projects' ? 'active navbar-link text-light' : 'navbar-link'} onClick={() => setActiveLink('Projects')}>Projects</Nav.Link>
              </Nav>  
              <div className="navbar-icons d-flex"> 
              <a href="https://www.facebook.com/shadymostafa.1979" className="navIcon align-content-center"><FontAwesomeIcon icon={faFacebookF}  style={{color: "#6f86ae",}} /></a>
              <a href="https://www.instagram.com/shadymostafa.1979" className="navIcon align-content-center"><FontAwesomeIcon icon={faInstagram}  style={{color: "#6f86ae",}} /></a>  
              <a href="https://www.linkedin.com/feed/" className="navIcon align-content-center"><FontAwesomeIcon icon={faLinkedinIn}  style={{color: "#6f86ae",}} /></a> 
             </div>
              <HashLink to='#connect'>
                <button className=" navBtn mx-3">Let’s Connect</button>
              </HashLink>
            
           
            
          </Navbar.Collapse>
          </Container>
      </Navbar>
    </Router>
    )

}