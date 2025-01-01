const { FieldValue } = require("@google-cloud/firestore");
const db = require("../connection");

async function increment(collection, id, name, inc) {
  try {
    const docRef = db.collection(collection).doc(id);

    await docRef.update({
      [name]: FieldValue.increment(inc),
    });

    return {msg:"success"}

  } catch (error) {
    console.error("Error incrementing field value:", error);
    return {msg:"error"}
  }
}

module.exports = {
    increment
}
