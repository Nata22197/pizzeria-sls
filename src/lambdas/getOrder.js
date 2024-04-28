'use strict';
const { getOrderById } = require('../services/dynamoDBService');
const { responseFactory, errorFactory } = require('../utils/response');

module.exports.handler = async (event) => {
  try {
    const id = event?.pathParameters?.id;
    const order = await getOrderById(id);

    if (!order) return responseFactory(null);

    return responseFactory(order);
  } catch (error) {
    console.log(error);
    return errorFactory(error);
  }
};
