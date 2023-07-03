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

import Tasks from "views/admin/default/components/Tasks";
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

}
from "react-icons/bs";
import axios from "axios";

export default function UserReports() {
  const [CourrierCount,setCourrierCount]=useState(0)
  useEffect(() => {
    axios.get("http://localhost:3333/courrier/getCourrierCount").then(res=>{
      setCourrierCount(res?.data)
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
          name='Courriers'
          value={CourrierCount}
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
          name='Return Courriers'
          value='7'
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
          name='Delivred '
          value='2'
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
          name='At Warhouse '
          value='2'
        />
      </SimpleGrid>
      
    

    </Box>
  );
}
