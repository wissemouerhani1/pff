import React, { useState } from 'react';
import {
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

import axios from 'axios'
const CreateEmploye = () => {
  const [showPassword, setShowPassword] = useState(false);
  
  const [name,setName]=useState("")
  const [last_name,setLastName]=useState("")
  const [email,setEmail]=useState("")
  const [phone,setPhone]=useState("")
  const [cin,setCin]=useState("")
  const [password,setPassword]=useState("")
    console.log({
      name,last_name,email,phone,cin,password
    })
  const handleCreateEmploye = async()=> {
    try {
      
      await axios.post("http://localhost:3333/employe/createEmploye",{
        name,last_name,email,phone,cin,password
      })
      
    } catch (error) {
        console.log(error)
    }
  }
  

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
              Create New Empolye
            </Heading>
          </Stack>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}
          >
            <Stack spacing={4}>
              <HStack>
                <Box>
                  <FormControl id="firstName" isRequired>
                    <FormLabel>First Name</FormLabel>
                    <Input type="text" color={"white"} onChange={(e)=>setName(e.target.value)} />
                  </FormControl>
                </Box>
                <Box>
                  <FormControl id="lastName">
                    <FormLabel>Last Name</FormLabel>
                    <Input type="text"color={"white"}  onChange={(e)=>setLastName(e.target.value)}/>
                  </FormControl>
                </Box>
                <Box>
                  <FormControl id="cin">
                    <FormLabel>CIN</FormLabel>
                    <Input type="text" color={"white"} onChange={(e)=>setCin(e.target.value)} />
                  </FormControl>
                </Box>
              </HStack>
              <FormControl id="email" isRequired>
                <FormLabel>Email address</FormLabel>
                <Input type="email"color={"white"}  onChange={(e)=>setEmail(e.target.value)}/>
              </FormControl>
              <Box>
                <FormControl id="phonenumber">
                  <FormLabel>Phone Number</FormLabel>
                  <Input type="text" color={"white"} onChange={(e)=>setPhone(e.target.value)} />
                </FormControl>
              </Box>
              
              <FormControl id="password" isRequired>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                  <Input type={showPassword ? 'text' : 'password'} color={"white"} onChange={(e)=>setPassword(e.target.value)}/>
                  <InputRightElement h={'full'}>
                    <Button
                      variant={'ghost'}
                      onClick={() =>
                        setShowPassword((showPassword) => !showPassword)
                      }
                    >
                      {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <Stack spacing={10} pt={2}>
                <Button
                onClick={handleCreateEmploye}
                  loadingText="Submitting"
                  size="lg"
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }}
                >
                  Create
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

export default CreateEmploye;
