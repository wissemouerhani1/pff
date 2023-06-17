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
import Payments from "views/payments";
import Transactions from "views/transactions";
import Vehicule  from "views/vehicule";
import AddVehicule  from "views/AddVehicule";
import VehiculeList  from "views/vehiculeList";
import ReturnPackages  from "views/returnPackages";
import RTL from "views/admin/rtl";
import Employe from "views/user/employe";
import Users from "views/user/users";
import AddPackages from "views/addpackages";
import EmployeList from "views/employelist";
import DriverList  from "views/driverlist";
import CreateDriver  from "views/createdriver";
import CreateUser  from "views/createuser";
import CreateEmpolye  from "views/createempolye";
import UserList from "views/userList";

import CourrierInformation from "views/courrierinformation";
// Auth Imports
import SignInCentered from "views/auth/signIn";
import SignUpCentred from "views/auth/signup";
const role = JSON.parse(localStorage.getItem("user")).role
let routes = [];
if (role==="admin"){
  routes.push(
    {
      name: "Main Dashboard",
      layout: "/admin",
      path: "/default",
      role:"admin",
      icon: <Icon as={MdHome} width='20px' height='20px' color='inherit' />,
      component: MainDashboard,
    },
  
    {
      name: "Employe List",
      layout: "/admin",
      path: "/employelist",
      role:"admin",
      icon: <Icon as={MdHome} width='20px' height='20px' color='inherit' />,
      component: EmployeList,
    },
    {
      name: "UserList",
      layout: "/admin",
      path: "/userlist",
      role:"admin",
      icon: <Icon as={MdHome} width='20px' height='20px' color='inherit' />,
      component: UserList,
    },
    
    
    
  
    {
      name: "AddVehicule",
      layout: "/admin",
      path: "/addvehicule",
      role:"admin",
      icon: <Icon as={MdHome} width='20px' height='20px' color='inherit' />,
      component: AddVehicule,
    },
  
    {
      name: "VehiculeList",
      layout: "/admin",
      path: "/vehiculelist",
      role:"admin",
      icon: <Icon as={MdHome} width='20px' height='20px' color='inherit' />,
      component: VehiculeList,
    },
    {
      name: "Transactions",
      layout: "/admin",
      path: "/transactions",
      role:"admin",
      icon: <Icon as={MdHome} width='20px' height='20px' color='inherit' />,
      component: Transactions,
    },
    {
      name: "DriverList",
      layout: "/admin",
      path: "/driverlist",
      role:"admin",
      icon: <Icon as={MdHome} width='20px' height='20px' color='inherit' />,
      component: DriverList,
    },
    {
      name: "CreateDriver",
      layout: "/admin",
      path: "/createdriver",
      role:"admin",
      icon: <Icon as={MdHome} width='20px' height='20px' color='inherit' />,
      component: CreateDriver,
    },
    
    {
      name: "Create User",
      layout: "/admin",
      path: "/createuser",
      role:"admin",
      icon: <Icon as={MdHome} width='20px' height='20px' color='inherit' />,
      component: CreateUser,
  
    },
    {
      name: "Create Employe",
      layout: "/admin",
      icon: <Icon as={MdBarChart} width='20px' height='20px' color='inherit' />,
      path: "/createmploye ",
      role:"admin",
      component: CreateEmpolye,
    },
        
  )
}

const routes1 = [
  {
    name: "Main Dashboard",
    layout: "/admin",
    path: "/default",
    role:"admin",
    icon: <Icon as={MdHome} width='20px' height='20px' color='inherit' />,
    component: MainDashboard,
  },
  {
    name: "Employe",
    layout: "/admin",
    path: "/employe",
    role:"employe",
    icon: <Icon as={MdHome} width='20px' height='20px' color='inherit' />,
    component: Employe,
  },

  {
    name: "Payments",
    layout: "/admin",
    path: "/payments",
    icon: <Icon as={MdHome} width='20px' height='20px' color='inherit' />,
    component: Payments,
  },
  
  {
    name: "UserList",
    layout: "/admin",
    path: "/userlist",
    role:"admin",
    icon: <Icon as={MdHome} width='20px' height='20px' color='inherit' />,
    component: UserList,
  },
  
  
  {
    name: "ReturnPackages",
    layout: "/admin",
    path: "/returnpackages",
    icon: <Icon as={MdHome} width='20px' height='20px' color='inherit' />,
    component: ReturnPackages,
  },

  {
    name: "AddVehicule",
    layout: "/admin",
    path: "/addvehicule",
    role:"admin",
    icon: <Icon as={MdHome} width='20px' height='20px' color='inherit' />,
    component: AddVehicule,
  },


  {
    name: "Vehicule",
    layout: "/admin",
    path: "/vehicule",
    icon: <Icon as={MdHome} width='20px' height='20px' color='inherit' />,
    component: Vehicule,
  },
  {
    name: "VehiculeList",
    layout: "/admin",
    path: "/vehiculelist",
    role:"admin",
    icon: <Icon as={MdHome} width='20px' height='20px' color='inherit' />,
    component: VehiculeList,
  },
  {
    name: "Transactions",
    layout: "/admin",
    path: "/transactions",
    role:"admin",
    icon: <Icon as={MdHome} width='20px' height='20px' color='inherit' />,
    component: Transactions,
  },
  {
    name: "DriverList",
    layout: "/admin",
    path: "/driverlist",
    role:"admin",
    icon: <Icon as={MdHome} width='20px' height='20px' color='inherit' />,
    component: DriverList,
  },
  {
    name: "CreateDriver",
    layout: "/admin",
    path: "/createdriver",
    role:"admin",
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
    role:"admin",
    icon: <Icon as={MdHome} width='20px' height='20px' color='inherit' />,
    component: CreateUser,

  },
  {
    name: "Create Employe",
    layout: "/admin",
    icon: <Icon as={MdBarChart} width='20px' height='20px' color='inherit' />,
    path: "/createmploye ",
    role:"admin",
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
