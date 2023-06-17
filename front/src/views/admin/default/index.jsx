import {
  Avatar,
  Box,
  Flex,
  FormLabel,
  Icon,
  Select,
  SimpleGrid,
  useColorModeValue,
} from "@chakra-ui/react";
// Assets
import Usa from "assets/img/dashboards/usa.png";
// Custom components
import MiniCalendar from "components/calendar/MiniCalendar";
import MiniStatistics from "components/card/MiniStatistics";
import IconBox from "components/icons/IconBox";
import React, { useEffect, useState } from "react";
import {
  MdAddTask,
  MdAttachMoney,
  MdBarChart,
  MdFileCopy,
} from "react-icons/md";

import{
  BsPerson,
  CiDeliveryTruck,
  BsPersonBoundingBox,
  BsFillCarFrontFill,

}from "react-icons/bs"

import TotalSpent from "views/admin/default/components/TotalSpent";
import axios from "axios"
export default function UserReports() {
  const [driverCount,setDriverCount]=useState(0)
  const [vehiculeCount,setVehiculeCount]=useState(0)

  useEffect(() => {
    axios.get("http://localhost:3333/driver/getDriverCount").then(res=>{
      setDriverCount(res?.data)
    })
  }, [])
  

  useEffect(() => {
    axios.get("http://localhost:3333/vehicule/getVehiculeCount").then(res=>{
      setVehiculeCount(res?.data)
    })
  }, [])
  
  // Chakra Color Mode
  const brandColor = useColorModeValue("brand.500", "white");
  const boxBg = useColorModeValue("secondaryGray.300", "whiteAlpha.100");
  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 3, "2xl": 6 }}
        gap='20px'
        mb='20px'>
        <MiniStatistics
          startContent={
            <IconBox
              w='56px'
              h='56px'
              bg={boxBg}
              icon={
                <Icon w='32px' h='32px' as={BsPersonBoundingBox} color={brandColor} />
              }
            />
          }
          name='Employe'
          value='50'
        />
        <MiniStatistics
          startContent={
            <IconBox
              w='56px'
              h='56px'
              bg={boxBg}
              icon={
                <Icon w='32px' h='32px' as={BsPerson} color={brandColor} />
              }
            />
          }
          name='Drivers'
          value={driverCount}
        />
        
        <MiniStatistics
          startContent={
            <IconBox
              w='56px'
              h='56px'
              bg='linear-gradient(90deg, #4481EB 0%, #04BEFE 100%)'
              icon={<Icon w='28px' h='28px' as={BsFillCarFrontFill} color='white' />}
            />
          }
          name='Users'
          value='300'
        />
        <MiniStatistics
          startContent={
            <IconBox
              w='56px'
              h='56px'
              bg='linear-gradient(90deg, #4481EB 0%, #04BEFE 100%)'
              icon={<Icon w='28px' h='28px' as={BsFillCarFrontFill} color='white' />}
            />
          }
          name='Vehicule'
          value={vehiculeCount}
        />
        <MiniStatistics
          startContent={
            <IconBox
              w='56px'
              h='56px'
              bg='linear-gradient(90deg, #4481EB 0%, #04BEFE 100%)'
              icon={<Icon w='28px' h='28px' as={BsFillCarFrontFill} color='white' />}
            />
          }
          name='Courriers'
          value='154'
        />
        <MiniStatistics
          startContent={
            <IconBox
              w='56px'
              h='56px'
              bg={boxBg}
              icon={
                <Icon w='32px' h='32px' as={MdFileCopy} color={brandColor} />
              }
            />
          }
          name='Total Projects'
          value='2935'
        />
      </SimpleGrid>

      <SimpleGrid columns={{ base: 1, md: 2, xl: 2 }} gap='20px' mb='20px'>
        <TotalSpent />
            <MiniCalendar h='100%' minW='100%' selectRange={false} />
        </SimpleGrid>

    </Box>
  );
}
