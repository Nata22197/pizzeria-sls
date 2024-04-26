'use strict';
const { putOrder } = require('../order/dynamoDBStore');
const { responseFactory, errorFactory } = require('../utils/response');

module.exports.handler = async (event) => {
    const id = event?.pathParameters?.id;
    const body = JSON.parse(event.body);
  try {
    const order = {
        orderId: id,
        name: body.name,
        address: body.address,
        pizzas: body.pizzas,
        delivery_status: body.delivery_status,
        timestamp: Date.now()
    };
    const updatedOrder = await putOrder(order, id);

    if (!updatedOrder) return responseFactory(null);

    return responseFactory(updatedOrder);
  } catch (error) {
    console.log(error);
    return errorFactory(error);
  }
};
