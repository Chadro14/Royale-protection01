js
module.exports = {
  name: "antispam",
  description: "Bloque les messages suspects ou répétés.",
  execute(client, message) {
    if (message.body.length > 500 || message.body.includes("http")) {
      message.reply("❌ Spam détecté et bloqué.");
    }
  }
}

