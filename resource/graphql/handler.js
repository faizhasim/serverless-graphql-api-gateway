import "babel-polyfill";
import {test} from '../../../lib/whatever';

var customMsg = "2016-05-12";
const whatever = () => "asd";

const aPromise = () => Promise.resolve('2016-05-16T15:47:13');

const testAsync = async () => {
  const aPromiseValue = await aPromise();
  return `val => ${aPromiseValue}`;
};

export function handler(event, context, cb) {

  return testAsync().then(val => cb(null, {
    message: `${val} ${test()} ${whatever()} ${customMsg}: Go Serverless! Your Lambda function executed successfully! (Using export function)`
  }));
}
