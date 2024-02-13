import React, { useState } from 'react';
import { Container, Row, Col, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const HeaderBanner = () => {
    const [modal, setModal] = useState(false);
    const [message, setMessage] = useState('');

    const toggle = () => setModal(!modal);

    const handleButtonClick = () => {
        setMessage("Can't wait to show you your gifts and go on our date tomorrow");
        toggle();
    };

    return (
        <div className="static-slider-head">
            <Container>
                <Row className="justify-content-center">
                    <Col lg="8" md="6" className="align-self-center text-center">
                        <h1 className="title text-black">Emily, Will You Be My Valentine?</h1>
                        <h4 className="subtitle text-white font-light">Please say yes!!!</h4>
                        <Button onClick={handleButtonClick} className="btn-custom btn-md m-t-30 btn-info-gradiant font-14">Yes</Button>
                    </Col>
                </Row>
            </Container>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>I love you cutie!</ModalHeader>
                <ModalBody className="text-black">{message}</ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={toggle}>Close</Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default HeaderBanner;
