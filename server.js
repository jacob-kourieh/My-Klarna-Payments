require("dotenv").config();
const express = require("express");
const axios = require("axios");
const bodyParser = require("body-parser");
const path = require("path");
const cors = require("cors");
const app = express();
const port = 3000;

const {
  API_BASE_URL: klarna_base_url,
  API_USERNAME: klarnaUname,
  API_PSW: klarnaPsw,
} = process.env;

// Enable CORS for all routes
app.use(cors());

// Serve static files from the "public" directory
app.use(express.static("public"));

// Parse JSON bodies
app.use(bodyParser.json());

// Klarna API credentials
const klarnaCredentials = {
  username: klarnaUname,
  password: klarnaPsw,
};

// Route to create Klarna session
app.post("/create-session", async (req, res) => {
  try {
    const response = await axios.post(
      `${klarna_base_url}/payments/v1/sessions`,
      req.body,
      {
        auth: klarnaCredentials,
        headers: { "Content-Type": "application/json" },
      },
    );
    res.json(response.data);
  } catch (error) {
    console.error("Error creating Klarna session:", error);
    res.status(500).send("Internal Server Error");
  }
});

// Route to place Klarna order
app.post("/place-order/:authorizationToken", async (req, res) => {
  const { authorizationToken } = req.params;
  try {
    const response = await axios.post(
      `${klarna_base_url}/payments/v1/authorizations/${authorizationToken}/order`,
      req.body,
      {
        auth: klarnaCredentials,
        headers: { "Content-Type": "application/json" },
      },
    );
    res.json(response.data);
  } catch (error) {
    console.error("Error placing Klarna order:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Serve HTML file for root route
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
