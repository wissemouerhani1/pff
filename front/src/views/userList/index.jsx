import React,{useEffect,useState} from 'react'
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    Icon,
    TableCaption,
    TableContainer,
  } from '@chakra-ui/react'
  import {
    AiFillDelete,
  } from "react-icons/ai";

import axios from 'axios'
const UserList= () => {

  const [userData,setUserData] = useState([])

  useEffect(() => {
     axios.get("http://localhost:3333/customer/getAllCustomer").then(res=>{
      setUserData(res.data)
     })   
  }, [])
  


  return (
    <div>
        <TableContainer
          sx={{
            marginTop:"6rem"
          }}
        >
  <Table variant='simple'>
    <TableCaption>User List</TableCaption>
    <Thead>

        
        <Tr>
        <Th>Name</Th>
        <Th>Last Name</Th>
        <Th >Cin</Th>
        <Th >Email</Th>
        <Th >Phone</Th>
        <Th >Delete</Th>
        </Tr>
    </Thead>
    <Tbody>
    
    
    {userData?.map(e=>(
        
        <Tr>
        <Th>{e?.name}</Th>
        <Th>{e?.last_name}</Th>
        <Th >{e?.cin}</Th>
        <Th >{e?.email}</Th>
        <Th >{e?.phone}</Th>
        <Td >{
                <Icon w='32px' h='32px' as={AiFillDelete}  />
              }</Td>
        
        </Tr>
      ))
        }
    </Tbody>
  
  </Table>
</TableContainer>
    </div>
  )
}

export default UserList