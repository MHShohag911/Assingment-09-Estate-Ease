import React from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
  Card,
  IconButton,
} from "@material-tailwind/react";
import {
  CubeTransparentIcon,
  UserCircleIcon,
  CodeBracketSquareIcon,
  Square3Stack3DIcon,
  ChevronDownIcon,
  Cog6ToothIcon,
  InboxArrowDownIcon,
  LifebuoyIcon,
  PowerIcon,
  RocketLaunchIcon,
  Bars2Icon,
} from "@heroicons/react/24/solid";
import { NavLink } from "react-router-dom";

// profile menu component
const profileMenuItems = [
  {
    label: "My Profile",
    icon: UserCircleIcon,
  },
  {
    label: "Edit Profile",
    icon: Cog6ToothIcon,
  },
  {
    label: "Inbox",
    icon: InboxArrowDownIcon,
  },
  {
    label: "Help",
    icon: LifebuoyIcon,
  },
  {
    label: "Sign Out",
    icon: PowerIcon,
  },
];

function ProfileMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end ">
      <MenuHandler>
        <Button
          variant="text"
          color="blue-gray"
          className="flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 lg:ml-auto"
        >
          <Avatar
            variant="circular"
            size="sm"
            alt="tania andrew"
            className="border border-gray-900 p-0.5"
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
          />
          <ChevronDownIcon
            strokeWidth={2.5}
            className={`h-3 w-3 transition-transform ${
              isMenuOpen ? "rotate-180" : ""
            }`}
          />
        </Button>
      </MenuHandler>
      <MenuList className="p-1">
        {profileMenuItems.map(({ label, icon }, key) => {
          const isLastItem = key === profileMenuItems.length - 1;
          return (
            <MenuItem
              key={label}
              onClick={closeMenu}
              className={`flex items-center gap-2 rounded ${
                isLastItem
                  ? "hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10"
                  : ""
              }`}
            >
              {React.createElement(icon, {
                className: `h-4 w-4 ${isLastItem ? "text-red-500" : ""}`,
                strokeWidth: 2,
              })}
              <Typography
                as="span"
                variant="small"
                className="font-normal"
                color={isLastItem ? "red" : "inherit"}
              >
                {label}
              </Typography>
            </MenuItem>
          );
        })}
      </MenuList>
    </Menu>
  );
}

// nav list menu
const navListMenuItems = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Update Profile",
    href: "/updateProfile",
  },
  {
    title: "User Profile",
    href: "/userProfile",
  },
];

function NavListMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const renderItems = navListMenuItems.map(({ title, href }) => (
    <NavLink to={href} key={title}>
      <MenuItem className="h-auto w-full">
        <Typography variant="h6" className="mb-1 text-[#FF0000]">
          {title}
        </Typography>
      </MenuItem>
    </NavLink>
  ));

  return (
    <React.Fragment>
      <Menu allowHover open={isMenuOpen} handler={setIsMenuOpen}>
        <MenuHandler>
          <Typography as="a" href="#" variant="small" className="font-normal">
            <MenuItem className="hidden items-center gap-2 font-medium text-blue-gray-900 lg:flex lg:rounded-full">
              <Square3Stack3DIcon className="h-[18px] w-[18px] text-blue-gray-500" />{" "}
              Pages{" "}
              <ChevronDownIcon
                strokeWidth={2}
                className={`h-3 w-3 transition-transform ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
              />
            </MenuItem>
          </Typography>
        </MenuHandler>
        <MenuList className="hidden w-[36rem] grid-cols-7 gap-3 overflow-visible lg:grid">
          <Card
            color="blue"
            shadow={false}
            variant="gradient"
            className="col-span-3 grid h-full w-full place-items-center rounded-md"
          >
            <RocketLaunchIcon strokeWidth={1} className="h-28 w-28" />
          </Card>
          <ul className="col-span-4 flex w-full flex-col  gap-1">
            {renderItems}
          </ul>
        </MenuList>
      </Menu>
      <ul className="flex w-full flex-col gap-1 lg:hidden">{renderItems}</ul>
    </React.Fragment>
  );
}

function NavListHeaderMenu() {
  const renderItems = navListMenuItems.map(({ title, href }) => (
    <NavLink to={href}>
      <MenuItem className="h-full w-full">
        <Typography variant="h6" color="" className="text-[#FF0000]">
          {title}
        </Typography>
      </MenuItem>
    </NavLink>
  ));

  return (
    <React.Fragment>
      <Menu>
        <MenuHandler>
          <MenuItem className="hidden items-center gap-2 font-medium text-blue-gray-900 lg:flex hover:rounded-none hover:bg-white">
            <ul className="col-span-4 flex w-full justify-center gap-1">{renderItems}</ul>
          </MenuItem>
        </MenuHandler>
      </Menu>
    </React.Fragment>
  );
}

function NavList() {
  return (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center">
      <NavListMenu />
    </ul>
  );
}

export function ComplexNavbar() {
  const [isNavOpen, setIsNavOpen] = React.useState(false);

  const toggleIsNavOpen = () => setIsNavOpen((cur) => !cur);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setIsNavOpen(false)
    );
  }, []);

  return (
    <Navbar className="mx-auto w-full p-2 lg:rounded-full lg:pl-6">
      <div className="relative mx-auto flex items-center justify-between text-blue-gray-900">
        <Typography
          as="a"
          href="/"
          className="mr-4 ml-2 cursor-pointer py-1.5 font-bold"
        >
          <img
            className="w-24"
            src="https://i.ibb.co.com/85vwf4T/nav-logo-black.png"
            alt=""
          />
        </Typography>
        <IconButton
          size="sm"
          color="blue-gray"
          variant="text"
          onClick={toggleIsNavOpen}
          className="ml-auto mr-2 lg:hidden"
        >
          <Bars2Icon className="h-6 w-6" />
        </IconButton>

        <div className="lg:w-full flex">
          <div className="flex-grow">
            <NavListHeaderMenu></NavListHeaderMenu>
          </div>
          <Button
            className="btn hover:bg-[#FF0000] hover:text-white text-[#FF0000] font-extrabold mr-2 hidden md:flex items-center"
            variant="text"
          >
            log in
          </Button>
        </div>
        <ProfileMenu />
      </div>
      <MobileNav open={isNavOpen} className="">
        <NavList />
      </MobileNav>
    </Navbar>
  );
}