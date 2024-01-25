import Modal from 'react-bootstrap/Modal';
import './Modal.css'
import { Col, Form, InputGroup, Row } from 'react-bootstrap';
import { RiDeleteBin6Fill } from "react-icons/ri";
import { useDispatch } from 'react-redux';
import { DeleteUser } from '../store/Actions/users';

function DeleteModal(props) {
    const dispatch = useDispatch();

    // for delete user
    const deleteCustomerHandler = ()=>{
        dispatch(DeleteUser(props.currentEl));
        props.onHide()
    }

    return (
        <>
            <Modal show={props.show} onHide={props.onHide}>
                <Modal.Header closeButton className=' border-0'></Modal.Header>
                <Row className='justify-content-center my-5 mt-3'>
                    <Col xs={11}>
                        <div className='delete-content'>
                            <div className='d-flex flex-column align-items-center'>
                                <span><RiDeleteBin6Fill size={60} className='text-danger' /></span>
                                <h5 className='my-3 fw-bolder'>Are you sure ?</h5>
                                <p className='text-center'>Do you really want to delete this customer? <br /> This process can not be undone.</p>
                            </div>
                        </div>
                        <div className="edit-del-buttons d-flex gap-3 align-items-center">
                            <button className='custom-btn custom-btn-sm btn-sm-3 w-50' onClick={props.onHide}>Cancel</button>
                            <button className='custom-btn custom-btn-sm bg-danger w-50 text-white' onClick={deleteCustomerHandler}>Delete</button>
                        </div>
                    </Col>
                </Row>
            </Modal>
        </>
    );
}

export default DeleteModal;