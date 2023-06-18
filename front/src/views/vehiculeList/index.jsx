import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {
    Table,
    Thead,
    Tbody,
Icon,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
  } from '@chakra-ui/react'
  import {
    AiFillDelete,
  } from "react-icons/ai";

const VehiculeList= () => {
  const [vehiculeData,setVehiculeData] = useState([])

  useEffect(() => {
     axios.get("http://localhost:3333/vehicule/getAllVehicule").then(res=>{
      setVehiculeData(res.data)
     })   
  }, [])


  return (
    <div>
        <br /><br /><br /><br /><br /><br /><br /><br />
        <TableContainer>
  <Table variant='simple'>
    <TableCaption>Vehicule List</TableCaption>
    <Thead>
      <Tr>
        <Th>Vehicule Type</Th>
        <Th>Matricule</Th>
        <Th >Vehicule Code</Th>
        
      </Tr>
    </Thead>
    <Tbody>
      
    {vehiculeData?.map(e=>(
      <Tr>
        <Td>{e?.vehicule_type}</Td>
        <Td>{e?.matricule}</Td>
     
       <Td >{e?.vehicule_code}</Td>
       <Td >{
                <Icon w='32px' h='32px' as={AiFillDelete}  />
              }</Td>
    
      </Tr>
    ))
}
    </Tbody>
    
  </Table>
</TableContainer>

    </div>
  )
}

export default VehiculeList