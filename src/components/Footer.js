import { Container, Row, Col } from "react-bootstrap";


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {   faFacebookF, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import logo from"../assets/img/logo4.png";
import { Mail } from "./Mail";

export const Footer = () => {
  return (
    <footer className="footer">
       
         <Container>
           <Row className="align-items-center">
             
             <Mail/>
                <Col size={12} sm={6}>
               <img src={logo} alt="Logo" className="footerLogo "/>
             </Col>
             <Col size={12} sm={6} className="text-center ">
             <div className="navbar-icons d-flex justify-content-center"> 
               <a href="https://www.facebook.com" className="navIcon align-content-center"><FontAwesomeIcon icon={faFacebookF}  style={{color: "#6f86ae",}} /></a>
               <a href="https://www.facebook.com" className="navIcon align-content-center"><FontAwesomeIcon icon={faInstagram}  style={{color: "#6f86ae",}} /></a>  
               <a href="https://www.facebook.com" className="navIcon align-content-center"><FontAwesomeIcon icon={faLinkedinIn}  style={{color: "#6f86ae",}} /></a> 
              </div>
               <p> --Copyrights 2023--  All Rights Reserved here By Eng. Shimaa Hussien El Said </p>
             </Col>
           </Row>
         </Container> 
      
      </footer>
  )
}