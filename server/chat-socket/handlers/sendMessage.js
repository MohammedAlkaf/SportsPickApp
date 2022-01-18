const sendMessage = async (client, message, room) => {

    const db = client.db("SportsPickApp");
    await db.collection(`${room}`).insertOne(message);
}
;

module.exports = { sendMessage }