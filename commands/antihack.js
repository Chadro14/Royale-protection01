js
module.exports = {
  name: "antihack",
  description: "Détecte les comportements suspects.",
  execute(client, message) {
    if (message.body.includes("token") || message.body.includes("session")) {
      message.reply("⚠️ Tentative de piratage détectée !");
    }
  }
}
