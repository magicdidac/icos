export default (statusCode: number, body: any) => {
  return {
    statusCode: statusCode,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Content-Type,X-Amz-Date,Authorization,X-Api-Key',
      'Access-Control-Allow-Methods': 'POST, GET, PUT, DELETE, OPTIONS'
    },
    body: JSON.stringify(body)
  }
}