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

const ReturnPackage= () => {
  return (
    <div>
        <br /><br /><br /><br /><br /><br /><br /><br />
        <TableContainer>
  <Table variant='simple'>
    <TableCaption>Return Packages</TableCaption>
    <Thead>
      <Tr>
        <Th>Courrier id</Th>
        <Th>Client Name</Th>
        <Th >Prix</Th>
        <Th >Type</Th>
        <Th >Statue</Th>
        
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
      <Tr>
        <Th></Th>
        <Th></Th>
        <Th isNumeric></Th>
      </Tr>
    </Tfoot>
  </Table>
</TableContainer>
    </div>
  )
}

export default ReturnPackage