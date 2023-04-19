

export const BASE_API_URL = "https://warehouseautomate.azurewebsites.net/api";
export const GET_DEFAULT_HEADERS = (api_key: string) => {
    var headers = new Headers();
    // You will need to add another header here
    headers.append("accept", "application/json");
    headers.append("x-functions-key", api_key);
    // If you do not, the API will reject your request (:
    return headers;
  };