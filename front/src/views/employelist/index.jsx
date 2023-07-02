import React, { useEffect, useState } from 'react';
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
} from '@chakra-ui/react';
import { AiFillDelete, AiOutlineEdit, AiOutlineSave } from 'react-icons/ai';
import axios from 'axios';

const UserList = () => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3333/employe/getAllEmploye').then((res) => {
      setUserData(res.data);
    });
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3333/employe/deleteEmploye/${id}`);
      setUserData((prevData) => prevData.filter((user) => user.id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  const handleEdit = (id) => {
    setUserData((prevData) =>
      prevData.map((user) => {
        if (user.id === id) {
          return { ...user, editing: true };
        }
        return user;
      })
    );
  };

  const handleSave = async (id) => {
    try {
      // Update the user data on the server
      const response = await axios.put(`http://localhost:3333/employe/updateEmploye/${id}`, {
        // Update the edited fields
        // ...
      });
      // Update the user data in the state
      setUserData((prevData) =>
        prevData.map((user) => {
          if (user.id === id) {
            return { ...user, editing: false, ...response.data };
          }
          return user;
        })
      );
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <TableContainer sx={{ marginTop: '6rem' }}>
        <Table variant="simple">
          <TableCaption>Employe List</TableCaption>
          <Thead>
            <Tr>
              <Th>Name</Th>
              <Th>Last Name</Th>
              <Th>Cin</Th>
              <Th>Email</Th>
              <Th>Phone</Th>
              <Th>Actions</Th>
            </Tr>
          </Thead>
          <Tbody>
            {userData?.map((user) => (
              <Tr key={user.id}>
                <Td>
                  {user.editing ? (
                    <input type="text" value={user.name} />
                  ) : (
                    user.name
                  )}
                </Td>
                <Td>
                  {user.editing ? (
                    <input type="text" value={user.last_name} />
                  ) : (
                    user.last_name
                  )}
                </Td>
                <Td>{user.cin}</Td>
                <Td>{user.email}</Td>
                <Td>{user.phone}</Td>
                <Td>
                  {user.editing ? (
                    <Icon
                      w="32px"
                      h="32px"
                      as={AiOutlineSave}
                      onClick={() => handleSave(user.id)}
                    />
                  ) : (
                    <Icon
                      w="32px"
                      h="32px"
                      as={AiOutlineEdit}
                      onClick={() => handleEdit(user.id)}
                    />
                  )}
                  <Icon
                    w="32px"
                    h="32px"
                    as={AiFillDelete}
                    onClick={() => handleDelete(user.id)}
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

export default UserList;
