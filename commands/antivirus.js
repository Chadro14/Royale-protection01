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

js
const config = require('./config');

module.exports = {
  name: 'antivirus',
  execute(m, args) {
    const option = args[0];
    if (option === 'on') {
      config.setOption('antivirus', true);
      return m.reply('🛡️ Antivirus activé.\n\n_By Altesse 🌹_');
    } else if (option === 'off') {
      config.setOption('antivirus', false);
      return m.reply('⚠️ Antivirus désactivé.\n\n_By Altesse 🌹_');
    } else {
      return m.reply('Utilise `.antivirus on` ou `.antivirus off`\n\n_By Altesse 🌹_');
    }
  }
};
