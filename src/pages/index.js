import React from "react"
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import { MDBAlert, MDBCol, MDBRow } from "mdbreact";

import "../contents/navbar.html";

function navbar(){
  return <navbar src="../contents/navbar.html" />
}

export default function Home() {
  return <div>Hello world!</div>
}
