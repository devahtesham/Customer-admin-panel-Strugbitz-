import React, { useEffect, useState } from 'react'
import "./PanelContent.css"
import { Col, Container, Row, Table, Form, InputGroup } from 'react-bootstrap'
import { IoIosAdd } from "react-icons/io";
import { FaSort } from "react-icons/fa";
import customerImg from "../assets/img/customer-img.png"
import { GiHamburgerMenu } from "react-icons/gi";
import { ModalComp, DeleteModalComp } from '../react-bootstrap';
import DeleteModal from '../react-bootstrap/DeleteModal';
import { useDispatch, useSelector } from 'react-redux';
import { AddNewUser, GetUsersListing } from '../store/Actions/users';
import Loader from '../Loader/Loader';
import '../react-bootstrap/Modal.css'


const PanelContent = () => {
  const [show, setShow] = useState(false);
  const [showDelModal, setShowDelModal] = useState(false);
  const [removeEl, setRemoveEl] = useState(null);
  const [isUpdatedCall,setIsUpdatedCall] = useState(false)

  // dispatching an action
  const dispatch = useDispatch();
  const { isLoading, users } = useSelector(state => state.GetUsersReducer);
  // console.log('users:- ',users)


  useEffect(() => {
    dispatch(GetUsersListing())
  }, [])

  // for add modal
  const addModalCloseHandler = () => setShow(false);
  const addModalShowHandler = () => setShow(true);

  // close delete modal
  const deleteModalCloseHandler = () => setShowDelModal(false);

  // open a delete modal
  const deleteModalShowHandler = (index) => {
    setShowDelModal(true)
    setRemoveEl(index)
  };

  // for edit button
  const editCustomerHandler = (index,user) => {
    addModalShowHandler()
  }

  // for delete button
  const deleteCustomerHandler = (index) => {
    
  }


  return (
    <>
      <Container fluid>
        <section className='panel-content'>
          <div className='panel-content-header bg-white py-2'>
            <Row className='justify-content-center'>
              <Col lg={11} className='d-flex align-items-center gap-sm-4'>
                <span className='d-lg-none d-block ps-2'><GiHamburgerMenu size={25} /></span>
                <h1 className='m-0 fw-bold py-3 text-lg-start text-center w-100'>CUSTOMERS</h1>
              </Col>
            </Row>
          </div>
          <Row className='justify-content-center mt-4 mb-3'>
            <Col lg={11}>
              <div className="customer-listing-container">
                <div className='add-customer-panel d-sm-block d-flex justify-content-center'>
                  <button onClick={addModalShowHandler} className='custom-btn btn-main d-flex align-items-center gap-3'><span><IoIosAdd size={22} /></span>Add New Customer</button>
                </div>
                <div className="customer-listing-table mt-sm-5 mt-4">

                  {/* customer listing header */}
                  <Row className='listing-header bg-green-light py-2 rounded-2 mb-4'>
                    <Col md={3} xs={4} className='text-center'>
                      <h6 className='m-0 fw-bolder'>Customer ID <span><FaSort size={14} /></span></h6>
                    </Col>
                    <Col md={3} xs={4} className='text-center'>
                      <h6 className='m-0 fw-bolder'>Customer Name <span><FaSort size={14} /></span></h6>
                    </Col>
                    <Col md={6} xs={4}>
                      <h6 className='m-0 fw-bolder'>Email<span><FaSort size={14} /></span></h6>
                    </Col>
                  </Row>


                  {/* customer listing */}
                  <div className='position-relative'>
                    {
                      isLoading ? <Loader /> : (
                        users.map((user,index) => (
                          <Row key={user.id} className='customer-listing py-2 rounded-2 bg-white align-items-center mt-4 overflow-auto'>
                            <Col md={3} xs={4} className='text-center'>
                              <div className='d-flex align-items-center justify-content-sm-start justify-content-center gap-5'>
                                <div className="customer-img d-sm-block d-none">
                                  <img src={user.avatar} alt="customer-img" className='customer-img w-100' />
                                </div>
                                <span>{user.id}</span>
                              </div>
                            </Col>
                            <Col md={3} xs={4} className='text-center'>
                              <div className="customer-name" >
                                <span>{user.first_name} {user.last_name}</span>
                              </div>
                            </Col>
                            <Col md={6} xs={4}>
                              <div className="customer-email d-flex align-items-center justify-content-between flex-wrap" >
                                <span>{user.email}</span>
                                <div className="edit-del-buttons d-flex gap-3 align-items-center">
                                  <button onClick={editCustomerHandler(index,user)} className='custom-btn custom-btn-sm btn-sm-1'>Edit</button>
                                  <button onClick={()=>deleteModalShowHandler(index)} className='custom-btn custom-btn-sm btn-sm-2'>Delete</button>
                                </div>
                              </div>
                            </Col>
                          </Row>
                        ))
                      )
                    }
                  </div>

                </div>
              </div>
            </Col>
          </Row>
        </section>

      </Container>

      {/* Add Modal */}
      <ModalComp
        show={show}
        onHide={addModalCloseHandler}
        addModalCloseHandler={addModalCloseHandler}
        isUpdatedCall={isUpdatedCall}
      />




      {/* Delete Modal */}
      <DeleteModal show={showDelModal} onHide={deleteModalCloseHandler} onDelete={()=>{
        deleteCustomerHandler(index)
      }} currentEl={removeEl} />
    </>
  )
}

export default PanelContent