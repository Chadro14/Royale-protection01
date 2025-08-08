

```js
const sendMenu = async (msg) => {
  const menuText = `
╔═════════════════════════════╗
║       👑 Royal Protection 👑       ║
╚═════════════════════════════╝

✨ *Commandes Disponibles :* ✨

🛡️  *antispam*           ➤ Protection contre les spams  
🦠  *antivirus*          ➤ Analyse et suppression de virus  
🔗  *antilink*           ➤ Blocage automatique des liens  
👑  *propriétaire*        ➤ Infos sur le propriétaire  
📞  *service*             ➤ Support client et assistance  
🛡️  *protection*          ➤ Activation de la protection VIP  
➕  *ajouterutilisateur*  ➤ Ajouter un utilisateur autorisé  
⛔  *interdire*            ➤ Interdire un utilisateur suspect  
📊  *statut*              ➤ Voir le statut actuel du bot  

───────────────────────────────

🌹 *Créé par Son Altesse Royal* 🌹
`;

  await msg.reply(menuText);
};

module.exports = { sendMenu };
``
