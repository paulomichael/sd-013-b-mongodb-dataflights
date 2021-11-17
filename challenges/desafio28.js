const company = "LATAM AIRLINES BRASIL";

db.resumoVoos.insertOne({ empresa: company,
totalVoosDomesticos: db.voos.count({ "empresa.nome": company, natureza: "Doméstica" }) });

db.resumoVoos.find({ empresa: company }, { _id: 0 });