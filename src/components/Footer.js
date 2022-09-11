import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import {AiFillGithub, AiOutlineTwitter, AiFillInstagram, AiFillFacebook, AiOutlineMail} from 'react-icons/ai'
import {FaLinkedinIn} from 'react-icons/fa'

function Footer() {
  
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Designed and Developed by RRK</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">

          <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/raja-ravi-kumar-16623320/"
                style={{color: 'white'}}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>

          <li className="social-icons">
              <a
                href="https://github.com/rajaravikumar/"
                style={{color: 'white'}}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>

            <li className="social-icons">
              <a
                href="https://www.facebook.com/rajaravikumar/"
                style={{color: 'white'}}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillFacebook />
              </a>
            </li>

            <li className="social-icons">
              <a
                href="https://www.instagram.com/iamrajaravikumar/"
                style={{color: 'white'}}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillInstagram />
              </a>
            </li>

            <li className="social-icons">
              <a
                href="https://twitter.com/ravikumar_raja/"
                style={{color: 'white'}}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiOutlineTwitter />
              </a>
            </li>

            <li className="social-icons">
              <a
                href="mailto:ravikumar3210@gmail.com"
                style={{color: 'white'}}
                rel="noopener noreferrer"
              >
                <AiOutlineMail />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  )
}

export default Footer
