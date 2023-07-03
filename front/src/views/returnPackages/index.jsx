import React, { useState, useEffect } from 'react';
import { Table, Thead, Tbody, Tr, Th, Td, TableCaption, TableContainer } from '@chakra-ui/react';
import axios from 'axios';

const ReturnPackage = () => {
  const [returnPackages, setReturnPackages] = useState([]);

  const fetchReturnPackages = async () => {
    try {
      const response = await axios.get('http://localhost:3333/courrier/getAllReturnPackages');
      const data = response.data;
      setReturnPackages(data.record);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchReturnPackages();
  }, []);

  return (
    <div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <TableContainer>
        <Table variant="simple">
          <TableCaption>Return Packages</TableCaption>
          <Thead>
            <Tr>
              <Th>Courrier id</Th>
              <Th>Client Name</Th>
              <Th>last Name</Th>
              <Th>Adresse</Th>
              <Th>Phone</Th>
              <Th>Quantity</Th>
              <Th>Prix</Th>
              <Th>Type</Th>
              <Th>Statue</Th>
            </Tr>
          </Thead>
          <Tbody>
            {returnPackages.map((courier) => (
              <Tr key={courier.id}>
                <Td>{courier.courrierid}</Td>
                <Td>{courier.name}</Td>
                <Td>{courier.lastName}</Td>
                <Td>{courier.adresse}</Td>
                <Td>{courier.phone}</Td>
                <Td>{courier.quantity}</Td>
                <Td>{courier.prix}</Td>
                <Td>{courier.type}</Td>
                <Td>{courier.status}</Td>
              </Tr>
            ))}
          </Tbody>
          
        </Table>
      </TableContainer>
    </div>
  );
};

export default ReturnPackage;
