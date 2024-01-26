import React from 'react'
import { Row, Col } from "react-bootstrap"
import { PanelContent, SideBar } from '../components'
import { ImCross } from "react-icons/im";
import { useDispatch, useSelector } from 'react-redux'
import { CloseSideBar } from '../store/Actions/users';


const Layout = () => {
  const dispatch = useDispatch()
  const {isSideBarOpen} = useSelector(state => state.SideBarHandlingReducer);
  
  const closeSideBarHandler = ()=>{
    dispatch(CloseSideBar())
  }
  return (
    <>
      <section>
        <Row className='main justify-content-center min-vh-100'>
          <Col xxl={2} xl={3} lg={3} className={`d-lg-block d-flex justify-content-between align-items-start p-0 side-bar-container ${isSideBarOpen ? 'open':""}`}>
              <SideBar />
              <span className='d-lg-none d-block mt-4 pe-4' onClick={closeSideBarHandler}><ImCross size={25} color='#fff' /></span>
          </Col>
          <Col xxl={10} xl={9} lg={9} sm={11} className='p-0'>
            <PanelContent />
          </Col>
        </Row>
      </section>
    </>
  )
}

export default Layout