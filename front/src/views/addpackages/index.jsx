import React, { useState } from 'react';
import { FormLabel, Box, Input, FormControl, Button, Select } from '@chakra-ui/react';
import axios from 'axios';

const AddPackages = () => {
  const [courrierid, setCourrierId] = useState('');
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [gouvernerat, setGouvernerat] = useState('');
  const [adresse, setAdresse] = useState('');
  const [phone, setPhone] = useState('');
  const [quantity, setQuantity] = useState('');
  const [type, setType] = useState('');
  const [prix, setPrix] = useState('');

  console.log({
    courrierid,
    name,
    lastName,
    gouvernerat,
    adresse,
    phone,
    quantity,
    type,
    prix,
  });

  const handleCreateCourrier = async () => {
    try {
      await axios.post('http://localhost:3333/courrier/createCourrier', {
        courrierid,
        name,
        lastName,
        gouvernerat,
        adresse,
        phone,
        quantity,
        type,
        prix,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <br /><br /><br /><br /><br /><br /><br /><br /><br />
      <Box>
        <FormControl id="courrierid">
          <FormLabel>Courrier ID</FormLabel>
          <Input type="text" color={'white'} onChange={(e) => setCourrierId(e.target.value)} />
        </FormControl>
      </Box>
      <Box>
        <FormControl id="name">
          <FormLabel>Name</FormLabel>
          <Input type="text" color={'white'} onChange={(e) => setName(e.target.value)} />
        </FormControl>
      </Box>
      <Box>
        <FormControl id="lastname">
          <FormLabel>Last Name</FormLabel>
          <Input type="text" color={'white'} onChange={(e) => setLastName(e.target.value)} />
        </FormControl>
      </Box>
      <br />
      <Select placeholder="Gouvernerat" onChange={(e) => setGouvernerat(e.target.value)}>
        <option value="Ariana">Ariana</option>
        <option value="Beja">Beja</option>
        <option value="Ben Arous">Ben Arous</option>
        <option value="Bizerte">Bizerte</option>
        <option value="Gabes">Gabes</option>
        <option value="Gafsa">Gafsa</option>
        <option value="Jendouba">Jendouba</option>
        <option value="Kairouan">Kairouan</option>
        <option value="Kasserine">Kasserine</option>
        <option value="Kebili">Kebili</option>
        <option value="Le kef">Le kef</option>
        <option value="Mahdia">Mahdia</option>
        <option value="La Manouba">La Manouba</option>
        <option value="Medenine">Medenine</option>
        <option value="Monastire">Monastire</option>
        <option value="Nabeul">Nabeul</option>
        <option value="Sfax">Sfax</option>
        <option value="Sidi Bouzid">Sidi Bouzid</option>
        <option value="Siliana">Siliana</option>
        <option value="Sousse">Sousse</option>
        <option value="Tataouine">Tataouine</option>
        <option value="Tozeur">Tozeur</option>
        <option value="Tunis">Tunis</option>
        <option value="Zaghouan">Zaghouan</option>
      </Select>
      <br />
      <Box>
        <FormControl id="adresse">
          <FormLabel>Adresse</FormLabel>
          <Input type="text" color={'white'} onChange={(e) => setAdresse(e.target.value)} />
        </FormControl>
      </Box>
      <Box>
        <FormControl id="phone">
          <FormLabel>Phone</FormLabel>
          <Input type="text" color={'white'} onChange={(e) => setPhone(e.target.value)} />
        </FormControl>
      </Box>
      <Box>
        <FormControl id="Quantity">
          <FormLabel>Quantity</FormLabel>
          <Input type="text" color={'white'} onChange={(e) => setQuantity(e.target.value)} />
        </FormControl>
      </Box>
      <Box>
        <FormControl id="type">
          <FormLabel>Type</FormLabel>
          <Input type="text" color={'white'} onChange={(e) => setType(e.target.value)} />
        </FormControl>
      </Box>
      <Box>
        <FormControl id="prix">
          <FormLabel>Prix</FormLabel>
          <Input type="text" color={'white'} onChange={(e) => setPrix(e.target.value)} />
        </FormControl>
      </Box>
      <Button onClick={handleCreateCourrier} colorScheme="blue">
        Save
      </Button>
    </div>
  );
};

export default AddPackages;
