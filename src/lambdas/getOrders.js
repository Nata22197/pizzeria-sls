'use strict';
const { getOrders } = require('../order/dynamoDBStore');
const { responseFactory, errorFactory } = require('../utils/response');

module.exports.handler = async () => {
  try {
    const orders = await getOrders();

    if (!orders.length) return responseFactory(null);

    return responseFactory(orders);
  } catch (error) {
    console.log(error);
    return errorFactory(error);
  }
};
