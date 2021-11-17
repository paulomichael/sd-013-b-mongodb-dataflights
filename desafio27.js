db.resumoVoos.insertOne({
    empresa: "PASSAREDO",
    totalVoosDomesticos: db.voos.count(
    { $and: [
        { "empresa.nome": "PASSAREDO" },
        { natureza: "Doméstica" },
    ] },
    ),
});

db.resumoVoos.findOne(
    { empresa: "PASSAREDO" },
    { empresa: true, totalVoosDomesticos: true, _id: false },
);
