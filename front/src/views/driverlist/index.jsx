import React, { useEffect, useState } from 'react';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Input,
  Icon,
  TableCaption,
  TableContainer,
} from '@chakra-ui/react';
import { AiFillDelete, AiOutlineEdit, AiOutlineSave } from 'react-icons/ai';
import axios from 'axios';

const DriverList = () => {
  const [userData, setUserData] = useState([]);
  const [editingDriver, setEditingDriver] = useState(null);
  const [editedValues, setEditedValues] = useState({});

  useEffect(() => {
    axios.get('http://localhost:3333/driver/getAllDriver').then((res) => {
      setUserData(res.data);
    });
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3333/driver/deleteDriver/${id}`);
      setUserData((prevData) => prevData.filter((driver) => driver.id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  const handleEdit = (driver) => {
    setEditingDriver(driver);
    setEditedValues({
      name: driver.name,
      last_name: driver.last_name,
      cin: driver.cin,
      vehicule_code: driver.vehicule_code,
      phone: driver.phone,
      email: driver.email,
    });
  };

  const handleSave = async (driver) => {
    try {
      await axios.put(`http://localhost:3333/driver/updateDriver/${driver.id}`, editedValues);
      setEditingDriver(null);
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
    <div style={{ marginTop: '6rem' }}>
      <TableContainer>
        <Table variant="simple">
          <TableCaption>Return Packages</TableCaption>
          <Thead>
            <Tr>
              <Th>Name</Th>
              <Th>Last Name</Th>
              <Th>Cin</Th>
              <Th>Vehicule Code</Th>
              <Th>Phone</Th>
              <Th>Email</Th>
              <Th>Edit</Th>
              <Th>Delete</Th>
            </Tr>
          </Thead>
          <Tbody>
            {userData?.map((driver) => (
              <Tr key={driver.id}>
                <Td>
                  {editingDriver === driver ? (
                    <Input
                      value={editedValues.name || ''}
                      onChange={(e) => handleInputChange(e, 'name')}
                    />
                  ) : (
                    driver.name
                  )}
                </Td>
                <Td>
                  {editingDriver === driver ? (
                    <Input
                      value={editedValues.last_name || ''}
                      onChange={(e) => handleInputChange(e, 'last_name')}
                    />
                  ) : (
                    driver.last_name
                  )}
                </Td>
                <Td>
                  {editingDriver === driver ? (
                    <Input
                      value={editedValues.cin || ''}
                      onChange={(e) => handleInputChange(e, 'cin')}
                    />
                  ) : (
                    driver.cin
                  )}
                </Td>
                <Td>
                  {editingDriver === driver ? (
                    <Input
                      value={editedValues.vehicule_code || ''}
                      onChange={(e) => handleInputChange(e, 'vehicule_code')}
                    />
                  ) : (
                    driver.vehicule_code
                  )}
                </Td>
                <Td>
                  {editingDriver === driver ? (
                    <Input
                      value={editedValues.phone || ''}
                      onChange={(e) => handleInputChange(e, 'phone')}
                    />
                  ) : (
                    driver.phone
                  )}
                </Td>
                <Td>
                  {editingDriver === driver ? (
                    <Input
                      value={editedValues.email || ''}
                      onChange={(e) => handleInputChange(e, 'email')}
                    />
                  ) : (
                    driver.email
                  )}
                </Td>
                <Td>
                  {editingDriver === driver ? (
                    <Icon
                      w="32px"
                      h="32px"
                      as={AiOutlineSave}
                      onClick={() => handleSave(driver)}
                    />
                  ) : (
                    <Icon
                      w="32px"
                      h="32px"
                      as={AiOutlineEdit}
                      onClick={() => handleEdit(driver)}
                    />
                  )}
                </Td>
                <Td>
                  <Icon
                    w="32px"
                    h="32px"
                    as={AiFillDelete}
                    onClick={() => handleDelete(driver.id)}
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

export default DriverList;
