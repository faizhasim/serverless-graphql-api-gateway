'use strict';

var customMsg = "2016-05-12";
const whatever = () => "asd";

module.exports.handler = function(event, context, cb) {
  return cb(null, {
    message: `${whatever()} ${customMsg}: Go Serverless! Your Lambda function executed successfully!`
  });
};
