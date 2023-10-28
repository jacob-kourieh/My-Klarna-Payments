# Klarna Payments Integration

This project demonstrates an integration of Klarna Payments into a web application. It provides a simple user interface to input an order amount, initiate a Klarna payment session, and process the payment to complete an order.

## Author

[Jacob Kourieh](http://www.jacob-kourieh.com)

## Features

- Input field for order amount
- Integration with Klarna Payments API
- Server-side order creation and payment processing
- Display of order confirmation details

## How it Works

1. The user inputs an order amount and clicks "Submit".
2. A Klarna payment session is created, and Klarna's payment method options are displayed.
3. The user clicks "Pay" to proceed with the payment.
4. Upon successful payment, an order is placed, and the confirmation details are displayed.

## Screenshots

### Start with Input

![Start with Input](/images/start_with_input.png)

### Pay Button Displayed

![Pay Button Displayed](/images/to_pay.png)

### Order Confirmation

![Order Confirmation](/images/confirm.png)

## Technologies Used

- HTML/CSS/JavaScript for the frontend
- jQuery for DOM manipulation
- Express.js for the backend server
- Axios for HTTP requests
- Klarna Payments API

## Setup and Run

To run this project locally:

1. Clone the repository.
2. Navigate to the project directory.
3. Install dependencies: `npm install`
4. Start the server using `node server.js`
5. Open `http://localhost:3000` in a web browser.

Ensure that you have Node.js and npm installed on your machine before running the above commands.

## License

This project is open-source and available under the MIT License.
