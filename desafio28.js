const empresa = "LATAM AIRLINES BRASIL";

db.resumoVoos.insertOne({
    empresa,
    totalVoosDomesticos: db.voos.count({
    $and: [
        { "empresa.nome": empresa },
        { natureza: "Doméstica" },
    ] }) });

db.resumoVoos.findOne({ empresa }, { empresa: true, totalVoosDomesticos: true, _id: false });
