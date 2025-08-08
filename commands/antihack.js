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

js
const config = require('./config');

module.exports = {
  name: 'antihack',
  execute(m, args) {
    const option = args[0];
    if (option === 'on') {
      config.setOption('antihack', true);
      return m.reply('🛡️ Antihack activé.\n\n_By Altesse 🌹_');
    } else if (option === 'off') {
      config.setOption('antihack', false);
      return m.reply('⚠️ Antihack désactivé.\n\n_By Altesse 🌹_');
    } else {
      return m.reply('Utilise `.antihackon` ou `.antihack off`\n\n_By Altesse 🌹_');
    }
  }
};
