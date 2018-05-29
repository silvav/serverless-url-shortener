'use strict';

const AWS = require('aws-sdk');
const dynamoDb = new AWS.DynamoDB.DocumentClient();
const shortid = require('shortid');

module.exports = (data) => {
    const params = {
        TableName: 'urls',
        Item: {
            original: data.url, // TODO to avoid duplicates check for url existence before inserting, validate url
            id: shortid.generate(), // TODO generate the id and check for existing record before inserting
            addedAt: Date.now(),
        }
    };
    return dynamoDb.put(params).promise()
        .then(result => params.Item)
};