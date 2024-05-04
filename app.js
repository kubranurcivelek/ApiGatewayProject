const express = require('express');
const axios = require('axios');
const app = express();
const PORT = 3000;

app.use(express.json());  // For parsing application/json

// Define the address of your single service
const BILL_SERVICE_URL = 'http://localhost:3003';

// Endpoint to handle bill payments
app.post('/api/Website/PayBill', (req, res) => {
  axios.post(`${BILL_SERVICE_URL}/pay`, req.body)
    .then(response => {
      res.send(response.data);
    })
    .catch(error => {
      console.error('Payment Service Error:', error.message);
      res.status(500).send('Payment service is unavailable');
    });
});

// Endpoint to add a new bill
app.post('/api/Website/AddBill', (req, res) => {
  axios.post(`${BILL_SERVICE_URL}/add`, req.body)
    .then(response => {
      res.send(response.data);
    })
    .catch(error => {
      console.error('Bill Management Service Error:', error.message);
      res.status(500).send('Bill management service is unavailable');
    });
});

app.listen(PORT, () => {
  console.log(`API Gateway running on http://localhost:${PORT}`);
});