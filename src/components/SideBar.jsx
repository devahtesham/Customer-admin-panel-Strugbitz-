import React from 'react'
import "./SideBar.css"
import Logo from "../assets/img/logo.png"
import { BsFillPeopleFill } from "react-icons/bs";

const SideBar = () => {
  return (
    <>
      <section className='side-bar bg-green-dark'>
        <div className='d-flex flex-column align-items-center'>
          <div className="logo py-5 ">
            <img src={Logo} alt="logo" className='' width="200px" />
          </div>
          <div className="bar-panels mt-5">
            <ul className='list-unstyled m-0'>
              <li className='panel-tab p-3 px-4 rounded-3 shadow-lg d-flex align-items-center gap-4 text-uppercase'>
                <span><BsFillPeopleFill size={25} /></span>
                Customers</li>
            </ul>
          </div>

        </div>
      </section>
    </>
  )
}

export default SideBar