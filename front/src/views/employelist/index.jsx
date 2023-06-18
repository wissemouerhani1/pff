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
const EmployeList= () => {

  const [employeData,setEmployeData] = useState([])

  useEffect(() => {
     axios.get("http://localhost:3333/employe/getAllEmploye").then(res=>{
      setEmployeData(res.data)
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
    <TableCaption>Employe List</TableCaption>
    <Thead>

        
        <Tr>
        <Th>Name</Th>
        <Th>Last Name</Th>
        <Th >Cin</Th>
        <Th >Email</Th>
        <Th >Phone</Th>
        <Th>Delete</Th>
        </Tr>
    </Thead>
    <Tbody>
    
    
    {employeData?.map(e=>(
        
        <Tr>
              <Td>{e?.name} </Td>
        <Td>{e?.last_name}</Td>
        <Td >{e?.cin}</Td>
        <Td >{e?.email }</Td>
        <Td >{e?.phone}</Td>
       
       
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

export default EmployeList