import React from "react";

import { Icon } from "@chakra-ui/react";
import {
  MdBarChart,
  MdPerson,
  MdHome,
  MdLock,
  
} from "react-icons/md";

// Admin Imports
import MainDashboard from "views/admin/default";
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
import BecomeMember from "views/auth/becomeamember";
import CourrierInformation from "views/courrierinformation";
import Newmember from "views/Newmember";

// Auth Imports
import SignInCentered from "views/auth/signIn";
import SignUpCentred from "views/auth/signup";
import home from "views/auth/home_";
const role = JSON.parse(localStorage.getItem("user"))?.role
let routes = [
    {
      name: "Home",
      layout: "/auth",
      path: "/home-home",
      icon: <Icon as={MdHome} width="20px" height="20px" color="inherit" />,
      component: home, // Replace 'Home' with the component you want to render for the home page
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
    name: "aaa",
    layout: "/auth",
    path: "/become-member",
    icon: <Icon as={MdLock} width='20px' height='20px' color='inherit' />,
    component: BecomeMember,
  },
];
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
      name: "New Member list",
      layout: "/admin",
      path: "/new member",
      role:"admin",
      icon: <Icon as={MdHome} width='20px' height='20px' color='inherit' />,
      component: Newmember,
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
      name: "Create User",
      layout: "/admin",
      path: "/createuser",
      role:"admin",
      icon: <Icon as={MdHome} width='20px' height='20px' color='inherit' />,
      component: CreateUser,
  
    },{
      name: "CreateDriver",
      layout: "/admin",
      path: "/createdriver",
      role:"admin",
      icon: <Icon as={MdHome} width='20px' height='20px' color='inherit' />,
      component: CreateDriver,
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
      name: "VehiculeList",
      layout: "/admin",
      path: "/vehiculelist",
      role:"admin",
      icon: <Icon as={MdHome} width='20px' height='20px' color='inherit' />,
      component: VehiculeList,
    },
    
    {
      name: "DriverList",
      layout: "/admin",
      path: "/driverlist",
      role:"admin",
      icon: <Icon as={MdHome} width='20px' height='20px' color='inherit' />,
      component: DriverList,
    },
        
  )
}else if (role ==="customer"){
  routes.push(
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
      name: "ReturnPackages",
      layout: "/admin",
      path: "/returnpackages",
      icon: <Icon as={MdHome} width='20px' height='20px' color='inherit' />,
      component: ReturnPackages,
    },
    {
      name: "Courrier Information",
      layout: "/admin",
      path: "/courrier_information",
      icon: <Icon as={MdHome} width='20px' height='20px' color='inherit' />,
      component: CourrierInformation,
    },
    
  )

}
else if (role ==="employe"){
  routes.push(
  
    {
      name: "Employe",
      layout: "/admin",
      path: "/employe",
      role:"employe",
      icon: <Icon as={MdHome} width='20px' height='20px' color='inherit' />,
      component: Employe,
    },
  
  
    {
      name: " See All Courrier ",
      layout: "/admin",
      path: "/courrier_information",
      icon: <Icon as={MdHome} width='20px' height='20px' color='inherit' />,
      component: CourrierInformation,
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
    name: "AddVehicule",
    layout: "/admin",
    path: "/addvehicule",
    role:"admin",
    icon: <Icon as={MdHome} width='20px' height='20px' color='inherit' />,
    component: AddVehicule,
  },


  {
    name: "BecomeMember",
    layout: "/auth",
    path: "/becomemember",
    icon: <Icon as={MdHome} width='20px' height='20px' color='inherit' />,
    component: BecomeMember,
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
  {
    name: "Transactions",
    layout: "/admin",
    path: "/transactions",
    role:"admin",
    icon: <Icon as={MdHome} width='20px' height='20px' color='inherit' />,
    component: Transactions,
  },
];

export default routes;
