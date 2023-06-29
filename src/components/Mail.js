
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Col, Row } from 'react-bootstrap';



export const Mail = () => {
  
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_rxngmcq', 'template_q51995l', form.current, '_gp5ZLpk9Vb-Ue1bX')
      .then((result) => (<p className='status'>{result.text}</p>),
     (error) => {
          console.log(error.text);
      });
  };
    return (
        <div>
            <Col lg={12}>
        <div className="mail-box  slideInUp">
          <Row>
            <Col  lg={4} >
              <h3>See My Projects At Once & leave Here Your E-mail Address</h3>
              </Col>
            <Col lg={8} >
              <form ref={form} onSubmit={sendEmail}>
                <Row  className="new-mail-box ">
                <Col xs={9} md={9} xl={8}>
                  <input type="email" name="email" placeholder="Email Address"/>
                  
                </Col>  
                  <Col xs={3} md={3} xl={4}>  
                  <button  type="submit" onClick={()=>(<span className='status'>sending</span>) } >Submit</button>
                  </Col> 
                </Row>
              </form>
            </Col>
          </Row>
        </div>
      </Col>
        </div>
    )
    }
   