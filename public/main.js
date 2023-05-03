import { gapi } from 'google-api-client';

const GOOGLE_CLIENT_ID = 'YOUR_GOOGLE_CLIENT_ID';

gapi.load('auth2', () => {
  gapi.auth2
    .init({
      client_id: GOOGLE_CLIENT_ID,
      scope: 'profile email',
    })
    .then(() => {
      const authInstance = gapi.auth2.getAuthInstance();
      const googleLoginButton = document.getElementById('google-login');

      googleLoginButton.onclick = () => {
        authInstance
          .signIn()
          .then(googleUser => {
            const id_token = googleUser.getAuthResponse().id_token;
            // Send the token to the backend for validation
            fetch('http://localhost:3000/auth/google', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ token: id_token }),
            })
              .then(response => response.json())
              .then(data => console.log(data));
          })
          .catch(error => {
            console.error('Error signing in:', error);
          });
      };
    });
});
