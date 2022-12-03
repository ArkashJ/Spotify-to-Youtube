const {google} = require('googleapis');

const oauth2Client = new google.auth.OAuth2(
  "489746260370-afitsmlclo3gpg0vt58dmpfjf8koviaq.apps.googleusercontent.com",
  "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",
  "http://localhost:8081"
);

// generate a url that asks permissions for Blogger and Google Calendar scopes
const scopes = [
  'https://www.googleapis.com/auth/youtube'
];

const url = oauth2Client.generateAuthUrl({
  // 'online' (default) or 'offline' (gets refresh_token)
  access_type: 'offline',

  // If you only need one scope you can pass it as a string
  scope: scopes
});