import React, { useEffect, useState } from 'react'
import "./PanelContent.css"
import { Col, Container, Row } from 'react-bootstrap'
import { IoIosAdd } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import { DeleteModalComp, AddModalComp, EditModalComp } from '../react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { GetUsersListing, OpenSideBar, SortByEmail, SortById, SortByName } from '../store/Actions/users';
import Loader from '../Loader/Loader';
import '../react-bootstrap/Modal.css'
import SortFilterComp from '../react-bootstrap/SortFilterComp';
import { FaSortAlphaDown } from "react-icons/fa";
import { FaSort } from "react-icons/fa";
import { successNotify } from '../Taostify/Toastify';



const PanelContent = () => {
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDelModal, setShowDelModal] = useState(false);
  const [removeEl, setRemoveEl] = useState(null);
  const [currentUser, setCurrentUser] = useState({})

  // dispatching an action
  const dispatch = useDispatch();
  const { isLoading, users } = useSelector(state => state.GetUsersReducer);
  // console.log('users:- ',users)


  useEffect(() => {
    dispatch(GetUsersListing())
  }, [])

  // for add modal
  const addModalCloseHandler = () => setShowAddModal(false);
  const addModalShowHandler = () => setShowAddModal(true);

  // for edit modal
  const editModalAddHandler = () => setShowEditModal(true)
  const editModalCloseHandler = () => setShowEditModal(false);

  // close delete modal
  const deleteModalAddHandler = () => setShowDelModal(true)
  const deleteModalCloseHandler = () => setShowDelModal(false);

  // open a delete modal
  const deleteModalShowHandler = (index) => {
    deleteModalAddHandler()
    setRemoveEl(index)
  };

  // for edit button
  const editCustomerHandler = (index, user) => {
    editModalAddHandler()
    setCurrentUser({
      user,
      index
    })

  }

  // sorting data
  const sortData = (e) => {
    let selectedValue = e.target.value;
    if (selectedValue === 'Name') {
      dispatch(SortByName())
      successNotify("Sorted By Name Successfully !")
    } else if (selectedValue === 'Email') {
      dispatch(SortByEmail())
      successNotify("Sorted By Email Successfully !")
    } else {
      dispatch(SortById())
      successNotify("Sorted By Id Successfully !")
    }
    
  }

  // handle side bar on mobile
  const openSideBarHandler = ()=>{
    dispatch(OpenSideBar())
  }

  return (
    <>
      <Container fluid>
        <section className='panel-content'>
          <div className='panel-content-header bg-white py-2'>
            <Row className='justify-content-center'>
              <Col lg={11} className='d-flex align-items-center gap-sm-4'>
                <span className='d-lg-none d-block ps-2' onClick={openSideBarHandler}><GiHamburgerMenu size={25} /></span>
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
                  <div className="sort-filters">
                    <Row className='justify-content-sm-end justify-content-center'>
                      <Col xl={2} lg={3} md={3} sm={4} xs={11} className='d-flex align-items-center gap-3'>
                        <div className='w-25'>
                          <FaSortAlphaDown size={23} />
                        </div>
                        <SortFilterComp options={['Id', 'Name', 'Email']} onChange={sortData} />
                      </Col>
                    </Row>
                  </div>

                  {/* customer listing header */}
                  <Row className='listing-header bg-green-light py-2 rounded-2 mb-4'>
                    <Col md={3} xs={4} className='text-center'>
                      <h6 className='m-0 fw-bolder'>Customer ID</h6>
                    </Col>
                    <Col md={3} xs={4} className='text-center'>
                      <h6 className='m-0 fw-bolder'>Customer Name</h6>
                    </Col>
                    <Col md={6} xs={4}>
                      <h6 className='m-0 fw-bolder'>Emai</h6>
                    </Col>
                  </Row>


                  {/* customer listing */}
                  <div className='position-relative'>
                    {
                      isLoading ? <Loader /> : (
                        users.map((user, index) => (
                          <Row key={index} className='customer-listing py-2 rounded-2 bg-white align-items-center mt-4 overflow-auto'>
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
                                  <button onClick={() => editCustomerHandler(index, user)} className='custom-btn custom-btn-sm btn-sm-1'>Edit</button>
                                  <button onClick={() => deleteModalShowHandler(index)} className='custom-btn custom-btn-sm btn-sm-2'>Delete</button>
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
      <AddModalComp
        show={showAddModal}
        onHide={addModalCloseHandler}
      />

      <EditModalComp
        show={showEditModal}
        onHide={editModalCloseHandler}
        currentUser={currentUser}
      />


      {/* Delete Modal */}
      <DeleteModalComp show={showDelModal} onHide={deleteModalCloseHandler} currentEl={removeEl} />
    </>
  )
}

export default PanelContent