

```js
// premium.js
const premiumUsers = new Set(); // Stock en mémoire (à améliorer avec DB pour persistance)

// Ajouter un utilisateur premium
function addPremium(userId) {
  premiumUsers.add(userId);
}

// Retirer un utilisateur premium
function removePremium(userId) {
  premiumUsers.delete(userId);
}

// Vérifier si utilisateur est premium
function isPremium(userId) {
  return premiumUsers.has(userId);
}

module.exports = { addPremium, removePremium, isPremium };
```
