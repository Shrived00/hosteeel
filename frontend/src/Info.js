import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Info() {
    return (
        <Container fluid>
            <Row>
                <Col className=' text-center border border-5 mt-3 py-5'> <img src='https://secureservercdn.net/160.153.137.40/xkt.381.myftpupload.com/wp-content/uploads/oldupload/cropped-New-VJTI-Logo_1-1-52x75.jpg'></img>  </Col>
            </Row>
            <Row>
                <Col className=' text-center border border-5'><h1>History</h1></Col>

            </Row>
            <Row>
                <Col className=' text-center border border-5 p-3'><p>"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"</p></Col>

            </Row>
        </Container>
    )
}

export default Info;