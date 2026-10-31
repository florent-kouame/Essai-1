//1. Récupérer les relevés d'une parcelle
export function relevesDeParcelle(releves, idParcelle) {
  return releves.filter(
    (releve) => releve.parcelle === idParcelle
  );
}
// 2. Calculer la moyenne des humidités
export function moyenneHumidite(releves) {
  if (releves.length === 0) {
    return null;
  }

  const total = releves.reduce(
    (somme, releve) => somme + releve.humidite,
    0
  );

  return Math.round(total / releves.length);
}

// 3. Déterminer l'état d'irrigation
export function etatIrrigation(humidite, culture) {
  if (
    humidite === null ||
    humidite === undefined ||
    !culture
  ) {
    return "INCONNU";
  }

  if (humidite < culture.humiditeMin) {
    return "ARROSER";
  }

  if (humidite > culture.humiditeMax) {
    return "DRAINER";
  }

  return "OK";
}