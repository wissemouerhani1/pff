import React,{useEffect,useState} from 'react'
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
  } from '@chakra-ui/react'
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
        </Tr>
    </Thead>
    <Tbody>
    
    
    {employeData?.map(e=>(
        
        <Tr>
        <Th>{e?.name}</Th>
        <Th>{e?.last_name}</Th>
        <Th >{e?.cin}</Th>
        <Th >{e?.email}</Th>
        <Th >{e?.phone}</Th>
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