import React, { useState } from 'react';
import {
  Select,
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  useColorModeValue,
} from '@chakra-ui/react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';

const AddVehicule = () => {
  

  return (
    <div>
  <br /><br />
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}
      >
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'} textAlign={'center'}>
              Add Vehicule
            </Heading>
          </Stack>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}
          >
            <Stack spacing={4}>
              
                <Box>
                  
                
                <Select placeholder='Vehicule Type'>
  <option value='option1'>Fiat</option>
  <option value='option2'>Peugeot</option>
  <option value='option3'>Citroen</option>
  
</Select>
               </Box>
                <Box>
                  <FormControl id="matricule">
                    <FormLabel>Matricule</FormLabel>
                    <Input type="text" />
                  </FormControl>
                </Box>
              
              <Box>
                <FormControl id="vehiculecode">
                  <FormLabel>Vehicule Code</FormLabel>
                  <Input type="text" />
                </FormControl>
              </Box>
              
              <Stack spacing={10} pt={2}>
                <Button
                  loadingText="Submitting"
                  size="lg"
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }}
                >
                  ADD
                </Button>
              </Stack>
              <Stack pt={6}></Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
      </div>  
  );
  
};

export default AddVehicule;
