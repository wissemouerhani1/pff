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

const CourrierInformation= () => {
  return (
    <div>
        <br /><br /><br /><br /><br /><br /><br /><br />
        <TableContainer>
  <Table variant='simple'>
    <TableCaption>Imperial to metric conversion factors</TableCaption>
    <Thead>
      <Tr>
        <Th>Courrier id</Th>
        <Th>Client Name</Th>
        <Th >Adresse</Th>
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
Total:                                             Total:
    </div>
  )
}

export default CourrierInformation