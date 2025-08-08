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

js
const config = require('./config');

module.exports = {
  name: 'antispam',
  execute(m, args) {
    const option = args[0];
    if (option === 'on') {
      config.setOption('antispam', true);
      return m.reply('🛡️ Antispam activé.\n\n_By Altesse 🌹_');
    } else if (option === 'off') {
      config.setOption('antispam', false);
      return m.reply('⚠️ Antispam désactivé.\n\n_By Altesse 🌹_');
    } else {
      return m.reply('Utilise `.antispam on` ou `.antspam off`\n\n_By Altesse 🌹_');
    }
  }
};
