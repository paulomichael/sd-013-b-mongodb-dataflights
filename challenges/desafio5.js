db.voos.find({}, { vooId: true, _id: false }).skip(9).limit(3);
// https://qastack.com.br/programming/25589113/how-to-select-a-single-field-for-all-documents-in-a-mongodb-collection