import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { Link, Outlet } from 'react-router'

function App() {
    return (
        <div className="App">
            <Navbar expand="lg" bg='info'>
                <Container>
                    <Navbar.Brand as={Link} to="/">
                        Home
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <NavDropdown
                                title="Homework"
                                id="basic-nav-dropdown"
                            >
                                <NavDropdown.Item as={Link} to="homework/day2">
                                    Day 2
                                </NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="homework/day3">
                                    Day 3
                                </NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="homework/day4">
                                    Day 4
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Outlet />
        </div>
    )
}

export default App
