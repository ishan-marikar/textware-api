# textware-api



## Installation

Download node at [nodejs.org](http://nodejs.org) and install it, if you haven't already.

```sh
npm install textware-api --save
```

## Usage

``` js
var TextWare = require('textware-api').create({
  username: 'test',
  password: '123',
  source: 'test'
});

TextWare.sendSMS({
  recipient: '94761234567',
  message: 'This is a test message.'
}, function(error, response) {
  if(error) throw error;
  console.log(response);
});

```

## Dependencies

- [node-uuid](https://github.com/broofa/node-uuid): Rigorous implementation of RFC4122 (v1 and v4) UUIDs.
- [unirest](https://github.com/Mashape/unirest-nodejs): Simplified, lightweight HTTP client library
- [url-join](https://github.com/jfromaniello/url-join): Join urls and normalize as in path.join.

## Dev Dependencies


None

## License

ISC
