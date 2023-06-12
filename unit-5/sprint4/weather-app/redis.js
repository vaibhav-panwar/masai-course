const redis = require('redis');

const client = redis.createClient('redis://default:pRfmZNjP6FSRXkr3B9LTLfDNd0MMOGOv@redis-13146.c264.ap-south-1-1.ec2.cloud.redislabs.com:13146');


const redisConnect = client.connect();
   


module.exports = {client,redisConnect};
