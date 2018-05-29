'use strict';

const shortenUrl = require('./handlers/create');
const readUrl = require('./handlers/read');

const create = (event, context, callback) => {
    const data = JSON.parse(event.body);
    shortenUrl(data)
        .then(result => {
            const response = { body: JSON.stringify(result) };
            callback(null, response);
        })
        .catch(callback);
};

const redirect = (event, context, callback) => {
    readUrl(event.pathParameters.id)
        .then(result => {
            const response = {
                statusCode: 302,
                headers: {
                    Location: result.Item.original
                }
            };
            callback(null, response);
        })
        .catch(callback);
};


module.exports = {
    create,
    redirect
};