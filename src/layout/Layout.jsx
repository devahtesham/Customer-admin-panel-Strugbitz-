import React from 'react'
import { Row, Col, Container } from "react-bootstrap"
import { PanelContent, SideBar } from '../components'

const Layout = () => {
  return (
    <>
      <section>
        <Row className='main justify-content-center min-vh-100'>
          <Col xxl={2} xl={3} lg={3} className='p-0 side-bar-container'>
            {/* <div className="side-bar-overlay"></div> */}
              <SideBar />
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