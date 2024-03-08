window.addEventListener('message', function (event) {
  // Vérifier l'origine pour des raisons de sécurité
  console.log('Message reçu :', event.data);
  if (event.origin !== 'Origine autorisée') {
    return; // Ne pas traiter le message si l'origine ne correspond pas
  }

  // Traiter le message ici
  console.log('Message reçu :', event.data);
});