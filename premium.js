module.exports = (sock, m, args) => {
  return {
    premiuminfo: async () => {
      await sock.sendMessage(m.key.remoteJid, {
        text: "👑 Vous êtes un utilisateur premium. Vos commandes spéciales sont en cours de développement !",
      });
    },
    // Ajoutez d'autres commandes premium ici
  };
};
