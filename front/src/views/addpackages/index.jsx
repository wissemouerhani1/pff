import React from 'react'
import {
FormLabel,
Box,
Input,
FormControl,
Button,
Select
}from '@chakra-ui/react';

const AddPackages = () => {
  return (
    <div> <br /><br /><br /><br /><br /><br /><br /><br /><br />
             <Box>
                <FormControl id="courrierid">
                  <FormLabel>Courrier ID</FormLabel>
                  <Input type="text" />
                </FormControl>
              </Box>
              <Box>
                <FormControl id="name">
                  <FormLabel>Name</FormLabel>
                  <Input type="text" />
                </FormControl>
              </Box>
              <Box>
                <FormControl id="lastname">
                  <FormLabel>Last Name</FormLabel>
                  <Input type="text" />
                </FormControl>
              </Box>
              <br />
              <Select placeholder='Gouvernerat'>
  <option value='option1'>Ariana</option>
  <option value='option2'>Beja</option>
  <option value='option3'>Ben Arous</option>
  <option value='option3'>Bizerte</option>
  <option value='option3'>Gabes</option>
  <option value='option3'>Gafsa</option>
  <option value='option3'>Jendouba</option>
  <option value='option3'>Kairouan</option>
  <option value='option3'>Kasserine</option>
  <option value='option3'>Kebili</option>
  <option value='option3'>Le kef</option>
  <option value='option3'>Mahdia</option>
  <option value='option3'>La Manouba</option>
  <option value='option3'>Medenine</option>
  <option value='option3'>Monastire</option>
  <option value='option3'>Nabeul</option>
  <option value='option3'>Sfax</option>
  <option value='option3'>Sidi Bouzid</option>
  <option value='option3'>Siliana</option>
  <option value='option3'>Sousse</option>
  <option value='option3'>Tataouine</option>
  <option value='option3'>Tozeur</option>
  <option value='option3'>Tunis</option>
  <option value='option3'>Zaghouan</option>
  
</Select>
<br />
              <Box>
                <FormControl id="adresse">
                  <FormLabel>Adresse</FormLabel>
                  <Input type="text" />
                </FormControl>
              </Box>
              <Box>
                <FormControl id="type">
                  <FormLabel>Type</FormLabel>
                  <Input type="text" />
                </FormControl>
              </Box>
              <Box>
                <FormControl id="prix">
                  <FormLabel>Prix</FormLabel>
                  <Input type="text" />
                </FormControl>
              </Box>
              <Button colorScheme='blue'>Save</Button>
    </div>
  )
}

export default AddPackages