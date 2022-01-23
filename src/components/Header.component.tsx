import { Container, Nav, Navbar } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/hom="><b>MB</b></Navbar.Brand>
        <Nav className="me-auto">
          <NavLink to="/home">Home</NavLink>&nbsp; &nbsp;
          <NavLink to="/about">About</NavLink>
        </Nav>
      </Container>
    </Navbar>
  )
}

export default Header
