module.exports = async function (context, req) {
    const contents = req.body.Received
    context.bindings.cosmosDB = JSON.stringify(contents)

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: "Successful insert!"
    };
}