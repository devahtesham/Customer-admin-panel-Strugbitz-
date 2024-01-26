import React from "react"
import Layout from "./layout/Layout"
import Test from "./test"
import {ToastContainer} from "./Taostify/Toastify"
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <>
      {/* <Test /> */}
      <Layout />
      <ToastContainer />
    </>
  )
}

export default App
