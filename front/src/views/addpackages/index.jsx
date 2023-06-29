import React, { useState } from 'react'
import {
FormLabel,
Box,
Input,
FormControl,
Button,
Select
}from '@chakra-ui/react';
import axios from 'axios'
const AddPackages = () => {
  const [courrierid,setCourrierId]=useState("")
  const [name,setName]=useState("")
  const [lastName,setLastName]=useState("") 
  const [gouvernerat,setGouvernerat]=useState("") 
  const [adresse,setAdresse]=useState("") 
  const [type,setType]=useState("") 
   const [prix,setPrix]=useState("") 
  console.log({
    courrierid,name,lastName,gouvernerat,adresse,type,prix
  })
  
  const handleCreateCourrier = async()=> {
    try {
      
      await axios.post("http://localhost:3333/courrier/createCourrier",{
        courrierid,name,lastName,gouvernerat,adresse,type,prix
      })
      
    } catch (error) {
        console.log(error)
    }
  }

 
  
  return (
    <div> <br /><br /><br /><br /><br /><br /><br /><br /><br />
             <Box>
                <FormControl id="courrierid">
                  <FormLabel>Courrier ID</FormLabel>
                  <Input type="text" color={"white"} onChange={(e)=>setCourrierId(e.target.value)}/>
                </FormControl>
              </Box>
              <Box>
                <FormControl id="name">
                  <FormLabel>Name</FormLabel>
                  <Input type="text" color={"white"} onChange={(e)=>setName(e.target.value)}/>
                </FormControl>
              </Box>
              <Box>
                <FormControl id="lastname">
                  <FormLabel>Last Name</FormLabel>
                  <Input type="text" color={"white"} onChange={(e)=>setLastName(e.target.value)}/>
                </FormControl>
              </Box>
              <br />
              <Select placeholder='Gouvernerat'onChange={(e)=>setGouvernerat(e.target.value)}>
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
                  <Input type="text" color={"white"} onChange={(e)=>setAdresse(e.target.value)}/>
                </FormControl>
              </Box>
              <Box>
                <FormControl id="type">
                  <FormLabel>Type</FormLabel>
                  <Input type="text"color={"white"} onChange={(e)=>setType(e.target.value)} />
                </FormControl>
              </Box>
              <Box>
                <FormControl id="prix">
                  <FormLabel>Prix</FormLabel>
                  <Input type="text" color={"white"} onChange={(e)=>setPrix(e.target.value)}/>
                </FormControl>
              </Box>
              <Button
              onClick={handleCreateCourrier}
              colorScheme='blue'>Save</Button>
    </div>
  )
};


export default AddPackages;