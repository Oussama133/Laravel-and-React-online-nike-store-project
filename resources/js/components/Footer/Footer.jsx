import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebook, FaInstagram, FaTwitter, FaTiktok } from 'react-icons/fa';
import './Footer.css';
import nikeFooter from './nike.footer.jpeg';
import location from './location.jpg'
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="footer">
      <Container className="md-container container">
        <Row>
          <Col md={3} sm={6}>
            <h5>À PROPOS DE NIKE</h5>
            <ul className="list-unstyled">
              <li><Link to  ="#">Actualités</Link></li>
              <li><Link to="#">Carrières</Link></li>
              <li><Link to="#">Investisseurs</Link></li>
              <li><Link to="#">Développement durable</Link></li>
            </ul>
          </Col>
          <Col md={3} sm={6}>
            <h5>AIDE</h5>
            <ul className="list-unstyled">
              <li><Link to="#">Statut de commande</Link></li>
              <li><Link to="#">Expédition et livraison</Link></li>
              <li><Link to="#">Retours</Link></li>
              <li><Link to="#">Modes de paiement</Link></li>
              <li><Link to="#">Nous contacter</Link></li>
              <li><Link to="#">Aide - Codes promo Nike</Link></li>
            </ul>
          </Col>
          <Col md={3} sm={6}>
            <h5>REJOINS-NOUS</h5>
            <ul className="list-unstyled">
              <li><Link to="#">Nike App</Link></li>
              <li><Link to="#">Nike Run Club</Link></li>
              <li><Link to="#">Nike Training Club</Link></li>
              <li><Link to="#">SNKRS</Link></li>
            </ul>
          </Col>
          <Col md={3} sm={6}>
            {/* <h5>Paramètres des cookies</h5> */}
            <ul className="list-unstyled d-flex justify-content-end mx-auto social-icons">
              <li><Link to="https://www.facebook.com/nike/"><FaFacebook size={40} /></Link></li>
              <li><Link to="https://www.instagram.com/nike/"><FaInstagram size={40} /></Link></li>
              <li><Link to="https://twitter.com/nike"><FaTwitter size={40} /></Link></li>
              <li><Link to="https://www.tiktok.com/@nike"><FaTiktok size={40} /></Link></li>

         
            </ul>
            <Link to="/">
            <img src={nikeFooter} alt="My Image" className="d-flex justify-content-end mx-auto mt-5 myImage" />
            </Link>
          </Col>

        </Row>
        <Row className="links_">
          {/* <Col md={3} className="text-center">
            <p>&copy; 2023 Nike, Inc. Tous droits réservés</p>
          </Col> */}

          <Col md={5} className="text-left myColClass">
            <Link to="#">
              <img src={location} alt="My Image" className="location" />
              <span className="maroc">Kenitra</span>
            </Link>
            <span> &copy; 2023 Nike Maroc, Inc. Tous droits réservés</span>
          </Col>

          <Col md={4}>
            <Link to="#" className="text-right hover">
              Politique en matière de confidentialité et de cookies
            </Link>
          </Col>

          <Col md={3}>
            <Link to="#" className="text-right hover">
              Paramètres des cookies
            </Link>
          </Col>

        </Row>

      </Container>
    </footer>
  );
};

export default Footer;

