var TextWare = require('../index').create({
  username: 'test',
  password: '123',
  source: 'test'
});

TextWare.sendSMS({
  recipient: '94768260612',
  message: 'This is a test message.'
}, function(error, response) {
  if(error) {
    console.log(error);
  }
  console.log(response);
});
