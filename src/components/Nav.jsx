  import {Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenu, NavbarMenuItem, NavbarMenuToggle, Link, Input, DropdownItem, DropdownTrigger, Dropdown, DropdownMenu, Avatar, Switch} from "@nextui-org/react";
  import {AcmeLogo} from "../assets/AcmeLogo.jsx";
  import {SearchIcon} from "../assets/SearchIcon.jsx";
  import { useState, useEffect } from "react";
import { SunIcon } from "../assets/SunIcon.jsx";
import { MoonIcon } from "../assets/MoonIcon.jsx";

  const Nav = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [signedIn, setSignedIn] = useState(false);
    const [isSelected, setIsSelected] = useState(true);

    useEffect (() => {}, []);

    const handleClick = () => {
      setSignedIn(!signedIn);
    }

    const menuItems = [
      "Profile",
      "Dashboard",
      "Activity",
      "Analytics",
      "System",
      "Deployments",
      "My Settings",
      "Team Settings",
      "Help & Feedback",
      "Log Out",
    ];

    return (
      <Navbar shouldHideOnScroll onMenuOpenChange={setIsMenuOpen}>
        <NavbarContent justify="start">

        <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="sm:hidden"
          />

          <NavbarBrand className="mr-4">
            <AcmeLogo className="place-items-center" />
            <p className="hidden sm:block font-bold text-inherit">VINYL COUNTDOWN</p>
          </NavbarBrand>
          <NavbarContent className="hidden sm:flex gap-3">
            <NavbarItem isActive>
              <Link href="#" aria-current="page" color="secondary">
                Home
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link color="foreground" href="#">
                New
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link color="foreground" href="#">
                Browse
              </Link>
            </NavbarItem>
          </NavbarContent>
        </NavbarContent>

        <NavbarContent as="div" className="items-center" justify="end">
          <Input
            classNames={{
              base: "max-w-full sm:max-w-[10rem] h-10",
              mainWrapper: "h-full",
              input: "text-small",
              inputWrapper: "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
            }}
            placeholder="Type to search..."
            size="sm"
            startContent={<SearchIcon size={18} />}
            type="search"
          />
          <Switch
            isSelected={isSelected}
            onValueChange={setIsSelected}
            size="lg"
            color="warning"
            startContent={<SunIcon />}
            endContent={<MoonIcon />}
            ></Switch>
          <Dropdown placement="bottom-end">
            <DropdownTrigger>
              <Avatar
                isBordered
                as="button"
                className="transition-transform"
                color="secondary"
                name="John Madden"
                size="sm"
                src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
              />
            </DropdownTrigger>
            <DropdownMenu aria-label="Profile Actions" variant="flat" disabledKeys={["forums", "settings", "help_and_feedback"]}> {/* Avatar menu items */}
              <DropdownItem key="profile" className="h-14 gap-2">
                {signedIn ? <>
                    <p className="font-semibold">Signed in as</p>
                    <p className="font-normal">john.madden@nfl.gov</p> {/* //!Placeholder */}
                  </>
                  : "Not signed in"}
              </DropdownItem>
              <DropdownItem key="orders">Orders</DropdownItem>
              <DropdownItem key="lists">Lists</DropdownItem>
              <DropdownItem key="forums">Forums</DropdownItem>
              <DropdownItem key="settings">Settings</DropdownItem>
              <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
              <DropdownItem key={signedIn ? "logout" : "login"} color={signedIn ? "danger" : "warning"} onClick={handleClick}>
                {signedIn ? "Sign Out" : "Sign In"}
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </NavbarContent>

        <NavbarMenu>
          {menuItems.map((item, index) => ( //Hamburger menu items
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                color={
                  index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
                }
                className="w-full"
                href="#"
                size="lg"
              >
                {item}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>

      </Navbar>
    );
  }

export default Nav;