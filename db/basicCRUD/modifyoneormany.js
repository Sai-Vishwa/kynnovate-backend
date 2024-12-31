const db = require("../connection");
async function update(name,val,data,property,collection,id,idflag) {
  if(idflag==false){
    try {
      const snapshot = await db
        .collection(collection)
        .where(name,property,val)
        .get();
  
      if (snapshot.empty) {
        return {msg:"empty"};
      }
      snapshot.forEach(async (doc) => {
        await doc.ref.update(data);
      });
      return {msg:"success"};
    } catch (error) {
      console.error("Error updating documents:", error);
      return {msg:"error"}
    }
  }
  else{
    try {
      await db.collection(collection).doc(id).update(data);
      return {msg:"success"}
    } catch (error) {
      console.error("Error updating document:", error);
      return {msg:"error"}
    }
  }
}
  module.exports = {update}
  