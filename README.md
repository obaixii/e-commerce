

# Ecommerce App

This is a full-stack ecommerce application built using the MERN (MongoDB, Express, React, Node) stack. It allows users to browse products, add them to their cart, and make purchases using Stripe integration.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

## Installation

To install the dependencies for this project, clone the repository and run the following command in both the `client` and `server` directories:

```bash
npm install
```

You will also need to set up a MongoDB database, Stripe account, and create a `.env` file in the `server` directory with the following environment variables:

```bash
PORT = 9999
# DB_URI = <your mongodb uri> # MongoDb Compass
# DB_URI = <your mongodb uri> # MongoDb Atlas
# PASS_SEC= <your CryptoJs secret>
# JWT_SEC = <your jwt secret>
# STRIPE_SECRET_KEY= <your stripe secret key>
```

## Usage

To start the application, run the following command in both the `client` and `server` directories:

```bash
npm start
```

This will start the React app on `http://localhost:3000` and the server on `http://localhost:9999`.

## Technologies Used

- React
- Styled Components
- Node.js
- Express
- MongoDB
- JSON Web Tokens (JWT)
- CryptoJS
- Stripe

## Contributing

Contributions to this project are welcome! If you find any issues or have suggestions for improvements, please open an issue or pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.
