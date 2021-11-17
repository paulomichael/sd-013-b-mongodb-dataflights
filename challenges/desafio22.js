db.voos.find({ "empresa.nome": { $in: ["DELTA AIRLINES", "AMERICAN AIRLINES"] }, "aeroportoOrigem.sigla": "SBGR", "aeroportoDestino.sigla": "KJFK" }, { "vooId": true, "_id": false }).limit(1);
