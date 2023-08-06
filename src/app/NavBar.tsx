"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { FC } from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";

interface NavBarProps {}

const NavBar: FC<NavBarProps> = ({}) => {
  const router = useRouter();
  const pathName = usePathname();
  return (
    <Navbar
      bg="primary"
      variant="dark"
      sticky="top"
      expand="sm"
      collapseOnSelect>
      <Container>
        <Navbar.Brand as={Link} href="/">
          Next Image Gallery
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="main-navbar" />
        <Navbar.Collapse id="main-navbar">
          <Nav>
            <Nav.Link as={Link} href="/static" active={pathName === "/static"}>
              Static
            </Nav.Link>
            <Nav.Link
              as={Link}
              href="/dynamic"
              active={pathName === "/dynamic"}>
              Dynamic
            </Nav.Link>
            <Nav.Link as={Link} href="/isr" active={pathName === "/isr"}>
              ISR
            </Nav.Link>
            <NavDropdown title="Topics" id="topics-dropdown">
              <NavDropdown.Item as={Link} href="/topics/health">
                Health
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} href="/topics/fitness">
                Fitness
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} href="/topics/coding">
                Coding
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} href="/search" active={pathName === "/search"}>
              Search
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
