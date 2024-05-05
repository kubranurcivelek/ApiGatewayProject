# Node.js API Gateway Project

## Project Overview
This Node.js project serves as an API Gateway that forwards specific requests to an underlying service. The API Gateway listens on port `3000` and routes requests to two specific endpoints:
- `/api/Website/PayBill`
- `/api/Website/AddBill`

These endpoints are forwarded to a single service which handles payment and bill management operations.

## Design
### Technology Stack
- **Node.js**: The primary runtime environment for our API Gateway.
- **Express.js**: A lightweight web framework used to handle incoming HTTP requests.
- **Axios**: A promise-based HTTP client for forwarding requests to the service.

### Routing Logic
The gateway accepts POST requests to the following endpoints:
- **`/api/Website/PayBill`**: Forwards the request to the payment service to handle the bill payment.
- **`/api/Website/AddBill`**: Forwards the request to the bill management service to add a new bill.

