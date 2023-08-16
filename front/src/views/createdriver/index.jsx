import React, { useEffect, useState } from 'react';
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
  Select,
  AlertDialog,
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogBody,
  AlertDialogFooter,
} from '@chakra-ui/react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import axios from 'axios';

const CreateDriver = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [userCreated, setUserCreated] = useState(false);

  const [name, setName] = useState('');
  const [last_name, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [cin, setCin] = useState('');
  const [password, setPassword] = useState('');
  const [vehiculeCodeData, setVehiculeCodeData] = useState([]);
  const [selectedVehiculeCode, setSelectedVehiculeCode] = useState('');
  const [showDialog, setShowDialog] = useState(false);

  useEffect(() => {
    axios.get('http://localhost:3333/vehicule/getAllVehiculeCode').then((res) => {
      setVehiculeCodeData(res.data);
    });
  }, []);

  const handleCreateDriver = async () => {
    try {
      await axios.post('http://localhost:3333/driver/createDriver', {
        name,
        last_name,
        email,
        phone,
        cin,
        password,
        vehiculeCode: selectedVehiculeCode,
      });
      setUserCreated(true);
      setShowDialog(true);
      // Reset input fields after successful driver creation
      setName('');
      setLastName('');
      setEmail('');
      setPhone('');
      setCin('');
      setPassword('');
      setSelectedVehiculeCode('');
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (userCreated) {
      const timer = setTimeout(() => {
        setShowDialog(false);
        setUserCreated(false); // Reset userCreated state
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [userCreated]);

  return (
    <div>
      <br />
      <br />
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}
      >
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'} textAlign={'center'}>
              Create New Driver
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
                    <Input
                      type="text"
                  
                      onChange={(e) => setName(e.target.value)}
                    />
                  </FormControl>
                </Box>
                <Box>
                  <FormControl id="lastName" isRequired>
                    <FormLabel>Last Name</FormLabel>
                    <Input
                      type="text"
                  
                      onChange={(e) => setLastName(e.target.value)}
                    />
                  </FormControl>
                </Box>
                <Box>
                  <FormControl id="cin" isRequired>
                    <FormLabel>CIN</FormLabel>
                    <Input
                      type="text"
                    
                      onChange={(e) => setCin(e.target.value)}
                    />
                  </FormControl>
                </Box>
              </HStack>
              <FormControl id="email" isRequired>
                <FormLabel>Email address</FormLabel>
                <Input
                  type="email"
                  
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FormControl>
              <Box>
                <FormControl id="phonenumber" isRequired>
                  <FormLabel>Phone Number</FormLabel>
                  <Input
                    type="text"
                  
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </FormControl>
              </Box>
              <Box>
                <Select
                  placeholder="Vehicule Code"
                  value={selectedVehiculeCode}
                  onChange={(e) => setSelectedVehiculeCode(e.target.value)}
                >
                  {vehiculeCodeData.map((e) => (
                    <option key={e} value={e}>
                      {e}
                    </option>
                  ))}
                </Select>
              </Box>
              <FormControl id="password" isRequired>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                  <Input
                    type={showPassword ? 'text' : 'password'}
                  
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <InputRightElement h={'full'}>
                    <Button
                      variant={'ghost'}
                      onClick={() => setShowPassword((showPassword) => !showPassword)}
                    >
                      {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <Stack spacing={10} pt={2}>
                <Button
                  onClick={handleCreateDriver}
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

      <AlertDialog isOpen={showDialog} onClose={() => setShowDialog(false)}>
        <AlertDialogOverlay />
        <AlertDialogContent>
          <AlertDialogHeader>Success</AlertDialogHeader>
          <AlertDialogBody>Driver created successfully!</AlertDialogBody>
          <AlertDialogFooter>
            <Button
              colorScheme="blue"
              onClick={() => {
                setShowDialog(false);
                setUserCreated(false); // Reset userCreated state
              }}
              ml={3}
            >
              Close
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default CreateDriver;
