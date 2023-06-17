import React, { useEffect, useState } from 'react'
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
  } from '@chakra-ui/react'
import axios from "axios"
const DriverList= () => {
  const [userData,setUserData] = useState([])

  useEffect(() => {
     axios.get("http://localhost:3333/driver/getAllDriver").then(res=>{
      setUserData(res.data)
      localStorage.setItem("driverCount",res?.data?.length)
     })   
  }, [])
  

  return (
    <div
      style={{
        marginTop:"6rem"
      }}
    >
        <TableContainer>
  <Table variant='simple'>
    <TableCaption>Return Packages</TableCaption>
    <Thead>
      <Tr>
        <Th>Name</Th>
        <Th>Last Name</Th>
        <Th >Cin</Th>
        <Th >Vehicule Code</Th>
        <Th >Email</Th>
        
      </Tr>
    </Thead>
    <Tbody>
      
    {userData?.map(e=>(
      <Tr>
      
        
        <Td>{e?.name}</Td>
        <Td>{e?.last_name}</Td>
        <Td >{e?.cin}</Td>
        <Td >{e?.email }</Td>
        <Td >{e?.phone}</Td>
      </Tr>
      ))
}
    </Tbody>
 
  </Table>
</TableContainer>
    </div>
  )
}

export default DriverList