const accountSid = "ACeccbc9e21995fe3832e1ee1f38527121";
const authToken = "713df45806841f87616ff134a9fdd55e";
const client = require('twilio')(accountSid, authToken);

client.messages
  .create({
     body: 'This is the ship that made the Kessel Run in fourteen parsecs?',
     from: '+19032825526',
     to: '+15202494853'
   })
  .then(message => console.log(message.sid));