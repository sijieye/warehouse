module.exports = async function (context, req) {
    const apiKey = process.env.apiKey;

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: {"apiKey": "5Wh4tAgqvuFMxqqxOSydVYeMFzjC0WuqGNyQramc5g6zAzFu-tGs4Q=="}
    };
}