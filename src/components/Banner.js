
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/shimaBanner.png";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import Typewriter from "typewriter-effect";
import Image from 'react-bootstrap/Image';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';

export const Banner = () => {
 

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={8}>
            <div className="animate__animated animate__fadeIn">
              
                <h2 ><Badge bg="light" text="info">Welcome All In My Portfolio </Badge></h2>
                
                <h1>{`Hi! I'm Shimaa Hussien El Said , `} 
                <span>
                <Typewriter
                  options={{
                    strings: [ "FrontEnd Developer","BackEnd Developer" , "Sisco Trainner "],
                    autoStart: true,
                    loop: true,
                    
                  }}
                  
                  />
                </span>
                </h1>
                

                  <p>Hello Everyone , I have one year of Experience in Web Development </p>
                  <Button variant="outline-info" text="light">Let’s Connect <ArrowRightCircle size={30} className="shape" /></Button>{' '}
                  
              </div>
            
          </Col>
          <Col xs={12} md={6} xl={4}>
            
              
                <div className="animate__animated animate__zoomIn">
                  
                  <Image src={headerImg} alt="Banner Img" roundedCircle />
                </div>
            
          </Col>
        </Row>
      </Container>
    </section>
  )
}