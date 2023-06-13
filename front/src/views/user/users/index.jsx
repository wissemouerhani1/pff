import React from 'react';
import { Link } from 'react-router-dom';
import {
  Button,
  Stack,
  Box,
  Flex,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import Card from "components/card/Card.js";

const Users = () => {
  const textColor = useColorModeValue("secondaryGray.900", "white");

  return (
    <div>
      <br /> <br /><br /><br /><br /><br /><br /><br />
      <Stack direction='row' spacing={4} align='center'>
        <Button as={Link} to='/admin/add_packages' colorScheme='blue'>Add Courier</Button>
        <Button as={Link} to='/admin/courier_information' colorScheme='blue'>Courier Information</Button>
        <Button colorScheme='blue'>Track Your Packages</Button>
      </Stack>
      <br /><br /><br /><br />
      <Card align='center' direction='column' w='100%'>
        <Flex align='center' w='100%' px='15px' py='10px'>
          <Text
            me='auto'
            color={textColor}
            fontSize='xl'
            fontWeight='700'
            lineHeight='100%'>
Your Information     </Text>
          
        </Flex>
        <Box h='240px' mt='auto'>
         
Registered packages
<br /> <br />
Pickups
<br /><br />
Delivered Courrier
<br /><br />
At The Storage Warehouse
          
        </Box>
      </Card>
    </div>
  );
};

export default Users;
