import React from 'react';
import { MDBBtn } from 'mdb-react-ui-kit';
import {Link as LinkRouter} from "react-router-dom"

export default function Button() {
  return (
    <MDBBtn  color="dark" className='mx-2' td= "none">
       <LinkRouter className='buttomlink' to="cities"> Cities </LinkRouter>
      </MDBBtn>
      
  );
}
