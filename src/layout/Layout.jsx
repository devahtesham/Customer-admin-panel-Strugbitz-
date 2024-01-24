import React from 'react'
import { Row, Col, Container } from "react-bootstrap"
import { PanelContent, SideBar } from '../components'

const Layout = () => {
  return (
    <>
      <section>
        <Row className='main'>
          <Col lg={3}>
            <SideBar />
          </Col>
          <Col lg={9}>
            <PanelContent />
          </Col>
        </Row>
      </section>
    </>
  )
}

export default Layout