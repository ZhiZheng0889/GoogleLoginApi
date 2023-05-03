const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const { google } = require('googleapis');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

const oauth2Client = new google.auth.OAuth2();
oauth2Client.setCredentials({ client_secret: process.env.GOOGLE_CLIENT_SECRET });

app.post('/auth/google', async (req, res) => {
  const { token } = req.body;

  try {
    const ticket = await oauth2Client.verifyIdToken({
      idToken: token,
      audience: process.env.GOOGLE_CLIENT_ID,
    });
    const payload = ticket.getPayload();
    const userId = payload['sub'];
    const email = payload['email'];

    // Generate a JWT for the user
    const jwtToken = jwt.sign({ userId, email }, process.env.JWT_SECRET, { expiresIn: '1h' });

        // Send the JWT back to the frontend
        res.status(200).json({ token: jwtToken });
    } catch (error) {
      console.error('Error verifying token:', error);
      res.status(400).json({ error: 'Invalid token' });
    }
  });
  
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
  

   
