js
module.exports = {
  name: "antivirus
    description: "Analyse les messages pour virus.",
  execute(client, message) {
    const virusWords = ["rm -rf", "wget", "curl", "<script>"];
    if (virusWords.some(word => message.body.includes(word))) {
      message.reply("🛡️ Virus détecté et supprimé !");
    }
  }
}
