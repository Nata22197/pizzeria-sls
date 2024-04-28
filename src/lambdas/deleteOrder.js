'use strict';
const { deleteOrder } = require('../services/dynamoDBService');
const { responseFactory, errorFactory } = require('../utils/response');

module.exports.handler = async (event) => {
  try {
    const id = event?.pathParameters?.id;
    const response = await deleteOrder(id);

    if (!response) return responseFactory(null);

    return responseFactory({ message: 'The order was deleted!' });
  } catch (error) {
    console.log(error);
    return errorFactory(error);
  }
};
