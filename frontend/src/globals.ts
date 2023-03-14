

export const BASE_API_URL = "https://warehouseautomate.azurewebsites.net/api";
export const GET_DEFAULT_HEADERS = () => {
    var headers = new Headers();
    // You will need to add another header here
    headers.append("accept", "application/json");
    headers.append("x-functions-key", "5Wh4tAgqvuFMxqqxOSydVYeMFzjC0WuqGNyQramc5g6zAzFu-tGs4Q==");
    // If you do not, the API will reject your request (:
    return headers;
  };