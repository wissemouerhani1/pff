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
  Button,
} from '@chakra-ui/react';
import { AiFillDelete, AiOutlineEdit } from 'react-icons/ai';
import axios from 'axios';

const UserList = () => {
  const [userData, setUserData] = useState([]);
  const [editingUser, setEditingUser] = useState(null);
  const [editedValues, setEditedValues] = useState({});

  useEffect(() => {
    axios.get('http://localhost:3333/customer/getAllCustomer').then((res) => {
      setUserData(res.data);
    });
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3333/customer/deleteCustomer/${id}`);
      setUserData((prevData) => prevData.filter((user) => user.id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  const handleEdit = (user) => {
    setEditingUser(user);
    setEditedValues({
      name: user.name,
      last_name: user.last_name,
      cin: user.cin,
      email: user.email,
      phone: user.phone,
    });
  };

  const handleSave = async (user) => {
    try {
      await axios.put(`http://localhost:3333/customer/updateCustomer/${user.id}`, editedValues);
      setEditingUser(null);
      setEditedValues({});
    } catch (error) {
      console.error(error);
    }
  };

  const handleInputChange = (e, key) => {
    const { value } = e.target;
    setEditedValues((prevValues) => ({
      ...prevValues,
      [key]: value,
    }));
  };

  return (
    <div>
      <TableContainer sx={{ marginTop: '6rem' }}>
        <Table variant="simple">
          <TableCaption>User List</TableCaption>
          <Thead>
            <Tr>
              <Th>Name</Th>
              <Th>Last Name</Th>
              <Th>Cin</Th>
              <Th>Email</Th>
              <Th>Phone</Th>
              <Th>Edit</Th>
              <Th>Delete</Th>
            </Tr>
          </Thead>
          <Tbody>
            {userData?.map((user) => (
              <Tr key={user.id}>
                <Td>
                  {editingUser === user ? (
                    <input
                      value={editedValues.name || ''}
                      onChange={(e) => handleInputChange(e, 'name')}
                    />
                  ) : (
                    user.name
                  )}
                </Td>
                <Td>
                  {editingUser === user ? (
                    <input
                      value={editedValues.last_name || ''}
                      onChange={(e) => handleInputChange(e, 'last_name')}
                    />
                  ) : (
                    user.last_name
                  )}
                </Td>
                <Td>
                  {editingUser === user ? (
                    <input
                      value={editedValues.cin || ''}
                      onChange={(e) => handleInputChange(e, 'cin')}
                    />
                  ) : (
                    user.cin
                  )}
                </Td>
                <Td>
                  {editingUser === user ? (
                    <input
                      value={editedValues.email || ''}
                      onChange={(e) => handleInputChange(e, 'email')}
                    />
                  ) : (
                    user.email
                  )}
                </Td>
                <Td>
                  {editingUser === user ? (
                    <input
                      value={editedValues.phone || ''}
                      onChange={(e) => handleInputChange(e, 'phone')}
                    />
                  ) : (
                    user.phone
                  )}
                </Td>
                <Td>
                  {editingUser === user ? (
                    <Button size="sm" onClick={() => handleSave(user)}>
                      Save
                    </Button>
                  ) : (
                    <Icon
                      w="32px"
                      h="32px"
                      as={AiOutlineEdit}
                      onClick={() => handleEdit(user)}
                    />
                  )}
                </Td>
                <Td>
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
