module.exports = async function (context, req) {
    var documents = context.bindings.cosmosDB;
    var info = documents.map(dic => (({ Date, WarehouseID, ShippingPO, ShipmentID, BoxesRcvd }) => ({ Date, WarehouseID, ShippingPO, ShipmentID, BoxesRcvd}))(dic))


    context.res = {
        body: info
    };
}