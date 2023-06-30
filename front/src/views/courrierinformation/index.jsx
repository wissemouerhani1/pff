import React, { useState, useEffect } from 'react';
import { Table, Thead, Tbody, Tr, Th, Td, TableCaption, TableContainer } from '@chakra-ui/react';
import axios from 'axios';
import { AiOutlineDownload } from 'react-icons/ai';

const CourrierInformation = () => {
  const [courierData, setCourierData] = useState([]);

  useEffect(() => {
    const fetchCourierData = async () => {
      try {
        const response = await axios.get('http://localhost:3333/courrier/getAllCourrier');
        const data = response.data;
        setCourierData(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCourierData();
  }, []);

  const downloadCourier = (courier) => {
    // Implement your download logic here
    console.log('Downloading courier:', courier);
  };

  return (
    <div>
      <TableContainer>
        <Table variant="simple">
          <TableCaption>Courier Information</TableCaption>
          <Thead>
            <Tr>
              <Th>Courrier id</Th>
              <Th>Client Name</Th>
              <Th>Adresse</Th>
              <Th>Prix</Th>
              <Th>Type</Th>
              <Th>Statue</Th>
              <Th>Download</Th> {/* New column for download */}
            </Tr>
          </Thead>
          <Tbody>
            {courierData.map((courier) => (
              <Tr key={courier.id}>
                <Td>{courier.courrierid}</Td>
                <Td>{courier.clientName}</Td>
                <Td>{courier.adresse}</Td>
                <Td>{courier.prix}</Td>
                <Td>{courier.type}</Td>
                <Td>{courier.status}</Td>
                <Td>
                  <AiOutlineDownload
                    size={20}
                    onClick={() => downloadCourier(courier)}
                  />
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default CourrierInformation;
