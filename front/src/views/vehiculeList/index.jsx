import React from 'react'
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

const VehiculeList= () => {
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
      <Tr>
        <Td></Td>
        <Td></Td>
        <Td ></Td>
      </Tr>
      <Tr>
        <Td></Td>
        <Td></Td>
        <Td ></Td>
      </Tr>
      <Tr>
        <Td></Td>
        <Td></Td>
        <Td ></Td>
      </Tr>
    </Tbody>
    <Tfoot>
     
    </Tfoot>
  </Table>
</TableContainer>

    </div>
  )
}

export default VehiculeList