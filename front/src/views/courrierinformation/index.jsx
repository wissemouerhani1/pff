import React, { useState, useEffect } from 'react';
import { Table, Thead, Tbody, Tr, Th, Td, TableCaption, TableContainer } from '@chakra-ui/react';
import axios from 'axios';
import { AiOutlineDownload } from 'react-icons/ai';
import { QRCode } from 'react-qr-code';
import { toDataURL } from 'qrcode';
import jsPDF from 'jspdf';

const CourrierInformation = () => {
  const [courierData, setCourierData] = useState([]);

  useEffect(() => {
    const fetchCourierData = async () => {
      try {
        const response = await axios.get('http://localhost:3333/courrier/getAllCourrier');
        const data = response.data;
        setCourierData(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCourierData();
  }, []);

  const generateQRCodePDF = async (courier) => {
    const doc = new jsPDF();

    // Generate QR code with courier information
    const qrCodeData = JSON.stringify(courier);

    // Convert QR code to data URL
    const qrCodeDataURL = await toDataURL(qrCodeData);

    // Get page dimensions
    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.getHeight();

    // Calculate position to center QR code
    const qrCodeWidth = 50; // Width of the QR code
    const qrCodeHeight = 50; // Height of the QR code
    const xPos = (pageWidth - qrCodeWidth) / 2;
    const yPos = (pageHeight - qrCodeHeight) / 2;

    // Add QR code to the PDF document at the center
    doc.addImage(qrCodeDataURL, 'PNG', xPos, yPos, qrCodeWidth, qrCodeHeight);

    // Save the PDF file
    doc.save(`courier_${courier.courrierid}_qr.pdf`);
  };

  return (
    <div>
      <TableContainer>
        <Table variant="simple">
          <TableCaption>Courier Information</TableCaption>
          <Thead>
            <Tr>
              <Th>Courrier ID</Th>
              <Th>Client Name</Th>
              <Th>Adresse</Th>
              <Th>Prix</Th>
              <Th>Type</Th>
              <Th>Status</Th>
              <Th>Download</Th> {/* New column for download */}
            </Tr>
          </Thead>
          <Tbody>
            {courierData.map((courier) => (
              <Tr key={courier.id}>
                <Td>{courier.courrierid}</Td>
                <Td>{courier.clientName}</Td>
                <Td>{courier.adresse}</Td>
                <Td>{courier.prix}</Td>
                <Td>{courier.type}</Td>
                <Td>{courier.status}</Td>
                <Td>
                  <AiOutlineDownload
                    size={20}
                    onClick={() => generateQRCodePDF(courier)}
                  />
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default CourrierInformation;
