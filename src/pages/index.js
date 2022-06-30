import React from "react"
import "@fortawesome/fontawesome-free/css/all.min.css"
import "bootstrap-css-only/css/bootstrap.min.css"
import "mdbreact/dist/css/mdb.css"
import { MDBAlert, MDBCol, MDBRow } from "mdbreact"

import Navbar from "../components/Headers/MainNavbar/navbar"

export default function Home() {
  return (
    <>
      <Navbar /> <br />
      <p>Hello World!</p>
    </>
  )
}
