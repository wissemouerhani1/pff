import React from 'react'
import { Link } from 'react-router-dom';
import {
  Button,
  Stack,
  Box,
  Flex,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';


const Employe = () => {
  return (
    <div>
      
      <br /><br /><br /><br /><br /><br /><br /><br />
      <Stack direction='row' spacing={4} align='center'>
        <Button as={Link} to='/admin/createdriver' colorScheme='blue'>Create Driver</Button>
        <Button as={Link} to='/admin/driverlist' colorScheme='blue'>Driver list</Button>
        <Button as={Link} to='/admin/customerlist' colorScheme='blue'>User list</Button>
        <Button colorScheme='blue'>All Packages</Button>
      </Stack>
    </div>
  )
}

export default Employe