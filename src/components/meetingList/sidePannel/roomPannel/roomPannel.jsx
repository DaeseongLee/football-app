import React, { useState } from 'react';
import styles from './roomPannel.module.css';
import { IoIosCreate } from 'react-icons/io';
import { FaPlus } from 'react-icons/fa';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Col from 'react-bootstrap/Col';

const RoomPannel = (props) => {
    const [validated, setValidated] = useState(false);
    const [show, setShow] = useState(false);
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [location, setLocation] = useState("");
    const [number, setNumber] = useState("");
    const [account, setAccount] = useState("");

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        console.log("form", form);
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };
    return (
        <div className={styles.roomPannel}>
            <IoIosCreate style={{ marginRight: '0.5em' }} />
            <span>MAKE ROOM {" "}</span>
            <FaPlus onClick={handleShow} style={{ cursor: 'pointer' }} />

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Create a room</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form noValidate validated={validated} onSubmit={handleSubmit}>
                        <Form.Row>
                            <Form.Group as={Col} md="5" controlId="validationDate">
                                <Form.Label>Date</Form.Label>
                                <InputGroup hasValidation>
                                    <Form.Control
                                        type="date"
                                        placeholder="Username"
                                        aria-describedby="inputGroupPrepend"
                                        required
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        Please enter a date

                                    </Form.Control.Feedback>
                                </InputGroup>
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col} md="5" controlId="validationCustom03">
                                <Form.Label>Start Time</Form.Label>
                                <Form.Control type="time" placeholder="Time" required />
                                <Form.Control.Feedback type="invalid">
                                    Please enter a Start Time
                              </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="5" controlId="validationCustom03">
                                <Form.Label>End Time</Form.Label>
                                <Form.Control type="time" placeholder="Time" required />
                                <Form.Control.Feedback type="invalid">
                                    Please enter a End Time
                              </Form.Control.Feedback>
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col} md="5" controlId="validationCustom04">
                                <Form.Label>Location</Form.Label>
                                <Form.Control type="text" placeholder="Location" required />
                                <Form.Control.Feedback type="invalid">
                                    Please enter a Location
                              </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="2" controlId="validationCustom05">
                                <Form.Label>Number</Form.Label>
                                <Form.Control type="text" placeholder="Number" required />
                                <Form.Control.Feedback type="invalid">
                                    Please enter a Number
                            </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="4" controlId="validationCustom05">
                                <Form.Label>Account</Form.Label>
                                <Form.Control type="text" placeholder="Account" required />
                                <Form.Control.Feedback type="invalid">
                                    Please enter a Account
                            </Form.Control.Feedback>
                            </Form.Group>
                        </Form.Row>
                    </Form>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                        </Button>
                    <Button variant="primary" onClick={handleSubmit}>
                        Create
                        </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
};

export default RoomPannel;
