db.voos.find({ "rtk": { $not: { $exists: true } } }, { "vooId": true, "_id": false }).limit(1);