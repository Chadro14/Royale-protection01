

js
module.exports = {
  name: "antilink",
  description: "Bloque les liens suspects.",
  execute(client, message) {
    if (message.body.includes("http")) {
      message.reply("🚫 Lien interdit détecté !");
    }
  }
}
