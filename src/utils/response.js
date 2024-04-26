
const dictionaryError = require('./dictionaryError');
function isEmpty(value) {
    return (
      value === undefined ||
      value === null ||
      (typeof value === 'object' && Object.keys(value).length === 0) ||
      (typeof value === 'string' && value.trim().length === 0)
    );
  }
  
function responseFactory(data, status = null) {
  const response = {
    statusCode: status ? status : isEmpty(data) ? 204 : 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
    },
    body: data,
    isBase64Encoded: false,
  };

  return Object.assign(response, { body: JSON.stringify(data) });
}

function errorFactory(error) {
    const errorKey = typeof error === 'string' ? error : 'default';
    let errorResponse = dictionaryError[errorKey];
    if (!errorResponse) {
      errorResponse = dictionaryError['default'];
    }
  
    if (error.errorValue) {
      errorResponse.body.error.message = `${errorResponse.body.error.message}: ${error.errorValue}`;
    }
  
    return responseFactory(errorResponse.body, errorResponse.statusCode);
  }
  

module.exports = {
  responseFactory,
  errorFactory
};
