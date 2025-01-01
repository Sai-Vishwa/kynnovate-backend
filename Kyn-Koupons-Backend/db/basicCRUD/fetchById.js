
const {db} = require("../connection");

async function fetchById(collection, id) {
  try {
    const docRef = db.collection(collection).doc(id);
    const docSnap = await docRef.get();
    if (!docSnap.exists) {
      console.error(`Document with ID ${docId} not found in collection ${collectionName}`);
      return {msg:"empty"};
    }

    return {msg:"success",data:docSnap.data()};
  } catch (error) {
    console.error('Error fetching document:', error);
    return {msg:"error"};
  }
}

module.exports = {
    fetchById
}