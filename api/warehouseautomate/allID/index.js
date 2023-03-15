module.exports = async function (context, req) {
    var documents = context.bindings.cosmosDB;
    var info = {"allID": documents}

    context.res = {
        body: info
    };
}