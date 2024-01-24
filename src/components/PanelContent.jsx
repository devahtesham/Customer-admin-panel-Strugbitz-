import React, { useState } from 'react'
import "./PanelContent.css"
import { Col, Container, Row, Table } from 'react-bootstrap'
import { IoIosAdd } from "react-icons/io";
import { FaSort } from "react-icons/fa";
import customerImg from "../assets/img/customer-img.png"
import { GiHamburgerMenu } from "react-icons/gi";
import {ModalComp,DeleteModalComp} from '../react-bootstrap';
import DeleteModal from '../react-bootstrap/DeleteModal';

const PanelContent = () => {
  const [show, setShow] = useState(false);
  const [showDelModal, setShowDelModal] = useState(false);


  // for add modal
  const addModalCloseHandler = () => setShow(false);
  const addModalShowHandler = () => setShow(true);

  // for delete modal
  const deleteModalCloseHandler = () => setShowDelModal(false);
  const deleteModalShowHandler = () => setShowDelModal(true);

  const editCustomerHandler = ()=>{
    addModalShowHandler()
  }
  const deleteCustomerHandler = ()=>{
    deleteModalShowHandler()
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

                  <Row className='customer-listing py-2 rounded-2 bg-white align-items-center mt-4 overflow-auto'>
                    <Col md={3} xs={4} className='text-center'>
                      <div className='d-flex align-items-center justify-content-sm-start justify-content-center gap-5'>
                        <div className="customer-img d-sm-block d-none">
                          <img src={customerImg} alt="customer-img" className='customer-img w-100' />
                        </div>
                        <span>001</span>
                      </div>
                    </Col>
                    <Col md={3} xs={4} className='text-center'>
                      <div className="customer-name" >
                        <span>Jordan Joseph</span>
                      </div>
                    </Col>
                    <Col md={6} xs={4}>
                      <div className="customer-email d-flex align-items-center justify-content-between flex-wrap" >
                        <span>randomemail@gmail.com</span>
                        <div className="edit-del-buttons d-flex gap-3 align-items-center">
                          <button onClick={editCustomerHandler} className='custom-btn custom-btn-sm btn-sm-1'>Edit</button>
                          <button onClick={deleteCustomerHandler} className='custom-btn custom-btn-sm btn-sm-2'>Delete</button>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </div>
              </div>
            </Col>
          </Row>
        </section>

      </Container>

      {/* Add Modal */}
      <ModalComp show={show} onHide={addModalCloseHandler} />

      {/* Delete Modal */}
      <DeleteModal show={showDelModal} onHide={deleteModalCloseHandler} />
    </>
  )
}

export default PanelContent