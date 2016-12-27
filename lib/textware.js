var unirest = require('unirest');
var qs = require('querystring');
var uri = require('url-join');
var uuid = require('node-uuid');

const BASE_URL = "http://www.textware.lk:5000/";

function TextWare(options) {
  this.options = {
    username: options.username,
    password: options.password,
    source: options.source
  };
}

var API = TextWare.prototype;
module.exports = API;
module.exports.create = create;

API._createRequest = function(url, options, callback) {
  var identifier = uuid.v1();
  unirest.get(url)
    .query(options)
    .headers({
      'textware-identifier': identifier,
      'User-Agent': 'node-textware (http://github.com/ishan-marikar/node-textware)'
    })
    .end(function(response) {
      if (response.error) {
        return callback(response.error, null);
      }
      return callback(null, response.body);
    });
};

API.sendSMS = function(options, callback) {
  var url = uri(BASE_URL, 'sms/send_sms.php');
  this._createRequest(url, {
    username: this.options.username,
    password: this.options.password,
    src: this.options.source,
    dst: options.recipient,
    msg: options.message
  }, function(error, response) {
    if (error) {
      return callback(error, null);
    }
    if (response === 'credit_over') {
      return callback(new Error('Out of Credit'), null);
    }
    return callback(null, response);
  });
};

function create(options) {
  return new TextWare(options);
}
