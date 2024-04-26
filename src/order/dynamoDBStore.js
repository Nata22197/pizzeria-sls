'use strict';

const { DynamoDBClient } = require('@aws-sdk/client-dynamodb');
const {
    DynamoDBDocument,
    ScanCommand,
    PutCommand,
    GetCommand,
    DeleteCommand
} = require('@aws-sdk/lib-dynamodb');
require('dotenv').config()

/*
 order : {
  orderId: String,
  name: String,
  address: String,
  pizzas: Array of Strings,
  delivery_status: READY_FOR_DELIVERY / DELIVERED
  timestamp: timestamp
}
*/
function init() {
    const dBOptions = {
        region: process.env.REGION, // Aunque estés en local, la región es necesaria pero no afecta al usar DynamoDB localmente
        endpoint: process.env.DOMAIN_NAME // Endpoint local de DynamoDB
    };

    const client = new DynamoDBClient(dBOptions);
    return DynamoDBDocument.from(client);
}

async function getOrders () {
    const client = init();

    const params = new ScanCommand({
        TableName: process.env.TABLE_NAME,
        Limit: 1000
    });

    const orders = await client.send(params);
    if (!orders.Items) return [];

    return orders.Items;
};

async function getOrderById (id) {
    const client = init();

	const params = new GetCommand({
		TableName: process.env.TABLE_NAME,
        Key: {
            orderId: id,
        }
	});

	const { Item } = await client.send(params);

    if (!Item) return null;
    return Item;
};

async function postOrder (order) {
    const client = init();
    order.delivery_status = 'READY_FOR_DELIVERY';

    const params = new PutCommand({
        TableName: process.env.TABLE_NAME,
        Item: order,
        ConditionExpression: 'attribute_not_exists(orderId)',
    });

    await client.send(params);
};

async function putOrder (order, id) {
    const client = init();

    const params = new PutCommand({
        TableName: process.env.TABLE_NAME,
        Item: order,
        Key: {
            orderId: id,
        },
        ConditionExpression: 'attribute_exists(orderId)',
    });
    await client.send(params);
    return getOrderById(id);
};

module.exports = {
    getOrders,
    getOrderById,
    postOrder,
    putOrder,
};
  