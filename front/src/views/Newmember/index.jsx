import React, { useEffect, useState } from 'react';
import {  AlertDialog, AlertDialogBody, AlertDialogFooter, AlertDialogHeader, AlertDialogContent, AlertDialogOverlay, Button } from '@chakra-ui/react';


import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Icon,
  TableCaption,
  TableContainer,
  Spinner,
} from '@chakra-ui/react';
import { AiFillDelete } from 'react-icons/ai';

import axios from 'axios';

const NewmemberList = ({ becomememberID })  => {
    
  const [becomememberData, setBecomeMemberData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');

  const onClose = () => 
    setIsOpen(false);
  useEffect(() => {
    axios.get('http://localhost:3333/becomemember/getAllBecomeMember').then(res => {
      setBecomeMemberData(res.data);
      setIsLoading(false);
    });
  }, []);
  const handleDelete = async () => {
    try {
      const response = await axios.delete(`/deleteBecomeMember/${becomememberID}`);
      setMessage(response.data); // Update the message state with the response
    } catch (error) {
      console.error(error);
    }
    onClose();
    
  
  };
  if (isLoading) {
    return (
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="blue.500"
        size="xl"
        marginTop="6rem"
      />
    );
  }

  return (
    <div>
      <TableContainer sx={{ marginTop: '6rem' }}>
        <Table variant="simple">
          <TableCaption>New Member List</TableCaption>
          <Thead>
            <Tr>
              <Th>Name</Th>
              <Th>Last Name</Th>
              <Th>Cin</Th>
              <Th>Email</Th>
              <Th>Phone</Th>
              <Th>Adresse</Th>
              <Th>Business Name</Th>

              <Th>Delete</Th>
            </Tr>
          </Thead>
          <Tbody>
            {becomememberData?.map(e => (
              <Tr key={e.id}>
                <Td>{e?.name}</Td>
                <Td>{e?.last_name}</Td>
                <Td>{e?.cin}</Td>
                <Td>{e?.email}</Td>
                <Td>{e?.phone}</Td>
                <Td>{e?.adresse}</Td>
                <Td>{e?.business_name}</Td>
                 <Td>
      <Button onClick={() => setIsOpen(true)}>
        <Icon w="32px" h="32px" as={AiFillDelete} />
      </Button>

      <AlertDialog isOpen={isOpen} onClose={onClose} motionPreset="slideInBottom">
        <AlertDialogOverlay />
        <AlertDialogContent>
          <AlertDialogHeader>Delete Member</AlertDialogHeader>
          <AlertDialogBody>Are you sure you want to delete this member?</AlertDialogBody>
          <AlertDialogFooter>
            <Button onClick={onClose}>Cancel</Button>
            <Button colorScheme="red" ml={3} onClick={handleDelete}>
              Delete
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      {message && <p>{message}</p>}
    </Td>



              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default NewmemberList;
