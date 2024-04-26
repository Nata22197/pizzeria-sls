'use strict';
const { v4: uuidv4 } = require('uuid');
const { postOrder } = require('../order/dynamoDBStore');
const { responseFactory, errorFactory } = require('../utils/response');

module.exports.handler = async (event) => {
  const body = JSON.parse(event.body);
  try {
    const order = {
      orderId: uuidv4(),
      name: body.name,
      address: body.address,
      pizzas: body.pizzas,
      timestamp: Date.now()
    };
    await postOrder(order);
    return responseFactory({ message: 'The order was created correctly!' });
  } catch (error) {
    console.log(error);
    return errorFactory(error);
  }
};
