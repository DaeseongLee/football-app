import React, { useEffect, useState } from 'react';
import styles from './roomPannel.module.css';
import { useHistory } from 'react-router-dom';

import { IoIosCreate } from 'react-icons/io';
import { FaPlus } from 'react-icons/fa';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Col from 'react-bootstrap/Col';
import Room from './room';


const RoomPannel = ({ database }) => {
    const history = useHistory();
    const user = history.location.state.user;
    const [validated, setValidated] = useState(false);
    const [show, setShow] = useState(false);
    const [date, setDate] = useState("");
    const [sTime, setStime] = useState("");
    const [eTime, setEtime] = useState("");
    const [location, setLocation] = useState("");
    const [number, setNumber] = useState("");
    const [account, setAccount] = useState("");
    const [roomList, setRoomList] = useState({});
    const [currentRoom, setCurrentRoom] = useState({});
    const [activeChatroomId, setActiveChatroomId] = useState({});

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    useEffect(() => {
        const stopSync = database.syncRoomList(list => {
            setRoomList(list);
        });

        return () => stopSync;
    }, [])

    useEffect(() => {
        const first = Object.keys(roomList).reverse()[0];
        setCurrentRoom(roomList[first]);
        setActiveChatroomId(first);
        setHistory(roomList[first]);
    }, [roomList])

    const handleSubmit = (event) => {
        const form = event.currentTarget;

        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        setValidated(true);

        addRoom();
    };
    const addRoom = () => {
        const roomInfo = {
            date,
            sTime,
            eTime,
            location,
            number,
            account,
            createdBy: {
                name: user.displayName,
                img: user.photoURL
            }
        }
        database.createRoom(roomInfo);

        setShow(false);
        setDate("");
        setStime("");
        setEtime("");
        setLocation("");
        setNumber("");
        setAccount("");
    }

    const onChange = (room) => {
        setCurrentRoom(room);
        setActiveChatroomId(room.id);
        setHistory(room);
    }
    const setHistory = (room) => {
        history.push({
            state: {
                "user": user,
                "currentRoom": room
            }
        })
    }

    return (
        <div className={styles.roomPannel}>
            <div className={styles.logo}>
                <IoIosCreate style={{ marginRight: '0.5em' }} />
                <span className={styles.title}>MAKE ROOM {" "}</span>
                <FaPlus onClick={handleShow} style={{ cursor: 'pointer', marginLeft: '0.5em', color: 'white', fontSize: '0.8em' }} />
                <span className={styles.cnt}>
                    {roomList && Object.keys(roomList).length}
                </span>
            </div>
            <ul className={styles.roomList}>
                {roomList && Object.keys(roomList).reverse().map(key =>
                (
                    <Room key={key} room={roomList[key]} onChange={onChange} activeChatroomId={activeChatroomId} />
                ))
                }
            </ul>

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
                                        onChange={e => setDate(e.target.value)}
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
                                <Form.Control
                                    type="time"
                                    placeholder="Time"
                                    required
                                    onChange={e => setStime(e.target.value)} />
                                <Form.Control.Feedback type="invalid">
                                    Please enter a Start Time
                              </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="5" controlId="validationCustom03">
                                <Form.Label>End Time</Form.Label>
                                <Form.Control
                                    type="time"
                                    placeholder="Time"
                                    required
                                    onChange={e => setEtime(e.target.value)} />
                                <Form.Control.Feedback type="invalid">
                                    Please enter a End Time
                              </Form.Control.Feedback>
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col} md="4" controlId="validationCustom04">
                                <Form.Label>Location</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Location"
                                    required
                                    onChange={e => setLocation(e.target.value)} />
                                <Form.Control.Feedback type="invalid">
                                    Please enter a Location
                              </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="4" controlId="validationCustom05">
                                <Form.Label>Number</Form.Label>
                                <Form.Control
                                    type="number"
                                    placeholder="Number"
                                    required
                                    onChange={e => setNumber(e.target.value)} />
                                <Form.Control.Feedback type="invalid">
                                    Please enter a Number
                            </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="4" controlId="validationCustom05">
                                <Form.Label>Account</Form.Label>
                                <Form.Control
                                    type="account"
                                    placeholder="Account"
                                    required
                                    onChange={e => setAccount(e.target.value)} />
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
