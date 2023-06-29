import React, { useEffect, useState } from 'react';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Icon,
  TableCaption,
  TableContainer,
  Button,
} from '@chakra-ui/react';
import { AiFillDelete } from 'react-icons/ai';
import { saveAs } from 'file-saver';
import { read, utils } from 'xlsx';
import axios from 'axios';
import { PDFDocument, rgb } from 'pdf-lib';

const UserList = () => {
  const [excelFile, setExcelFile] = useState(null);
  const [userData, setUserData] = useState([]);

  const handleFileChange = (e) => {
    setExcelFile(e.target.files[0]);
  };

  useEffect(() => {
    if (excelFile) {
      const reader = new FileReader();
      reader.onload = function (e) {
        const data = new Uint8Array(e.target.result);
        const workbook = read(data, { type: 'array' });
        const worksheet = workbook.Sheets[workbook.SheetNames[0]];
        const excelData = utils.sheet_to_json(worksheet, { header: 1 });

        const users = excelData.slice(1).map((row) => ({
          name: row[0],
          last_name: row[1],
          cin: row[2],
          email: row[3],
          phone: row[4],
        }));

        setUserData(users);
      };

      reader.readAsArrayBuffer(excelFile);
    }
  }, [excelFile]);

  useEffect(() => {
    axios.get('http://localhost:3333/customer/getAllCustomer').then((res) => {
      setUserData(res.data);
    });
  }, []);

  const generatePdf = async () => {
    try {
      const pdfDoc = await PDFDocument.create();
      const page = pdfDoc.addPage();

      const { width, height } = page.getSize();
      const fontSize = 12;
      const textX = 50;
      let textY = height - 50;

      userData.forEach((user) => {
        page.drawText(`Name: ${user.name}`, {
          x: textX,
          y: textY,
          size: fontSize,
          color: rgb(0, 0, 0),
        });
        textY -= fontSize + 5;
        page.drawText(`Last Name: ${user.last_name}`, {
          x: textX,
          y: textY,
          size: fontSize,
          color: rgb(0, 0, 0),
        });
        textY -= fontSize + 5;
        page.drawText(`Cin: ${user.cin}`, {
          x: textX,
          y: textY,
          size: fontSize,
          color: rgb(0, 0, 0),
        });
        textY -= fontSize + 5;
        page.drawText(`Email: ${user.email}`, {
          x: textX,
          y: textY,
          size: fontSize,
          color: rgb(0, 0, 0),
        });
        textY -= fontSize + 5;
        page.drawText(`Phone: ${user.phone}`, {
          x: textX,
          y: textY,
          size: fontSize,
          color: rgb(0, 0, 0),
        });
        textY -= fontSize + 10;
      });

      const pdfBytes = await pdfDoc.save();

      const blob = new Blob([pdfBytes], { type: 'application/pdf' });
      saveAs(blob, 'updated_user_list.pdf');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <input type="file" accept=".xlsx" onChange={handleFileChange} />

      <TableContainer sx={{ marginTop: '6rem' }}>
        <Table variant="simple">
          <TableCaption>User List</TableCaption>
          <Thead>
            <Tr>
              <Th>Name</Th>
              <Th>Last Name</Th>
              <Th>Cin</Th>
              <Th>Email</Th>
              <Th>Phone</Th>
              <Th>Delete</Th>
            </Tr>
          </Thead>
          <Tbody>
            {userData?.map((user, index) => (
              <Tr key={index}>
                <Th>{user.name}</Th>
                <Th>{user.last_name}</Th>
                <Th>{user.cin}</Th>
                <Th>{user.email}</Th>
                <Th>{user.phone}</Th>
                <Td>
                  <Icon w="32px" h="32px" as={AiFillDelete} />
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
      <Button onClick={generatePdf} mt="4">
        Generate PDF
      </Button>
    </div>
  );
};

export default UserList;
