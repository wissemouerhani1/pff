import React, { useState, useEffect, useRef } from 'react';
import { Table, Thead, Tbody, Tr, Th, Td, TableCaption, TableContainer, Input } from '@chakra-ui/react';
import axios from 'axios';
import { AiOutlineDownload, AiOutlineDelete, AiOutlineEdit, AiOutlineSave } from 'react-icons/ai';
import { toDataURL } from 'qrcode';
import jsPDF from 'jspdf';
import JsBarcode from 'jsbarcode';
import modelImage from 'assets/model.png';

const CourrierInformation = () => {
  const [courierData, setCourierData] = useState([]);
  const [editingCourier, setEditingCourier] = useState(null);
  const [editedValues, setEditedValues] = useState({});
  const canvasRef = useRef(null);

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

    // Calculate position to place the barcode at the top right
    const barcodeWidth = 50; // Width of the barcode
    const barcodeHeight = 50; // Height of the barcode
    const xPos = pageWidth - barcodeWidth - 10; // 10 is the margin from the right edge
    const yPos = 10; // 10 is the margin from the top edge

    // Render barcode on a canvas element
    JsBarcode(canvasRef.current, courier.courrierid);

    // Get the base64 data URL of the canvas image
    const barcodeDataURL = canvasRef.current.toDataURL('image/png');

    // Add barcode to the PDF document at the top right
    doc.addImage(barcodeDataURL, 'PNG', xPos, yPos, barcodeWidth, barcodeHeight);

    // Add QR code to the PDF document
    doc.addImage(qrCodeDataURL, 'PNG', 10, 10, 50, 50);

    // Calculate the size and position of the image to cover the entire page
    const imageWidth = pageWidth;
    const imageHeight = pageHeight - 100; // Subtracting 100 to accommodate the table
    const imageXPos = 0;
    const imageYPos = 100; // Starting below the table

    // Add model image to the PDF document
    doc.addImage(modelImage, 'PNG', imageXPos, imageYPos, imageWidth, imageHeight);

    // Save the PDF file
    doc.save(`courier_${courier.courrierid}_qr.pdf`);
  };

  const deleteCourier = async (courier) => {
    try {
      await axios.delete(`http://localhost:3333/courrier/deleteCourrier/${courier.id}`);
      setCourierData((prevData) => prevData.filter((item) => item.id !== courier.id));
    } catch (error) {
      console.error(error);
    }
  };

  const handleUpdate = (courier) => {
    setEditingCourier(courier);
    setEditedValues({
      name: courier.name,
      adresse: courier.adresse,
      phone: courier.phone,
      quantity: courier.quantity,
      prix: courier.prix,
      type: courier.type,
      status: courier.status,
    });
  };

  const handleSave = async (courier) => {
    try {
      await axios.put(`http://localhost:3333/courrier/updateCourrier/${courier.id}`, {
        ...editedValues,
        phone: editedValues.phone || courier.phone,
        quantity: editedValues.quantity || courier.quantity,
      });
      setEditingCourier(null);
      setEditedValues({});
    } catch (error) {
      console.error(error);
    }
  };

  const handleInputChange = (e, key) => {
    const { value } = e.target;
    setEditedValues((prevValues) => ({
      ...prevValues,
      [key]: value,
    }));
  };

  return (
    <div>
      <canvas ref={canvasRef} style={{ display: 'none' }} />
      <TableContainer sx={{ marginTop: '6rem' }}>
        <Table variant="simple">
          <TableCaption>Courier Information</TableCaption>
          <Thead>
            <Tr>
              <Th>Courier ID</Th>
              <Th>Client Name</Th>
              <Th>Adresse</Th>
              <Th>Phone</Th>
              <Th>Quantity</Th>
              <Th>Prix</Th>
              <Th>Type</Th>
              <Th>Status</Th>
              <Th>Download</Th> {/* New column for download */}
              <Th>Edit</Th> {/* New column for edit */}
              <Th>Delete</Th> {/* New column for delete */}
            </Tr>
          </Thead>
          <Tbody>
            {courierData.map((courier) => (
              <Tr key={courier.id}>
                <Td>{courier.courrierid}</Td>
                <Td>
                  {editingCourier === courier ? (
                    <Input
                      value={editedValues.name || ''}
                      onChange={(e) => handleInputChange(e, 'name')}
                      placeholder="Client Name"
                    />
                  ) : (
                    courier.name
                  )}
                </Td>
                <Td>
                  {editingCourier === courier ? (
                    <Input
                      value={editedValues.adresse || ''}
                      onChange={(e) => handleInputChange(e, 'adresse')}
                      placeholder="Adresse"
                    />
                  ) : (
                    courier.adresse
                  )}
                </Td>
                <Td>
                  {editingCourier === courier ? (
                    <Input
                      value={editedValues.phone || ''}
                      onChange={(e) => handleInputChange(e, 'phone')}
                      placeholder="Phone"
                    />
                  ) : (
                    courier.phone
                  )}
                </Td>
                <Td>
                  {editingCourier === courier ? (
                    <Input
                      value={editedValues.quantity || ''}
                      onChange={(e) => handleInputChange(e, 'quantity')}
                      placeholder="Quantity"
                    />
                  ) : (
                    courier.quantity
                  )}
                </Td>
                <Td>
                  {editingCourier === courier ? (
                    <Input
                      value={editedValues.prix || ''}
                      onChange={(e) => handleInputChange(e, 'prix')}
                      placeholder="Prix"
                    />
                  ) : (
                    courier.prix
                  )}
                </Td>
                <Td>
                  {editingCourier === courier ? (
                    <Input
                      value={editedValues.type || ''}
                      onChange={(e) => handleInputChange(e, 'type')}
                      placeholder="Type"
                    />
                  ) : (
                    courier.type
                  )}
                </Td>
                <Td>
                  {editingCourier === courier ? (
                    <Input
                      value={editedValues.status || ''}
                      onChange={(e) => handleInputChange(e, 'status')}
                      placeholder="Status"
                    />
                  ) : (
                    courier.status
                  )}
                </Td>
                <Td>
                  <AiOutlineDownload
                    size={20}
                    onClick={() => generateQRCodePDF(courier)}
                  />
                </Td>
                <Td>
                  {editingCourier === courier ? (
                    <AiOutlineSave
                      size={20}
                      onClick={() => handleSave(courier)}
                    />
                  ) : (
                    <AiOutlineEdit
                      size={20}
                      onClick={() => handleUpdate(courier)}
                    />
                  )}
                </Td>
                <Td>
                  <AiOutlineDelete
                    size={20}
                    onClick={() => deleteCourier(courier)}
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
