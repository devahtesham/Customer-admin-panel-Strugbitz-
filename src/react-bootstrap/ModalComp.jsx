import Modal from 'react-bootstrap/Modal';
import './Modal.css'
import { Col, Form, InputGroup, Row } from 'react-bootstrap';

function ModalComp(props) {
    return (
        <>
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
                            />
                        </InputGroup>
                        <InputGroup className="mb-3">
                            <Form.Control
                                placeholder="Email"
                                aria-label="Username"
                                aria-describedby="basic-addon1"
                            />
                        </InputGroup>
                        <div>
                            <label htmlFor="files" className="upload-btn">Upload a Photo</label>
                            <input id="files" style={{ visibility: 'hidden' }} type="file" />
                        </div>
                        <div className='mt-4'>
                            <button className='custom-btn btn-main w-100'>Add Customer</button>
                        </div>
                    </Col>
                </Row>
            </Modal>
        </>
    );
}

export default ModalComp;