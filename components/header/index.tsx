import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";
import Link from "next/link";
import React from "react";
import Image from "next/image";

function HeaderComponent() {
  return (
    <nav>
      <Navbar fluid rounded>
        <NavbarBrand as={Link} href="/">
          <Image
            src="/assets/logo.png"
            width={36}
            height={24}
            className="mr-3 h-9"
            alt="Rick and Morty logo"
          />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Rick&Mortydle
          </span>
        </NavbarBrand>
        <NavbarToggle />
        <NavbarCollapse>
          <NavbarLink href="#" active>
            Home
          </NavbarLink>
          <NavbarLink as={Link} href="/characters">
            Characters
          </NavbarLink>
          <NavbarLink as={Link} href="/classic">
            Classic Game
          </NavbarLink>
        </NavbarCollapse>
      </Navbar>
    </nav>
  );
}

export default HeaderComponent;
