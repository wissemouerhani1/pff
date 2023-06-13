import React from "react";

import { Icon } from "@chakra-ui/react";
import {
  MdBarChart,
  MdPerson,
  MdHome,
  MdLock,
  MdOutlineShoppingCart,
} from "react-icons/md";

// Admin Imports
import MainDashboard from "views/admin/default";
import NFTMarketplace from "views/admin/marketplace";
import Profile from "views/admin/profile";

import RTL from "views/admin/rtl";
import Employe from "views/user/employe";
import Users from "views/user/users";
import AddPackages from "views/addpackages";
import CustomerList  from "views/customerlist";
import DriverList  from "views/driverlist";
import CreateDriver  from "views/createdriver";
import CreateUser  from "views/createuser";
import CreateEmpolye  from "views/createempolye";

import CourrierInformation from "views/courrierinformation";
// Auth Imports
import SignInCentered from "views/auth/signIn";
import SignUpCentred from "views/auth/signup";
const routes = [
  {
    name: "Main Dashboard",
    layout: "/admin",
    path: "/default",
    icon: <Icon as={MdHome} width='20px' height='20px' color='inherit' />,
    component: MainDashboard,
  },
  {
    name: "Employe",
    layout: "/admin",
    path: "/employe",
    icon: <Icon as={MdHome} width='20px' height='20px' color='inherit' />,
    component: Employe,
  },
  {
    name: "CustomerList",
    layout: "/admin",
    path: "/customerlist",
    icon: <Icon as={MdHome} width='20px' height='20px' color='inherit' />,
    component: CustomerList,
  },
  {
    name: "DriverList",
    layout: "/admin",
    path: "/driverlist",
    icon: <Icon as={MdHome} width='20px' height='20px' color='inherit' />,
    component: DriverList,
  },
  {
    name: "CreateDriver",
    layout: "/admin",
    path: "/createdriver",
    icon: <Icon as={MdHome} width='20px' height='20px' color='inherit' />,
    component: CreateDriver,
  },
  
  {
    name: "Users",
    layout: "/admin",
    path: "/users",
    icon: <Icon as={MdHome} width='20px' height='20px' color='inherit' />,
    component: Users,
  },
  {
    name: "Add Packages",
    layout: "/admin",
    path: "/add_packages",
    icon: <Icon as={MdHome} width='20px' height='20px' color='inherit' />,
    component: AddPackages,
  },
  {
    name: "Courrier Information",
    layout: "/admin",
    path: "/courrier_information",
    icon: <Icon as={MdHome} width='20px' height='20px' color='inherit' />,
    component: CourrierInformation,
  },
  {
    name: "Create User",
    layout: "/admin",
    path: "/createuser",
    icon: <Icon as={MdHome} width='20px' height='20px' color='inherit' />,
    component: CreateUser,

  },
  {
    name: "Create Employe",
    layout: "/admin",
    icon: <Icon as={MdBarChart} width='20px' height='20px' color='inherit' />,
    path: "/createmploye ",
    component: CreateEmpolye,
  },
  {
    name: "Profile",
    layout: "/admin",
    path: "/profile",
    icon: <Icon as={MdPerson} width='20px' height='20px' color='inherit' />,
    component: Profile,
  },
  {
    name: "Sign In",
    layout: "/auth",
    path: "/sign-in",
    icon: <Icon as={MdLock} width='20px' height='20px' color='inherit' />,
    component: SignInCentered,
  },
  {
    name: "Sign Up",
    layout: "/auth",
    path: "/sign-up",
    icon: <Icon as={MdLock} width='20px' height='20px' color='inherit' />,
    component: SignUpCentred,
  },
  {
    name: "RTL Admin",
    layout: "/rtl",
    path: "/rtl-default",
    icon: <Icon as={MdHome} width='20px' height='20px' color='inherit' />,
    component: RTL,
  },
];

export default routes;
