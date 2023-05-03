# GoogleLoginApi

Google Login with JWT in Vite and Node.js
This project demonstrates how to set up Google Login using JSON Web Tokens (JWT) in a Vite frontend and a Node.js backend.

Prerequisites
Before you start, make sure you have the following installed:

Node.js (v14 or later)
npm
Getting Started
Clone this repository:

git clone https://github.com/yourusername/google-login-jwt-vite-node.git
Move into the project directory:

cd google-login-jwt-vite-node
Install the dependencies:

npm install
Set up your Google API credentials:
Go to the Google Cloud Console.
Create a new project and enable the Google+ API.
Go to "Credentials" and create an "OAuth client ID" for a "Web application."
Add your authorized JavaScript origins and redirect URIs.
Replace your_client_id and your_client_secret in the .env file with your actual Google API credentials.
Set a JWT secret in the .env file:
Replace your_jwt_secret with a secure secret string.
Running the Application
Start the Vite development server:

npm run dev
In a separate terminal window, start the Node.js backend:

node server.js
Open your browser and go to http://localhost:8080 (or the port Vite is running on).

Click the "Login with Google" button and sign in with your Google account. The backend will verify the token and send back a JWT. The frontend will log the received JWT in the console.

License
This project is licensed under the MIT License.
