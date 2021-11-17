db.voos.find({
    $and: [
      {
        "litrosCombustivel": { $not: { $gt: 600 }}
      },
      {
        "empresa.nome": { $not: { $in: ["GOL", "AZUL"] } },
      },
      {
        "litrosCombustivel": { $exists: true }
      }
    ]
  }, { "vooId": true, "_id": false, "litrosCombustivel": true, "empresa.nome": true })
  .limit(1);