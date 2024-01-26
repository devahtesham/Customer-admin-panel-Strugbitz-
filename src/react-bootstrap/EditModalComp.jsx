import Modal from 'react-bootstrap/Modal';
import './Modal.css'
import { Col, Form, InputGroup, Row, useAccordionButton } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { AddNewUser, UpdateUser } from '../store/Actions/users';
import { useDispatch } from 'react-redux';
import { errorNotify, successNotify } from '../Taostify/Toastify';

function EditModalComp(props) {
    const {user,index} = props.currentUser
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [selectedImage, setSelectedImage] = useState({});
    const dispatch = useDispatch()

    useEffect(() => {
        if(props.currentUser.user){
            setSelectedUserDetails()
        }
    }, [user])


    const imageChangeHandler = (e) => {
        const file = e.target.files[0];

        if (file) {
            const reader = new FileReader();

            reader.onloadend = () => {
                // console.log('file:- ', file)
                setSelectedImage({
                    url: reader.result,
                    name: file.name
                });
            };

            reader.readAsDataURL(file);
        }
    };

    // edit new customer handling func
    const editCustomerHandler = (index) => {
        if (!name || !email || !selectedImage.url) {
            errorNotify("Required Fields are missing !")
            return
        }

        // transforming user full name
        const fname = name.split(" ")[0]
        const lname = name.split(" ").pop()

        let updatedDataObj = {
            email: email,
            first_name: fname,
            last_name: lname ? lname : "",
            avatar: selectedImage.url,
            file_name: selectedImage.name,
            id:user.id,
            index
        }

        // calling edit  customer action
        dispatch(UpdateUser(updatedDataObj))
        successNotify("Customer Updated Sucessfully !")

        props.onHide()
        setName("");
        setEmail("");
        setSelectedImage({})

    }

    const setSelectedUserDetails = () => {
        let { email, first_name, last_name, avatar, file_name } = user;
        // console.log('fileName:- ',fileName)
        setName(`${first_name} ${last_name}`);
        setEmail(email);
        setSelectedImage({
            url: avatar,
            name: file_name
        })

    }

    return (
        <>
            <Modal show={props.show} onHide={props.onHide}>
                <Modal.Header closeButton className='customer-modal-header flex-column-reverse fw-bolder'>
                    <h3 className='m-0 text-uppercase text-white pt-4'>
                        Edit Customer

                    </h3>
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
                        <div className='d-flex gap-3'>
                            <label htmlFor="files" className="upload-btn">Upload a Photo</label>
                            <input id="files" style={{ display: 'none' }} type="file" onChange={imageChangeHandler} />
                            {selectedImage.name && (
                                <p>{selectedImage.name}</p>
                            )}
                        </div>
                        <div className='mt-4'>
                            <button className='custom-btn btn-main w-100 text-uppercase' onClick={()=>editCustomerHandler(index)}>
                                Edit Customer
                            </button>
                        </div>
                    </Col>
                </Row>
            </Modal>
        </>
    );
}

export default EditModalComp;