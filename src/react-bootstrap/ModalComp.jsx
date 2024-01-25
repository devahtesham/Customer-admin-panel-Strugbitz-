import Modal from 'react-bootstrap/Modal';
import './Modal.css'
import { Col, Form, InputGroup, Row } from 'react-bootstrap';
import { useState } from 'react';
import { AddNewUser } from '../store/Actions/users';
import { useDispatch } from 'react-redux';

function ModalComp(props) {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [selectedImage, setSelectedImage] = useState("");

    const dispatch = useDispatch()

    const imageChangeHandler = (e) => {
        const file = e.target.files[0];

        if (file) {
            const reader = new FileReader();

            reader.onloadend = () => {
                setSelectedImage(reader.result);
            };

            reader.readAsDataURL(file);
        }
    };

    // add new customer handling func
    const addCustomerHandler = () => {
        if (!name || !email || !selectedImage) {
            alert("Required Fields are missing !")
            return
        }

        // transforming user full name
        const fname = name.split(" ")[0]
        const lname = name.split(" ")[1]

        let objToSend = {
            email: email,
            first_name: fname,
            last_name: lname ? lname : "",
            avatar: selectedImage,
        }

        // calling add customer action
        dispatch(AddNewUser(objToSend))


        props.addModalCloseHandler()
        setName("");
        setEmail("");
        setSelectedImage("")
    }

    return (
        <>
            {
                !props.isUpdatedCall ? 
                (
                    <Modal show={props.show} onHide={props.onHide}>
                        <Modal.Header closeButton className='customer-modal-header flex-column-reverse fw-bolder'>
                            <h3 className='m-0 text-uppercase text-white pt-4'>Add New Customer</h3>
                        </Modal.Header>
                        <Row className='justify-content-center my-5'>
                            <Col xs={11}>
                                <InputGroup className="mb-3">
                                    <Form.Control
                                        placeholder="Customer Name"
                                        aria-label="Username"
                                        aria-describedby="basic-addon1"
                                        onChange={(e) => setName(e.target.value)}
                                        value={name}
                                    />
                                </InputGroup>
                                <InputGroup className="mb-3">
                                    <Form.Control
                                        placeholder="Email"
                                        aria-label="Username"
                                        aria-describedby="basic-addon1"
                                        onChange={(e) => setEmail(e.target.value)}
                                        value={email}
                                    />
                                </InputGroup>
                                <div>
                                    <label htmlFor="files" className="upload-btn">Upload a Photo</label>
                                    <input id="files" style={{ visibility: 'hidden' }} type="file" onChange={imageChangeHandler} />
                                </div>
                                <div className='mt-4'>
                                    <button className='custom-btn btn-main w-100' onClick={addCustomerHandler}>Add Customer</button>
                                </div>
                            </Col>
                        </Row>
                    </Modal>
                )
                :
                (
                    <Modal show={props.show} onHide={props.onHide}>
                        <Modal.Header closeButton className='customer-modal-header flex-column-reverse fw-bolder'>
                            <h3 className='m-0 text-uppercase text-white pt-4'>Edit Customer</h3>
                        </Modal.Header>
                        <Row className='justify-content-center my-5'>
                            <Col xs={11}>
                                <InputGroup className="mb-3">
                                    <Form.Control
                                        placeholder="Customer Name"
                                        aria-label="Username"
                                        aria-describedby="basic-addon1"
                                        onChange={(e) => setName(e.target.value)}
                                        value={name}
                                    />
                                </InputGroup>
                                <InputGroup className="mb-3">
                                    <Form.Control
                                        placeholder="Email"
                                        aria-label="Username"
                                        aria-describedby="basic-addon1"
                                        onChange={(e) => setEmail(e.target.value)}
                                        value={email}
                                    />
                                </InputGroup>
                                <div>
                                    <label htmlFor="files" className="upload-btn">Upload a Photo</label>
                                    <input id="files" style={{ visibility: 'hidden' }} type="file" onChange={imageChangeHandler} />
                                </div>
                                <div className='mt-4'>
                                    <button className='custom-btn btn-main w-100' onClick={addCustomerHandler}>Add Customer</button>
                                </div>
                            </Col>
                        </Row>
                    </Modal>
                )
            }
        </>
    );
}

export default ModalComp;