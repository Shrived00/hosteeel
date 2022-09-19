import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Footer.css'

function Footer() {
    return (

        <Container className='footer__css'>
            <Row>
                <Col className='p-3 border border-2'>
                    <h4>Main Pages</h4>
                    <div>Home</div>
                    <div>HA Council</div>
                    <div>Alumni Affairs</div>
                    <div>International Relation</div>
                    <div>Hospital</div>
                </Col>
                <Col className='p-3 border border-2'>

                    <h4>Others</h4>
                    <div>Hostels</div>
                    <div>Hall Manager Duties</div>
                    <div>Tenders</div>
                    <div>Food Outlet ratings</div>
                    <div>Security Guidelines</div>
                </Col>
                <Col className='p-3 border border-2'>

                    <h4>Others</h4>
                    <div>Hostels</div>
                    <div>Hall Manager Duties</div>
                    <div>Tenders</div>
                    <div>Food Outlet ratings</div>
                    <div>Security Guidelines</div>
                </Col>


                <Col className='text-center my-auto'>
                    <h3>sdyugh</h3>
                    <div><img src='https://gymkhana.iitb.ac.in/hostels/HA-logo.jpg' width={100}></img></div>
                </Col>

            </Row>
            <div>© 2022 Hostel Affairs Council, Inc. All rights reserved.</div>


        </Container >

    )

}

export default Footer;
