db.voos.find({
    $and: [
      {
        "litrosCombustivel": { $not: { $gt: 1000 }},
      },
      {
        "litrosCombustivel": { $exists: true }
      }
    ]
  }, { "vooId": true, "_id": false, "litrosCombustivel": true }).limit(1);