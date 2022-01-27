import React from 'react';
import { Navbar, Container, Form, Button } from 'react-bootstrap';
import logo from './logo.svg';

const HeadComp = ({getUserData}) => {
  return <Navbar bg="dark" variant="dark">
  <Container>
    <Navbar.Brand href="#home">
      <img
        alt=""
        src={logo}
        width="30"
        height="30"
        className="d-inline-block align-top"
      />{' '}
    LGM
    </Navbar.Brand>
    <Form className="d-flex">
      <Button variant="success" type='button' onClick={()=> getUserData(1)}>Get Users</Button>
    </Form>

  </Container>
</Navbar>;
};

export default HeadComp;
