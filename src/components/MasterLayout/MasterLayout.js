import React from "react"
import { MDBAlert, MDBBtn, MDBCol, MDBRow } from "mdbreact"
import Navbar from "../Headers/MainNavbar/Navbar"


export default function MasterLayout({ children }){
    return(
        <MDBRow>
            <MDBCol>
                <Navbar></Navbar>
                <MDBBtn className="col-6  my-auto" id="btn_insc">Inscreva-se</MDBBtn>
            </MDBCol>
        </MDBRow>
    )
}