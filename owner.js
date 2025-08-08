

js
// owner.js
const OWNER_NUMBER = '243905526836@c.us'; // Ton numéro WhatsApp formaté

function isOwner(sender) {
  return sender === OWNER_NUMBER;
}

module.exports = { OWNER_NUMBER, isOwner };


