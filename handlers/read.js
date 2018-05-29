'use strict';

const AWS = require('aws-sdk');
const dynamoDb = new AWS.DynamoDB.DocumentClient();

module.exports = (id) => {
    const params = {
        TableName: 'urls',
        Key: { id }
    };
    return dynamoDb.get(params).promise();
};