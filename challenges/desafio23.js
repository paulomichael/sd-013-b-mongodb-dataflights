db.voos.findOne({ litrosCombustivel: { $not: { $gt: 1000 }, $exists: true } },
  { _id: false, vooId: true, litrosCombustivel: true });