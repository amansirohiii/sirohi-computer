"use client";
import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
} from "@nextui-org/react";
// import {
//   ChevronDown,
//   Lock,
//   Activity,
//   Flash,
//   Server,
//   TagUser,
//   Scale,
// } from "./Icons.jsx";
import { Logo } from "./Logo.jsx";
import { courseMenuItems, mobileMenuItems } from "@/utils/constants";
import { useState } from "react";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // const icons = {
  //   chevron: <ChevronDown fill="currentColor" size={16} />,
  //   scale: <Scale className="text-warning" fill="currentColor" size={30} />,
  //   lock: <Lock className="text-success" fill="currentColor" size={30} />,
  //   activity: (
  //     <Activity className="text-secondary" fill="currentColor" size={30} />
  //   ),
  //   flash: <Flash className="text-primary" fill="currentColor" size={30} />,
  //   server: <Server className="text-success" fill="currentColor" size={30} />,
  //   user: <TagUser className="text-danger" fill="currentColor" size={30} />,
  // };

  // const [isOpen, setIsOpen] = useState(false);
  // const [timeoutId, setTimeoutId] = useState (null);
  const delay = 1000;

  return (
    <Navbar shouldHideOnScroll onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden text-black"
        />
        <NavbarBrand>
          <Link color="foreground" href="/">
            <p className="font-bold text-inherit mx-auto sm:ml-2 text-black sm:text-xl">
              Sirohi Computer Institute
            </p>
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {/* <Dropdown isOpen={isOpen}>
          <NavbarItem isActive aria-current="page">
            <DropdownTrigger>
              <Button
                disableRipple
                className="p-0 bg-transparent data-[hover=true]:bg-transparent"
                endContent={icons.chevron}
                radius="sm"
                variant="light"
                onMouseEnter={() => {
                  clearTimeout(timeoutId);
                  setIsOpen(true);
                }}
                onMouseLeave={() => {
                  const id = setTimeout(() => setIsOpen(false), delay);
                  setTimeoutId(id);
                }}
              >
                Our Courses
              </Button>
            </DropdownTrigger>
          </NavbarItem>
          <DropdownMenu
            aria-label="ACME features"
            className="w-auto text-center"
            itemClasses={{
              base: "gap-4",
            }}
            onMouseEnter={() => {
              clearTimeout(timeoutId);
              setIsOpen(true);
            }}
            onMouseLeave={() => {
              setIsOpen(false);
            }}
          >
            {courseMenuItems.map((courseMenuItem) => (
              <DropdownItem key={courseMenuItem.slug}>
                <Link color="foreground" href={courseMenuItem.slug}>
                  {courseMenuItem.name}
                </Link>
              </DropdownItem>
            ))}
          </DropdownMenu>
        </Dropdown> */}
        <NavbarItem>
          <Link href="/courses" color="foreground">Our Courses</Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/about">About Us</Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/verify">
            Verify Student
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="/contact">Contact Us</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="/register" variant="flat">
            Register
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {mobileMenuItems.map((mobileMenuItem, index) => (
          <NavbarMenuItem key={index}>
            <Link
              color={
                index === 2
                  ? "foreground"
                  : index === mobileMenuItems.length - 1
                  ? "primary"
                  : "foreground"
              }
              className="w-full"
              href={mobileMenuItem.slug}
              size="lg"
            >
              {mobileMenuItem.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
