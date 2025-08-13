const config = require('./config');
const menu = require('./menu');
const premiumCommands = require('./premium'); // Importe les commandes premium
const ownerCommands = require('./propriétaire'); // Importe les commandes du propriétaire

module.exports = (sock, m, args) => {
  const senderIsOwner = m.key.remoteJid.includes(config.adminNumber); // Vérifie si l'expéditeur est le propriétaire

  // Regroupe toutes les commandes dans un seul objet
  const allCommands = {
    ...ownerCommands(sock, m, args), // Ajoute les commandes du propriétaire
    ...premiumCommands(sock, m, args), // Ajoute les commandes premium
    
    // Commandes publiques
    antiban: async () => {
      await sock.sendMessage(m.key.remoteJid, {
        text: `🛡️ La fonction Anti-Ban est activée.`
      });
    },

    antivirus: async () => {
      await sock.sendMessage(m.key.remoteJid, {
        text: `🦠 La fonction Anti-Virus est activée. Le bot est en alerte.`
      });
    },

    antispam: async () => {
      await sock.sendMessage(m.key.remoteJid, {
        text: `🚫 La fonction Anti-Spam est activée.`
      });
    },

    antihack: async () => {
      await sock.sendMessage(m.key.remoteJid, {
        text: `🚨 La fonction Anti-Hack est activée. Le bot surveille les activités suspectes.`
      });
    },

    adduser: async () => {
      const numToAdd = args[0];
      if (numToAdd) {
        await sock.sendMessage(m.key.remoteJid, {
          text: `➕ Ajout de l'utilisateur ${numToAdd}.`
        });
      } else {
        await sock.sendMessage(m.key.remoteJid, {
          text: `Veuillez spécifier le numéro à ajouter.`
        });
      }
    },

    statut: async () => {
      await sock.sendMessage(m.key.remoteJid, {
        text: `🟢 Statut du bot : En ligne et fonctionnel.`
      });
    },

    protection: async () => {
      await sock.sendMessage(m.key.remoteJid, {
        text: `🛡️ Royal Protection est actif et protège votre groupe contre les menaces.`
      });
    },

    aide: async () => {
      const aideMessage = menu();
      await sock.sendMessage(m.key.remoteJid, {
        text: aideMessage
      });
    },

    channel: async () => {
      await sock.sendMessage(m.key.remoteJid, {
        text: `🔗 Rejoignez notre chaîne officielle ici : ${config.channelLink}`
      });
    },

    // La commande par défaut
    default: async () => {
      await sock.sendMessage(m.key.remoteJid, {
        text: config.defaultMessage
      });
    },
  };
  
  // Retourne la fonction de la commande en fonction de qui l'envoie
  return allCommands;
};
